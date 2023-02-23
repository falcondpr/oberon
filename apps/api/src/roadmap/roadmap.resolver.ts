import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { RoadmapService } from './roadmap.service';
import { Roadmap } from './schema/roadmap.schema';
import { AddRoadmapArgs, EditRoadmapArgs } from './args';

@Resolver(() => Roadmap)
export class RoadmapResolver {
  constructor(private readonly roadmapService: RoadmapService) {}

  @Mutation(() => Roadmap, { name: 'addRoadmap' })
  createRoadmap(
    @Args('addRoadmapArgs') args: AddRoadmapArgs
  ): Promise<Roadmap> {
    return this.roadmapService.create(args);
  }

  @Query(() => [Roadmap], { name: 'findAllRoadmaps' })
  findAll(): Promise<Roadmap[]> {
    return this.roadmapService.findAll();
  }

  @Query(() => Roadmap, { name: 'findOneRoadmap' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Roadmap> {
    return this.roadmapService.findOne(id);
  }

  @Mutation(() => Roadmap, { name: 'updateRoadmap' })
  updateRoadmap(
    @Args('id', { type: () => String }) id: string,
    @Args('updateRoadmapInput') args: EditRoadmapArgs
  ): Promise<Roadmap> {
    return this.roadmapService.update(id, args);
  }

  @Mutation(() => Roadmap, { name: 'deleteRoadmap' })
  removeRoadmap(@Args('id', { type: () => String }) id: string): Promise<Roadmap> {
    return this.roadmapService.remove(id);
  }
}
