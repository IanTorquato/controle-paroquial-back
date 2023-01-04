import { Test, TestingModule } from '@nestjs/testing';

import { DiocesesController } from './dioceses.controller';
import { DiocesesService } from './dioceses.service';

describe('DiocesesController', () => {
  let controller: DiocesesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiocesesController],
      providers: [DiocesesService],
    }).compile();

    controller = module.get<DiocesesController>(DiocesesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
