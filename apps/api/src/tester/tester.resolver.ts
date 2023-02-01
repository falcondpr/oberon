import { Resolver, Query } from '@nestjs/graphql';

import { TesterService } from './tester.service';
import { Tester } from './schema/tester.schema';

@Resolver(() => Tester)
export class TesterResolver {
  constructor(private readonly testerService: TesterService) {}

  @Query(() => [Tester], { name: 'testers' })
  findAll() {
    return this.testerService.findAll();
  }
}
