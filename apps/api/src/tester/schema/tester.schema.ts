import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Tester {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  email: string;
}
