import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Tester {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  email: string;
}
