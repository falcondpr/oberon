import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { EditTesterArgs, AddTesterArgs } from './args';
import { Tester as TesterModel } from '../graphql';

@Injectable()
export class TesterService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<TesterModel[]> {
    return await this.prisma.tester.findMany();
  }

  findOne(id: string): Promise<TesterModel> {
    return this.prisma.tester.findFirstOrThrow({ where: { id } });
  }

  delete(id: string): Promise<TesterModel> {
    return this.prisma.tester.delete({ where: { id } });
  }

  async add(args: AddTesterArgs): Promise<TesterModel> {
    return await this.prisma.tester.create({ data: args });
  }

  async update(id: string, args: EditTesterArgs): Promise<TesterModel> {
    return await this.prisma.tester.update({ where: { id }, data: args });
  }
}
