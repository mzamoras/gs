import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Product } from '../../products/entities/product.entity';

define(Product, (faker: Faker) => {
  const product = new Product();
  product.name = faker.commerce.productName();
  product.price = parseInt(faker.commerce.price(4000, 90000, 2), 10);
  product.sku = faker.random.number({ min: 1000000, max: 9999999 });
  product.brand = faker.company.companyName();
  return product;
});
