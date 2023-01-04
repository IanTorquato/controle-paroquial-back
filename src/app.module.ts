import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiocesesModule } from './dioceses/dioceses.module';

@Module({
  imports: [DiocesesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
