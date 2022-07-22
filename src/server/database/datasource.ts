import { DataSource } from 'typeorm';

export const PostgresDatasource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres_gila',
  synchronize: true,
  entities: ['../server/**/*.entity{.ts,.js}'],
});
