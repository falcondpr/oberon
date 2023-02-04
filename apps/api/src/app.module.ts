import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { TesterModule } from './tester/tester.module';
import { AppResolver } from './app.resolver';
import { UserModule } from './user/user.module';

@Module({
  imports: [
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
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
