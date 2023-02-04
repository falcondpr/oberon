import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

@InputType()
export class AddUserArgs {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @MinLength(6)
  fullname: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  @MinLength(6)
  password: string;

  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field(() => String)
  role: string;
}
