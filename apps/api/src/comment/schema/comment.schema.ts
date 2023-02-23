import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Comment {
  @Field(() => String)
  id: string;

  @Field(() => String)
  content: string

  @Field(() => String)
  feedbackId: string

  @Field(() => String, { nullable: true })
  subCommentId: string

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date
}
