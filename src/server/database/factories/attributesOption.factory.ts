import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { AttributesOption } from '../../attributes-options/entities/attributes-option.entity';

define(AttributesOption, (faker: Faker) => {
  const attributesOption = new AttributesOption();
  attributesOption.value = faker.commerce.department();
  return attributesOption;
});
