import { Injectable } from '@nestjs/common';
import { CreatePersonnageDto } from './dto/create-personnage.dto';
import { UpdatePersonnageDto } from './dto/update-personnage.dto';

@Injectable()
export class PersonnageService {
  create(createPersonnageDto: CreatePersonnageDto) {
    return 'This action adds a new personnage';
  }

  findAll() {
    return `This action returns all personnage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personnage`;
  }

  update(id: number, updatePersonnageDto: UpdatePersonnageDto) {
    return `This action updates a #${id} personnage`;
  }

  remove(id: number) {
    return `This action removes a #${id} personnage`;
  }
}
