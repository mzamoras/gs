import { PartialType } from '@nestjs/mapped-types';
import { CreateAttributesOptionDto } from './create-attributes-option.dto';

export class UpdateAttributesOptionDto extends PartialType(CreateAttributesOptionDto) {}
