import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { AddUserArgs, EditUserArgs } from './args';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  create(args: AddUserArgs): Promise<User> {
    return this.prisma.user.create({ data: args });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findFirstOrThrow({ where: { id } });
  }

  update(id: string, args: EditUserArgs) {
    try {
      // encrypt password
      return this.prisma.user.update({ where: { id }, data: args });
    } catch (error) {
      console.log(error);
    }
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
