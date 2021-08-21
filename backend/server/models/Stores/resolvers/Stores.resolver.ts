/**
 * User 에 대한 Model 입니다.
 *
 * @author InsungSong, Inc.
 * @packageDocumentation
 * @module server.models.User.resolvers
 * @preferred
 */

import { STORES } from "../../../stores";
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { StoresEntity } from "../entities/Stores.entity";
import { CreateStroesDataInput } from "../inputs/CreateStroesData.input";
import {
  axiosPostCodeSearchProcessing,
  isStoresProcessing
} from "../services/stores.service";
import {
  RegionMergeListObject,
  ResultObject,
  StoresObject
} from "../objects/Stores.object";
import axios from "axios";
import { StoreWhereInput } from "../inputs/StoreWhere.input";
import { PostcodesWhereInput } from "../inputs/PostcodesWhere.input";
/**
 * Stores와 관련된 요청을 처리합니다.
 *
 * @author InsungSong, Inc.
 */

enum REGION {
  NORTH = "North",
  NORTH_WEST = "North West",
  WEST = "West",
  WEST_SOUTH = "West South",
  SOUTH = "South",
  SOUTH_EAST = "South East",
  EAST = "East",
  EAST_NORTH = "East North"
}

@Resolver()
export class StoresResolver {
  //📌Stores.json에 해당 하는 코드를 저장해야합니다.
  //1. 해당 코드는 props 부분으로 저장하고자 하는 stores.json파일을 넘긴다고 했을때 실행된 api입니다.
  @Mutation(() => Boolean)
  async createInputPropsStores(@Arg("data") data: CreateStroesDataInput) {
    try {
      const storesDataList = data.storesData;

      storesDataList.map(async (item, index) => {
        //해당 data가 DB상에 이미 존재하는 data라면 저장하지 않기 위한 코드
        // const isStores = await StoresEntity.createQueryBuilder("stores")
        //   .where("stores.name = :name AND stores.postcode = :postcode", {
        //     name: item.name,
        //     postcode: item.postcode
        //   })
        //   .getOne();

        await isStoresProcessing({
          name: item.name,
          postcode: item.postcode
        });
      });

      return true;
    } catch (e) {
      console.log("createStoresMutation Error: ", e);
      return false;
    }
  }

  //2. 해당 코드는 props로 저장하지 않고 stores.json파일 변수를 받아서 배열 자체를 보고 실행하는 api입니다.
  @Mutation(() => Boolean)
  async createStores() {
    try {
      const result = STORES.map(async (item) => {
        // 해당 data가 DB상에 이미 존재하는 data라면 저장하지 않기 위한 코드
        await isStoresProcessing({
          name: item.name,
          postcode: item.postcode
        });
      });

      await Promise.all(result);

      return true;
    } catch (e) {
      console.log("createStoresMutation Error: ", e);
      return false;
    }
  }

  //📌Stores.json에서 상점 목록을 얻을 수 있습니다.
  //📌Stores.json에서 상점의 특정 항목을 가져올 수 있습니다.
  @Query(() => [StoresObject])
  async storesList() {
    try {
      const storesDataList = await StoresEntity.createQueryBuilder(
        "stores"
      ).getMany();

      return storesDataList;
    } catch (e) {
      console.log("stores Error: ", e);
      return null;
    }
  }

  //📌API 소비자는 Stores.json의 이름으로 항목을 식별할 수 있습니다.
  @Query(() => StoresObject)
  async store(@Arg("where") where: StoreWhereInput) {
    try {
      const { name } = where;

      const currentStore = await StoresEntity.createQueryBuilder("stores")
        .where("stores.name = :name", { name })
        .getOne();

      return currentStore;
    } catch (e) {
      console.log("store Error: ", e);
      return null;
    }
  }

  //해당 부분은 테스트를 진행해야함
  //📌각 우편 번호에 대한 위도와 경도를 얻을 수 있습니다.(postcodes.io를 사용하여 각 우편번호의 위도와 경도를 얻을 수 있습니다.)
  @Query(() => ResultObject)
  async moreInfoStore(@Arg("where") where: PostcodesWhereInput) {
    const { postcode } = where;
    try {
      const resultData = await axiosPostCodeSearchProcessing({
        method: "get",
        postcode,
        url: "https://postcodes.io/postcodes/"
      });

      return resultData;
    } catch (e) {
      console.log("moreInfoStore Error:", e);
      return null;
    }
  }

