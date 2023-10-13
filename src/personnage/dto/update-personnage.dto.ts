import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonnageDto } from './create-personnage.dto';

export class UpdatePersonnageDto extends PartialType(CreatePersonnageDto) {}
