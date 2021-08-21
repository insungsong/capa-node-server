/**
 * @author InsungSong, Inc.
 * @packageDocumentation
 * @module server.models.User.objects
 */

import { ObjectType, Field, ID, Float } from "type-graphql";

/**
 * {@link Stores} 에서 반환되는 데이터를 확인하기위한 ObjectType 입니다.
 *
 * @author InsungSong, Inc.
 */

@ObjectType()
// UserObject 입니다.
export class StoresObject {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  postcode: string;

  @Field({ nullable: true })
  createdDate: Date;

  @Field({ nullable: true })
  updatedDate: Date;

  @Field({ nullable: true })
  deletedDate: Date;
}

@ObjectType()
export class CodesObject {
  @Field({ nullable: true })
  admin_district: string;

  @Field({ nullable: true })
  admin_county: string;

  @Field({ nullable: true })
  admin_ward: string;

  @Field({ nullable: true })
  parish: string;

  @Field({ nullable: true })
  parliamentary_constituency: string;

  @Field({ nullable: true })
  ccg: string;

  @Field({ nullable: true })
  ccg_id: string;

  @Field({ nullable: true })
  ced: string;

  @Field({ nullable: true })
  nuts: string;

  @Field({ nullable: true })
  lsoa: string;

  @Field({ nullable: true })
  msoa: string;

  @Field({ nullable: true })
  lau2: string;
}
@ObjectType()
export class DepthResultObject {
  @Field({ nullable: true })
  postcode: string;

  @Field({ nullable: true })
  quality: number;

  @Field({ nullable: true })
  eastings: number;

  @Field({ nullable: true })
  northings: number;

  @Field({ nullable: true })
  country: string;

  @Field({ nullable: true })
  nhs_ha: string;

  @Field((type) => Float, { nullable: true })
  longitude: number;

  @Field((type) => Float, { nullable: true })
  latitude: number;

  @Field({ nullable: true })
  european_electoral_region: string;

  @Field({ nullable: true })
  primary_care_trust: string;

  @Field({ nullable: true })
  region: string;

  @Field({ nullable: true })
  lsoa: string;

  @Field({ nullable: true })
  msoa: string;

  @Field({ nullable: true })
  incode: string;

  @Field({ nullable: true })
  outcode: string;

  @Field({ nullable: true })
  parliamentary_constituency: string;

  @Field({ nullable: true })
  admin_district: string;

  @Field({ nullable: true })
  parish: string;

  @Field({ nullable: true })
  admin_county: string;

  @Field({ nullable: true })
  admin_ward: string;

  @Field({ nullable: true })
  ced: string;

  @Field({ nullable: true })
  ccg: string;

  @Field({ nullable: true })
  nuts: string;

  @Field({ nullable: true })
  distance: string;
}

@ObjectType()
export class ResultObject {
  @Field({ nullable: true })
  status: number;

  @Field((type) => DepthResultObject, { nullable: true })
  result: DepthResultObject;

  @Field((type) => CodesObject, { nullable: true })
  codes: CodesObject;
}

@ObjectType()
export class RegionMergeListObject {
  @Field()
  @Field({ nullable: true })
  postcode: string;

  @Field({ nullable: true })
  quality: number;

  @Field({ nullable: true })
  eastings: number;

  @Field({ nullable: true })
  northings: number;

  @Field({ nullable: true })
  country: string;

  @Field({ nullable: true })
  nhs_ha: string;

  @Field((type) => Float, { nullable: true })
  longitude: number;

  @Field((type) => Float, { nullable: true })
  latitude: number;

  @Field({ nullable: true })
  european_electoral_region: string;

  @Field({ nullable: true })
  primary_care_trust: string;

  @Field({ nullable: true })
  region: string;

  @Field({ nullable: true })
  lsoa: string;

  @Field({ nullable: true })
  msoa: string;

  @Field({ nullable: true })
  incode: string;

  @Field({ nullable: true })
  outcode: string;

  @Field({ nullable: true })
  parliamentary_constituency: string;

  @Field({ nullable: true })
  admin_district: string;

  @Field({ nullable: true })
  parish: string;

  @Field({ nullable: true })
  admin_county: string;

  @Field({ nullable: true })
  admin_ward: string;

  @Field({ nullable: true })
  ced: string;

  @Field({ nullable: true })
  ccg: string;

  @Field({ nullable: true })
  nuts: string;

  @Field((type) => CodesObject, { nullable: true })
  codes: CodesObject;

  @Field({ nullable: true })
  distance: string;
}
