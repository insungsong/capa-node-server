import { Field, InputType } from "type-graphql";

@InputType()
export class PostcodesWhereInput {
  @Field()
  postcode: string;

  @Field({ nullable: true })
  radius: number;

  @Field({ nullable: true })
  limit: number;
}
