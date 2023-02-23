import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { CommentService } from './comment.service';
import { Comment } from './schema/comment.schema';
import { AddCommentArgs, EditCommentArgs } from './args';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Mutation(() => Comment, { name: 'addComment' })
  add(@Args('addCommentArgs') args: AddCommentArgs): Promise<Comment> {
    return this.commentService.create(args);
  }

  @Query(() => [Comment], { name: 'findAllCommentsByFeedback' })
  findAllCommentsByFeedback(
    @Args('feedbackId', { type: () => String }) feedbackId: string
  ): Promise<Comment[]> {
    return this.commentService.findAllCommentsByFeedback(feedbackId);
  }

  @Query(() => [Comment], { name: 'findAllSubCommentsByComments' })
  findAllSubCommentsByComments(
    @Args('commentId', { type: () => String }) commentId: string,
    @Args('feedbackId', { type: () => String }) feedbackId: string
  ): Promise<Comment[]> {
    return this.commentService.findAllSubCommentsByComments(
      feedbackId,
      commentId
    );
  }

  @Query(() => Comment, { name: 'findOneComment' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Comment> {
    return this.commentService.findOne(id);
  }

  @Mutation(() => Comment, { name: 'updateComment' })
  updateComment(
    @Args('id', { type: () => String }) id: string,
    @Args('editCommentArgs') args: EditCommentArgs
  ): Promise<Comment> {
    return this.commentService.update(id, args);
  }

  @Mutation(() => Comment, { name: 'deleteComment' })
  removeComment(@Args('id', { type: () => String }) id: string) {
    return this.commentService.remove(id);
  }
}
