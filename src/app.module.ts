import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { DataSource } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { SnakeNamingStrategy } from 'typeorm-naming-strategy';

import { AuthModule } from './auth';
import { CommonModule } from './common';
import { BaseModule } from './base';

import { AppController } from './app.controller';
import { configuration } from './config';
import { AllExceptionsFilter } from './common/filters';
import { ErrorsInterceptor } from './common/interceptors';
import { DomainModule } from './domain';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        ...config.get<TypeOrmModuleOptions>('db'),
        namingStrategy: new SnakeNamingStrategy(),
      }),
      inject: [ConfigService],
      async dataSourceFactory(option) {
        if (!option) throw new Error('Invalid options passed');
        return addTransactionalDataSource(new DataSource(option));
      },
    }),
    AuthModule,
    CommonModule,
    BaseModule,
    DomainModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
    { provide: APP_INTERCEPTOR, useClass: ErrorsInterceptor },
  ],
})
export class AppModule {}
