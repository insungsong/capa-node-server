import axios from "axios";
import { getRepository } from "typeorm";
import { StoresEntity } from "../entities/Stores.entity";

interface IIsStores {
  //   [item: string]: { name: string; postcode: string };
  name: string;
  postcode: string;
}

interface IAxiosPostCodeSearchProcessing {
  method: any;
  url: string;
  postcode: string;
}

//들어온 정보가 db에 존재하는 db인지를 확인하기 위함이다.
export const isStoresProcessing = async ({ name, postcode }: IIsStores) => {
  // const isStores = await StoresEntity.createQueryBuilder("stores")
  //   .where("stores.postcode = :postcode", {
  //     postcode
  //   })
  //   .getOne();

  const isStores = await StoresEntity.findOne({
    where: {
      name,
      postcode
    }
  });

  console.log("isStores: ", isStores);

  if (!isStores) {
    await StoresEntity.create({
      name,
      postcode
    }).save();
  }
};

export const axiosPostCodeSearchProcessing = async ({
  method,
  url,
  postcode
}: IAxiosPostCodeSearchProcessing) => {
  const result = await axios({
    method,
    url: `${url}${postcode}`
  }).then(function (response) {
    const postCodeSearchresultData = response?.data;

    return postCodeSearchresultData;
  });

  return result;
};
