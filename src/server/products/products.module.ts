import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { productProviders } from './products.providers';
import { ProductsController } from './products.controller';
import { ProductService } from './product.service';

@Module({
  imports: [DatabaseModule],
  providers: [...productProviders, ProductService],
  controllers: [ProductsController],
})
export class ProductsModule {}
