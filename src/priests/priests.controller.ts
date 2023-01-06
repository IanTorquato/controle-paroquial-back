import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreatePriestDto } from './dto/create-priest.dto';
import { UpdatePriestDto } from './dto/update-priest.dto';
import { PriestsService } from './priests.service';

@Controller('priests')
export class PriestsController {
  constructor(private readonly priestsService: PriestsService) {}

  @Post()
  create(@Body() createPriestDto: CreatePriestDto) {
    return this.priestsService.create(createPriestDto);
  }

  @Get()
  findAll() {
    return this.priestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.priestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePriestDto: UpdatePriestDto) {
    return this.priestsService.update(+id, updatePriestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.priestsService.remove(+id);
  }
}
