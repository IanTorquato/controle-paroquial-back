import { Module } from '@nestjs/common';

import { DiocesesService } from './dioceses.service';
import { DiocesesController } from './dioceses.controller';

@Module({
  controllers: [DiocesesController],
  providers: [DiocesesService],
})
export class DiocesesModule {}
