import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { Feedback } from './schema/feedback.schema';
import { AddFeedbackArgs, EditFeedbackArgs } from './args';

@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: PrismaService) {}

  create(args: AddFeedbackArgs): Promise<Feedback> {
    return this.prisma.feedback.create({
      data: args,
    });
  }

  findAll() {
    return this.prisma.feedback.findMany();
  }

  findOne(id: string) {
    return this.prisma.feedback.findFirstOrThrow({ where: { id } });
  }

  update(id: string, args: EditFeedbackArgs) {
    try {
      return this.prisma.feedback.update({
        where: { id },
        data: {
          ...args,
          updatedAt: new Date().toISOString(),
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  remove(id: string) {
    return this.prisma.feedback.delete({ where: { id } });
  }
}
