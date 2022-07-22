import { Attribute } from '../../attributes/entities/attribute.entity';
import { Factory, Seeder } from 'typeorm-seeding';
import { Category } from '../../categories/entities/category.entity';
import { AttributesOption } from '../../attributes-options/entities/attributes-option.entity';

const attributesTv = [
  { name: 'screen type', opts: ['LED', 'LCD', 'OLED'] },
  { name: 'screen size', opts: [] },
  { name: 'screen resolution', opts: [] },
];

const attributesLaptop = [
  { name: 'processor', opts: ['AMD', 'Intel'] },
  { name: 'ram', opts: [] },
  { name: 'storage', opts: [] },
  { name: 'graphic card', opts: [] },
  { name: 'operating system', opts: [] },
];

const attributesFootwear = [
  { name: 'material', opts: ['Leather', 'Plastic'] },
  { name: 'size', opts: [] },
  { name: 'color', opts: [] },
];

export default class CreateCategories implements Seeder {
  public async run(factory: Factory): Promise<any> {
    const tvCat = await factory(Category)().create({ name: 'Tv' });
    for (const attr of attributesTv) {
      const attrEntity = await factory(Attribute)().create({
        name: attr.name,
        category: tvCat,
      });
      for (const opt of attr.opts) {
        await factory(AttributesOption)().create({
          value: opt,
          attribute: attrEntity,
        });
      }
    }

    const laptopCat = await factory(Category)().create({ name: 'Laptop' });
    for (const attr of attributesLaptop) {
      const attrEntity = await factory(Attribute)().create({
        name: attr.name,
        category: laptopCat,
      });
      for (const opt of attr.opts) {
        await factory(AttributesOption)().create({
          value: opt,
          attribute: attrEntity,
        });
      }
    }

    const footwearCat = await factory(Category)().create({ name: 'Footwear' });
    for (const attr of attributesFootwear) {
      const attrEntity = await factory(Attribute)().create({
        name: attr.name,
        category: footwearCat,
      });
      for (const opt of attr.opts) {
        await factory(AttributesOption)().create({
          value: opt,
          attribute: attrEntity,
        });
      }
    }

    await factory(Category)().createMany(10);
  }
}
