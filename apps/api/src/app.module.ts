import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';

import { TesterModule } from './tester/tester.module';
import { AppResolver } from './app.resolver';
import { UserModule } from './user/user.module';
import { FeedbackModule } from './feedback/feedback.module';
import { JwtModule } from '@nestjs/jwt';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'apps/api/src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'apps/api/src/graphql.ts'),
      },
    }),
    TesterModule,
    UserModule,
    FeedbackModule,
    CommentModule,
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
