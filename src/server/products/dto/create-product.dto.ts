import { Column } from 'typeorm';

export class CreateProductDto {
  @Column()
  name: string;

  @Column()
  sku: string;

  @Column()
  brand: string;

  @Column()
  categoryId: number;
}
