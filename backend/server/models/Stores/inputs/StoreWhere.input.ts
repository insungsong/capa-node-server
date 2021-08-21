import { Field, InputType } from "type-graphql";
import GraphQLJSON from "graphql-type-json";

@InputType()
export class StoreWhereInput {
  @Field()
  name: string;
}
