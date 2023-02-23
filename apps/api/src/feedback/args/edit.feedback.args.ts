import { AddFeedbackArgs } from './add.feedback.args';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class EditFeedbackArgs extends PartialType(AddFeedbackArgs) {
  @Field(() => String, { nullable: true })
  status?: string
}
