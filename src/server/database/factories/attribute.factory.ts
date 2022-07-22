import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Attribute } from '../../attributes/entities/attribute.entity';

define(Attribute, (faker: Faker) => {
  const attribute = new Attribute();
  attribute.name = faker.commerce.department();
  return attribute;
});
