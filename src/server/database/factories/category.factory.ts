import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Category } from '../../categories/entities/category.entity';

define(Category, (faker: Faker) => {
  const category = new Category();
  category.name = faker.commerce.department();
  return category;
});
