import { Module } from '@nestjs/common';

import { DiocesesModule } from './dioceses/dioceses.module';

@Module({ imports: [DiocesesModule] })
export class AppModule {}
