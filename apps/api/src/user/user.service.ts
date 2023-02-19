import * as argon from 'argon2';
import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { PrismaService } from '../prisma.service';
import { AddUserArgs, EditUserArgs, LoginUserArgs } from './args';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async singInToken(id: string, email: string, fullname: string) {
    const payload = { id, email, fullname };

    const token = await this.jwtService.signAsync(payload, {
      expiresIn: process.env.EXPIRES_KEY,
      secret: process.env.SECRET_KEY,
    });

    return token;
  }

  async create(args: AddUserArgs): Promise<string> {
    try {
      const pswHash = await argon.hash(args.password);
      const user: User = await this.prisma.user.create({
        data: { ...args, password: pswHash },
      });

      return await this.singInToken(user.id, user.email, user.fullname);
    } catch (error) {
      console.log(error);
    }
  }

  async login(args: LoginUserArgs): Promise<string | unknown> {
    try {
      const foundUserByEmail = await this.prisma.user.findFirst({
        where: { email: args.email },
      });

      const foundUserByUsername = await this.prisma.user.findFirst({
        where: { username: args.email },
      });

      if (foundUserByEmail) {
        return await this.singInToken(
          foundUserByEmail.id,
          foundUserByEmail.email,
          foundUserByEmail.fullname
        );
      }

      if (foundUserByUsername) {
        return await this.singInToken(
          foundUserByUsername.id,
          foundUserByUsername.email,
          foundUserByUsername.fullname
        );
      }

      return new NotFoundException('User not found!');
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
