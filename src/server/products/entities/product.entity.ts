import { Category } from '../../categories/entities/category.entity';
import { ProductAttribute } from '../../product-attributes/entities/product-attribute.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sku: string;

  @Column()
  brand: string;

  @Column()
  price: number;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @OneToMany(
    () => ProductAttribute,
    (productAttribute) => productAttribute.product,
  )
  attributes: ProductAttribute[];
}
