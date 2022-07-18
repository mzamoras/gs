import { Attribute } from 'src/server/attributes/entities/attribute.entity';
import { Product } from 'src/server/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];

  @OneToMany(() => Attribute, (attribute) => attribute.category)
  attributes: Attribute[];
}
