import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';

import { CreatePriestDto } from './dto/create-priest.dto';
import { UpdatePriestDto } from './dto/update-priest.dto';

@Injectable()
export class PriestsService {
  constructor(private prisma: PrismaService) {}

  create(createPriestDto: CreatePriestDto) {
    return 'This action adds a new priest';
  }

  findAll() {
    return this.prisma.priest.findMany();
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
