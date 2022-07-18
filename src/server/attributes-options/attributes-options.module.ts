import { Module } from '@nestjs/common';
import { AttributesOptionsService } from './attributes-options.service';
import { AttributesOptionsController } from './attributes-options.controller';

@Module({
  controllers: [AttributesOptionsController],
  providers: [AttributesOptionsService]
})
export class AttributesOptionsModule {}
