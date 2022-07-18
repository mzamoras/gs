import { Test, TestingModule } from '@nestjs/testing';
import { AttributesOptionsController } from './attributes-options.controller';
import { AttributesOptionsService } from './attributes-options.service';

describe('AttributesOptionsController', () => {
  let controller: AttributesOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttributesOptionsController],
      providers: [AttributesOptionsService],
    }).compile();

    controller = module.get<AttributesOptionsController>(AttributesOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
