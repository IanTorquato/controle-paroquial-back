import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';

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
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.diocesesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDioceseDto: UpdateDioceseDto) {
    return this.diocesesService.update(id, updateDioceseDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.diocesesService.remove(id);
  }
}
