import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { Exercices } from './entities/exercices.entity'
import { Levels } from './entities/levels.entity'
import { Groups } from './entities/groups.entity'
import { LevelsModule } from './levels/levels.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'Ski',
      entities: [Exercices,Levels,Groups],
      synchronize: true,
    }),
    LevelsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
