import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { DiocesesService } from './dioceses.service';
import { CreateDioceseDto } from './dto/create-diocese.dto';
import { UpdateDioceseDto } from './dto/update-diocese.dto';

@Controller('dioceses')
export class DiocesesController {
  constructor(private readonly diocesesService: DiocesesService) {}

  @Post()
  create(@Body() createDioceseDto: CreateDioceseDto) {
    return this.diocesesService.create(createDioceseDto);
  }

  @Get()
  findAll() {
    return this.diocesesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diocesesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDioceseDto: UpdateDioceseDto) {
    return this.diocesesService.update(+id, updateDioceseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diocesesService.remove(+id);
  }
}
