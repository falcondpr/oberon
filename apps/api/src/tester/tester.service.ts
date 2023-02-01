import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TesterService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.tester.findMany();
  }
}
