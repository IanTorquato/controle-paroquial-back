import { Module } from '@nestjs/common';

import { DiocesesController } from './dioceses.controller';
import { DiocesesService } from './dioceses.service';

@Module({
  controllers: [DiocesesController],
  providers: [DiocesesService],
})
export class DiocesesModule {}
