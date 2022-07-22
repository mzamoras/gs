import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { ProductAttribute } from '../../product-attributes/entities/product-attribute.entity';

define(ProductAttribute, (faker: Faker) => {
  const productAttribute = new ProductAttribute();
  productAttribute.value = faker.commerce.department();
  return productAttribute;
});
