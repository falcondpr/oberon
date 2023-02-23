import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class AddRoadmapArgs {
  @Field(() => String)
  text: string;
}
