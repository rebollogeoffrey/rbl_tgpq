import { Module } from '@nestjs/common';
import { PersonnageService } from './personnage.service';
import { PersonnageController } from './personnage.controller';

@Module({
  controllers: [PersonnageController],
  providers: [PersonnageService],
})
export class PersonnageModule {}
