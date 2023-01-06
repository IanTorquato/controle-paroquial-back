import { Module } from '@nestjs/common';

import { PriestsModule } from './priests/priests.module';

@Module({ imports: [PriestsModule] })
export class AppModule {}
