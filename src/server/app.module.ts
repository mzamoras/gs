import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { AttributesModule } from './attributes/attributes.module';
import { ProductAttributesModule } from './product-attributes/product-attributes.module';
import { AttributesOptionsModule } from './attributes-options/attributes-options.module';
import { PostgresDatasource } from './database/datasource';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...PostgresDatasource.options,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    CategoriesModule,
    ProductsModule,
    AttributesModule,
    ProductAttributesModule,
    AttributesOptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
