import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { FeedbackService } from './feedback.service';
import { Feedback } from './schema/feedback.schema';
import { EditFeedbackArgs, AddFeedbackArgs } from './args';

@Resolver(() => Feedback)
export class FeedbackResolver {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Mutation(() => Feedback, { name: 'addFeedback' })
  add(@Args('addFeedbackArgs') args: AddFeedbackArgs): Promise<Feedback> {
    return this.feedbackService.create(args);
  }

  @Query(() => [Feedback], { name: 'findAllFeedbacks' })
  findAll(): Promise<Feedback[]> {
    return this.feedbackService.findAll();
  }

  @Query(() => Feedback, { name: 'findOneFeedback' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Feedback> {
    return this.feedbackService.findOne(id);
  }

  @Mutation(() => Feedback, { name: 'updateFeedback' })
  updateFeedback(
    @Args('id', { type: () => String }) id: string,
    @Args('editFeedbackArgs') args: EditFeedbackArgs
  ): Promise<Feedback> {
    return this.feedbackService.update(id, args);
  }

  @Mutation(() => Feedback, { name: 'deleteFeedback' })
  removeFeedback(
    @Args('id', { type: () => String }) id: string
  ): Promise<Feedback> {
    return this.feedbackService.remove(id);
  }
}
