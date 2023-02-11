import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AddFeedbackArgs {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  category: string;
}
