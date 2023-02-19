import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { AddUserArgs, EditUserArgs } from './args';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => String, { name: 'addUser' })
  async add(@Args('addUserArgs') args: AddUserArgs): Promise<string> {
    return this.userService.create(args);
  }

  @Query(() => [User], { name: 'findAllUsers' })
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'findUserById' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Mutation(() => User, { name: 'updateUser' })
  updateUser(
    @Args('id', { type: () => String }) id: string,
    @Args('editUserArgs') args: EditUserArgs
  ): Promise<User> {
    return this.userService.update(id, args);
  }

  @Mutation(() => User, { name: 'deleteUser' })
  removeUser(@Args('id', { type: () => String }) id: string): Promise<User> {
    return this.userService.remove(id);
  }
}
