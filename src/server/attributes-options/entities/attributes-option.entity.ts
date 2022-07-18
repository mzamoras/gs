import { Attribute } from 'src/server/attributes/entities/attribute.entity';
import { Product } from 'src/server/products/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class AttributesOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @ManyToOne(() => Attribute, (attribute) => attribute.options)
  @JoinColumn({ name: 'attributeId' })
  attribute: Attribute;
}
