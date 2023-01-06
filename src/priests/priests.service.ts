import { Injectable } from '@nestjs/common';

import { CreatePriestDto } from './dto/create-priest.dto';
import { UpdatePriestDto } from './dto/update-priest.dto';

@Injectable()
export class PriestsService {
  create(createPriestDto: CreatePriestDto) {
    return 'This action adds a new priest';
  }

  findAll() {
    return `This action returns all priests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} priest`;
  }

  update(id: number, updatePriestDto: UpdatePriestDto) {
    return `This action updates a #${id} priest`;
  }

  remove(id: number) {
    return `This action removes a #${id} priest`;
  }
}