  //📌영국에서 주어진 우편번호의 주어진 반경에 있는 상점 목록을 반환할 수 있는 기능을 얻을 수 있습니다. (목록은 북쪽에서 남쪽으로 정렬되어야 합니다.)
  @Query(() => [RegionMergeListObject])
  async radiusPostcodeList(@Arg("where") where: PostcodesWhereInput) {
    //경도와 위도의 경우에는 UX적으로 찾게 하는것도, 입력하게 하는것도 좋지 않을 것으로 판단하여 밑의 line에서 해결합니다.
    //PostcodesWhereInput props를 통해서 받을 수 있는 변수를 3개로 정했습니다.
    //postcode : 필수값입니다. -> 주변 검색에 중심이 되는 핵심 prop이기때문입니다.
    //radius: 반경범위는 선택값으로 했으며 입력하지 않을경우 defaultValue: postcode.io에 나와있는 값인 1000으로 지정했습니다.
    //limit : 나올수 있는 반경범위 안에 있는 상점의 수 또한 선택값으로 지정했습니다. 선택하지 않을 경우 postcode.io에 나와있는 값인 5로 지정했습니다.

    const { postcode, radius, limit } = where;

    try {
      const resultData = await axiosPostCodeSearchProcessing({
        method: "get",
        postcode,
        url: "https://postcodes.io/postcodes/"
      });

      //client 부터 받아온 props인 postcode를 통하여 해당하는 postcode의 longitude,latitude를 받아온다.
      const longitude = resultData?.result?.longitude;
      const latitude = resultData?.result?.latitude;

      //currentLongitude, currentLatitude를 가지고 유저가 보내는 radius || (null = 1000 defaultValue)를 통하여 해당 하는 반경의 상점을 찾는다.
      const geolocationsResult = await axios({
        method: "post",
        url: `https://postcodes.io/postcodes`,
        data: {
          geolocations: [
            {
              longitude,
              latitude,
              radius: !radius ? 1000 : radius,
              limit: !limit ? 5 : limit
            }
          ]
        }
      }).then(function (response) {
        return response?.data;
      });

      //postcode.io로부터 받아온 북 -> 남으로 정리되지 않은 배열을 담은 변수
      const unorganizedSearchresultData = geolocationsResult?.result;

      //north : 북 / south : 남 / east : 동 / west : 서
      const northList = [];
      const northWestList = [];
      const westList = [];
      const westSouthList = [];
      const southList = [];
      const southEastList = [];
      const eastListList = [];
      const eastNorthList = [];
      const dummyRegionList = []; //생각한 변수 (북 -> 북 서 -> 서 .... 와 같은 경우가 아닌 경우가 혹시 들어올 상황을 대비해서 만든 변수)

      const filteringSearchResultProcessing = unorganizedSearchresultData?.map(
        (item) => {
          item?.result?.map((depthItem) => {
            const depthItemRegion = depthItem?.region;

            if (depthItemRegion === REGION.NORTH) {
              northList.push(depthItem);
            } else if (depthItemRegion === REGION.NORTH_WEST) {
              northWestList.push(depthItem);
            } else if (depthItemRegion === REGION.WEST) {
              westList.push(depthItem);
            } else if (depthItemRegion === REGION.WEST_SOUTH) {
              westSouthList.push(depthItem);
            } else if (depthItemRegion === REGION.SOUTH) {
              southList.push(depthItem);
            } else if (depthItemRegion === REGION.SOUTH_EAST) {
              southEastList.push(depthItem);
            } else if (depthItemRegion === REGION.EAST) {
              eastListList.push(depthItem);
            } else if (depthItemRegion === REGION.EAST_NORTH) {
              eastNorthList.push(depthItem);
            } else {
              dummyRegionList.push(depthItem);
            }
          });
        }
      );

      Promise.all(filteringSearchResultProcessing);

      //filteringSearchResultProcessing func을 거치고 난후 해당 region 정보를 담은 함수들을 합치는 변수
      const regionMergeList = [
        ...northList,
        ...northWestList,
        ...westList,
        ...westSouthList,
        ...southList,
        ...southEastList,
        ...eastListList,
        ...eastNorthList,
        ...dummyRegionList
      ];

      console.log("regionMergeList: ", regionMergeList);

      return regionMergeList;
    } catch (e) {
      console.log("radiusPostcodeList Error :", e);
      return null;
    }
  }
}
