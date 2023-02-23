import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Feedback {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  category: string;

  @Field(() => String)
  status: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
