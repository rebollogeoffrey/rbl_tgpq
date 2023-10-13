import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonnageService } from './personnage.service';
import { CreatePersonnageDto } from './dto/create-personnage.dto';
import { UpdatePersonnageDto } from './dto/update-personnage.dto';

@Controller('personnage')
export class PersonnageController {
  constructor(private readonly personnageService: PersonnageService) {}

  @Post()
  create(@Body() createPersonnageDto: CreatePersonnageDto) {
    return this.personnageService.create(createPersonnageDto);
  }

  @Get()
  findAll() {
    return this.personnageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personnageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePersonnageDto: UpdatePersonnageDto,
  ) {
    return this.personnageService.update(+id, updatePersonnageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personnageService.remove(+id);
  }
}
