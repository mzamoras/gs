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
export class ProductAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Attribute, (attribute) => attribute.products)
  @JoinColumn({ name: 'attributeId' })
  attribute: Attribute;

  @ManyToOne(() => Product, (product) => product.attributes)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column()
  value: string;
}
