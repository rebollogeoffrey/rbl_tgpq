// Base
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

// Config
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';

// Actual Module
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Other Modules
// import { AuthModule } from './auth/auth.module';
import { GameModule } from './game/game.module';
import { PersonnageModule } from './personnage/personnage.module';
import { MonsterModule } from './monster/monster.module';
import { ItemModule } from './item/item.module';
import { StatisticModule } from './statistic/statistic.module';
import { HistoricModule } from './historic/historic.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => databaseConfig,
    }),
    // AuthModule,
    GameModule,
    PersonnageModule,
    MonsterModule,
    ItemModule,
    StatisticModule,
    HistoricModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
