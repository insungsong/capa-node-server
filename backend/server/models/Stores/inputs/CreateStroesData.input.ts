import { Field, InputType } from "type-graphql";
import GraphQLJSON from "graphql-type-json";

@InputType()
class StoresData {
  @Field()
  name: string;
  @Field()
  postcode: string;
}

@InputType()
export class CreateStroesDataInput {
  @Field((type) => [StoresData])
  storesData: StoresData[];
}
