import { Module } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';

import { PriestsController } from './priests.controller';
import { PriestsService } from './priests.service';

@Module({
  controllers: [PriestsController],
  providers: [PriestsService, PrismaService],
})
export class PriestsModule {}
