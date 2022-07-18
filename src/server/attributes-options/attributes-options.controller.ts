import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttributesOptionsService } from './attributes-options.service';
import { CreateAttributesOptionDto } from './dto/create-attributes-option.dto';
import { UpdateAttributesOptionDto } from './dto/update-attributes-option.dto';

@Controller('attributes-options')
export class AttributesOptionsController {
  constructor(private readonly attributesOptionsService: AttributesOptionsService) {}

  @Post()
  create(@Body() createAttributesOptionDto: CreateAttributesOptionDto) {
    return this.attributesOptionsService.create(createAttributesOptionDto);
  }

  @Get()
  findAll() {
    return this.attributesOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attributesOptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttributesOptionDto: UpdateAttributesOptionDto) {
    return this.attributesOptionsService.update(+id, updateAttributesOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attributesOptionsService.remove(+id);
  }
}
