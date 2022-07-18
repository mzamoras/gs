import { Test, TestingModule } from '@nestjs/testing';
import { AttributesOptionsService } from './attributes-options.service';

describe('AttributesOptionsService', () => {
  let service: AttributesOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttributesOptionsService],
    }).compile();

    service = module.get<AttributesOptionsService>(AttributesOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
