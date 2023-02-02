import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class AddTesterArgs {
  @Field(() => String)
  id: string;

  @Field(() => String)
  @MinLength(3)
  name: string;

  @Field(() => String, { nullable: true })
  email?: string;
}
