import * as argon from 'argon2';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { PrismaService } from '../prisma.service';
import { AddUserArgs, EditUserArgs } from './args';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async singInToken(id: string, email: string, fullname: string) {
    const payload = { id, email, fullname };
    const config = {
      secret: process.env.SECRET_KEY,
      expiresIn: process.env.EXPIRES_KEY,
    };

    return this.jwtService.signAsync(payload, config);
  }

  async create(args: AddUserArgs): Promise<string> {
    try {
      const pswHash = await argon.hash(args.password);
      const user: User = await this.prisma.user.create({
        data: { ...args, password: pswHash },
      });
      console.log(user);

      return this.singInToken(user.id, user.email, user.fullname);
    } catch (error) {
      console.log(error);
    }
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
