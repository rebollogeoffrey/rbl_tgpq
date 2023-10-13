import { Test, TestingModule } from '@nestjs/testing';
import { PersonnageController } from './personnage.controller';
import { PersonnageService } from './personnage.service';

describe('PersonnageController', () => {
  let controller: PersonnageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonnageController],
      providers: [PersonnageService],
    }).compile();

    controller = module.get<PersonnageController>(PersonnageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
