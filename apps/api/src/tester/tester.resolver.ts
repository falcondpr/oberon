import { Resolver, Query } from '@nestjs/graphql';

import { TesterService } from './tester.service';
import { Tester } from './schema/tester.schema';
import { Tester as TesterModel } from '../graphql';

@Resolver(() => Tester)
export class TesterResolver {
  constructor(private readonly testerService: TesterService) {}

  @Query(() => [Tester], { name: 'testers' })
  async findAll(): Promise<TesterModel[]> {
    return await this.testerService.findAll();
  }
}
