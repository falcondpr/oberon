import { Module } from '@nestjs/common';

import { RoadmapService } from './roadmap.service';
import { RoadmapResolver } from './roadmap.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [RoadmapResolver, RoadmapService, PrismaService],
})
export class RoadmapModule {}
