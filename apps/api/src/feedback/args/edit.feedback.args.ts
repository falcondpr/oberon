import { AddFeedbackArgs } from './add.feedback.args';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class EditFeedbackArgs extends PartialType(AddFeedbackArgs) {}
