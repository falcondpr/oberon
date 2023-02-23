import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AddCommentArgs {
  @Field(() => String)
  content: string;

  @Field(() => String)
  feedbackId: string;

  @Field(() => String, { nullable: true })
  subCommentId: string;
}
