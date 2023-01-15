import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';

import { CreatePriestDto } from './dto/create-priest.dto';
import { UpdatePriestDto } from './dto/update-priest.dto';

@Injectable()
export class PriestsService {
  constructor(private prisma: PrismaService) {}

  create(createPriestDto: CreatePriestDto) {
    return this.prisma.priest.create({ data: createPriestDto });
  }

  findAll() {
    return this.prisma.priest.findMany();
  }

  findOne(id: string) {
    return this.prisma.priest.findUnique({ where: { id } });
  }

  update(id: string, updatePriestDto: UpdatePriestDto) {
    return this.prisma.priest.update({ data: updatePriestDto, where: { id } });
  }

  remove(id: string) {
    return this.prisma.priest.delete({ where: { id } });
  }
}
