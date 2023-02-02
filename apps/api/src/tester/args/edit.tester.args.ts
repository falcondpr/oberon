import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class EditTesterArgs {
  @Field(() => String, { nullable: true })
  @MinLength(3)
  name?: string;

  @Field(() => String, { nullable: true })
  email?: string;
}
