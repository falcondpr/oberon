import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { TesterService } from './tester.service';
import { Tester } from './schema/tester.schema';
import { Tester as TesterModel } from '../graphql';
import { AddTesterArgs, EditTesterArgs } from './args';

@Resolver(() => Tester)
export class TesterResolver {
  constructor(private readonly testerService: TesterService) {}

  @Query(() => [Tester], { name: 'findAllTesters' })
  findAll(): Promise<TesterModel[]> {
    return this.testerService.findAll();
  }

  @Query(() => Tester, { name: 'findTesterById', nullable: true })
  findOne(
    @Args({ name: 'testerId', type: () => String }) id: string
  ): Promise<Tester> {
    return this.testerService.findOne(id);
  }

  @Mutation(() => Tester, { name: 'deleteTester', nullable: true })
  delete(
    @Args({ name: 'testerId', type: () => String }) id: string
  ): Promise<Tester> {
    return this.testerService.delete(id);
  }

  @Mutation(() => Tester, { name: 'addTester' })
  add(@Args('addTesterArgs') args: AddTesterArgs): Promise<Tester> {
    return this.testerService.add(args);
  }

  @Mutation(() => Tester, { name: 'updateTester' })
  update(
    @Args({ name: 'testerId', type: () => String }) id: string,
    @Args('editTesterArgs') args: EditTesterArgs
  ): Promise<Tester> {
    return this.testerService.update(id, args);
  }
}
