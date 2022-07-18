import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find({
      relations: ['category', 'category.attributes', 'attributes', 'attributes.attribute'],
    });
  }

  findOne(id: number) {
    // return this.productRepository.findOneBy({
    //   id,
    //   with: ['category', 'category.attributes', 'attributes'],
    // });
    return this.productRepository.find({
      relations: ['category', 'category.attributes'],
      where: { id },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
