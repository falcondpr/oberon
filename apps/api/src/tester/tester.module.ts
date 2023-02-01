import { Module } from '@nestjs/common';

import { TesterService } from './tester.service';
import { TesterResolver } from './tester.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [PrismaService, TesterResolver, TesterService],
})
export class TesterModule {}
