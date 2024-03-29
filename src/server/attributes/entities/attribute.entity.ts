import { AttributesOption } from '../../attributes-options/entities/attributes-option.entity';
import { Category } from '../../categories/entities/category.entity';
import { ProductAttribute } from '../../product-attributes/entities/product-attribute.entity';
import { Product } from '../../products/entities/product.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Attribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @OneToMany(
    () => ProductAttribute,
    (productAttribute) => productAttribute.attribute,
  )
  products: Product[];

  @OneToMany(
    () => AttributesOption,
    (attributesOption) => attributesOption.attribute,
  )
  options: AttributesOption[];
}
