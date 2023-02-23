import { AddCommentArgs } from './';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class EditCommentArgs extends PartialType(AddCommentArgs) {}
