import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { AddCommentArgs, EditCommentArgs } from './args';
import { Comment } from './schema/comment.schema';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  create(args: AddCommentArgs) {
    return this.prisma.comment.create({ data: args });
  }

  findAllCommentsByFeedback(feedbackId: string): Promise<Comment[]> {
    return this.prisma.comment.findMany({ where: { feedbackId } });
  }

  findAllSubCommentsByComments(feedbackId: string, subCommentId: string): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      where: { subCommentId, feedbackId },
    });
  }

  findOne(id: string): Promise<Comment> {
    return this.prisma.comment.findUnique({ where: { id } });
  }

  update(id: string, args: EditCommentArgs): Promise<Comment> {
    try {
      return this.prisma.comment.update({ 
        where: { id },
        data: {
        ...args,
        updatedAt: new Date().toISOString()
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  remove(id: string): Promise<Comment> {
    return this.prisma.comment.delete({ where: { id } });
  }
}
