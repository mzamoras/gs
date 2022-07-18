import { Injectable } from '@nestjs/common';
import { CreateAttributesOptionDto } from './dto/create-attributes-option.dto';
import { UpdateAttributesOptionDto } from './dto/update-attributes-option.dto';

@Injectable()
export class AttributesOptionsService {
  create(createAttributesOptionDto: CreateAttributesOptionDto) {
    return 'This action adds a new attributesOption';
  }

  findAll() {
    return `This action returns all attributesOptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attributesOption`;
  }

  update(id: number, updateAttributesOptionDto: UpdateAttributesOptionDto) {
    return `This action updates a #${id} attributesOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} attributesOption`;
  }
}
