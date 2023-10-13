import { Test, TestingModule } from '@nestjs/testing';
import { PersonnageService } from './personnage.service';

describe('PersonnageService', () => {
  let service: PersonnageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonnageService],
    }).compile();

    service = module.get<PersonnageService>(PersonnageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
