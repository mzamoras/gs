import faker from 'faker';
import { Factory, Seeder } from 'typeorm-seeding';
import { Product } from '../../products/entities/product.entity';
import { DataSource } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { ProductAttribute } from '../../product-attributes/entities/product-attribute.entity';

const tvBrands = [
  'Samsung',
  'LG',
  'Sony',
  'Panasonic',
  'Sharp',
  'Toshiba',
  'Philips',
];
const laptopBrands = [
  'Apple',
  'Dell',
  'HP',
  'Lenovo',
  'Acer',
  'Asus',
  'Sony',
  'Toshiba',
];
const shoesBrands = [
  'Nike',
  'Adidas',
  'Puma',
  'Reebok',
  'Jordans',
  'Gucci',
  'Dior',
  'Armani',
  'Valentino',
  'Prada',
];

export default class CreateProducts implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    const categories: Category[] = await connection
      .createEntityManager()
      .find(Category, { relations: ['attributes', 'attributes.options'] });

    for (const brand of tvBrands) {
      const prod = await factory(Product)().create({
        name: `${brand} TV`,
        price: parseInt(faker.commerce.price(8000, 90000, 2), 10),
        brand,
        category: categories[0],
      });
      const selectableOptions = {
        'screen size': ['40', '48', '50', '52', '54', '56', '58', '60'],
        'screen resolution': ['4K', '1080p', '720p', '480p'],
      };

      for (const attr of categories[0].attributes) {
        await factory(ProductAttribute)().create({
          product: prod,
          attribute: attr,
          value: selectableOptions.hasOwnProperty(attr.name)
            ? faker.helpers.randomize(selectableOptions[attr.name])
            : faker.helpers.randomize(attr.options).value,
        });
      }
    }

    for (const brand of laptopBrands) {
      const prod = await factory(Product)().create({
        name: `${brand} Laptop`,
        price: parseInt(faker.commerce.price(15000, 80000, 2), 10),
        brand,
        category: categories[1],
      });
      const selectableOptions = {
        ram: ['4GB', '8GB', '16GB', '32GB', '64GB', '128GB'],
        storage: ['500GB', '1TB', '2TB', '4TB', '5TB', '6TB'],
        'graphic card': ['Nvidia', 'AMD', 'Intel'],
        'operating system': ['Windows', 'Linux', 'MacOS'],
      };
      for (const attr of categories[1].attributes) {
        await factory(ProductAttribute)().create({
          product: prod,
          attribute: attr,
          value: selectableOptions.hasOwnProperty(attr.name)
            ? faker.helpers.randomize(selectableOptions[attr.name])
            : faker.helpers.randomize(attr.options).value,
        });
      }
    }

    for (const brand of shoesBrands) {
      const prod = await factory(Product)().create({
        name: `${brand} Shoes`,
        price: parseInt(faker.commerce.price(800, 12000, 2), 10),
        brand,
        category: categories[2],
      });
      const selectableOptions = {
        size: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        color: ['black', 'white', 'red', 'blue', 'green', 'yellow'],
      };
      for (const attr of categories[2].attributes) {
        await factory(ProductAttribute)().create({
          product: prod,
          attribute: attr,
          value: selectableOptions.hasOwnProperty(attr.name)
            ? faker.helpers.randomize(selectableOptions[attr.name])
            : faker.helpers.randomize(attr.options).value,
        });
      }
    }
  }
}
