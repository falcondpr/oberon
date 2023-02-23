import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Roadmap {
  @Field(() => String)
  id: string;

  @Field(() => String)
  text: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => String)
  slug: string;

  @Field(() => Date)
  updatedAt: Date;
}
