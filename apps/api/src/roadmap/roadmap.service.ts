import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { Roadmap } from './schema/roadmap.schema';
import { AddRoadmapArgs, EditRoadmapArgs } from './args';

@Injectable()
export class RoadmapService {
  constructor(private readonly prisma: PrismaService) {}
  
  create(args: AddRoadmapArgs): Promise<Roadmap> {
    return this.prisma.roadmap.create({ data: {
      ...args,
      slug: args.text.toUpperCase().replaceAll(' ', '-')
    } });
  }

  findAll(): Promise<Roadmap[]> {
    return this.prisma.roadmap.findMany();
  }

  findOne(id: string): Promise<Roadmap> {
    return this.prisma.roadmap.findUnique({ where: { id } });
  }

  update(id: string, args: EditRoadmapArgs): Promise<Roadmap> {
    return this.prisma.roadmap.update({
      where: { id },
      data: { 
        ...args, 
        slug: args.text.toUpperCase().replaceAll(' ', '-'),
        updatedAt: new Date().toISOString()
      },
    });
  }

  remove(id: string): Promise<Roadmap> {
    return this.prisma.roadmap.delete({ where: { id } });
  }
}
