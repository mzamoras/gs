import { PostgresDatasource } from './src/server/database/datasource';

export default {
  ...PostgresDatasource.options,
  name: 'seeding',
  entities: ['./src/server/**/*.entity{.ts,.js}'],
  migrations: ['./src/server/database/migrations/*{.ts,.js}'],
  seeds: ['./src/server/database/seeds/*{.ts,.js}'],
  factories: ['./src/server/database/factories/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/server/database/entities',
    migrationsDir: 'src/server/database/migrations',
    seedsDir: 'src/server/database/seeds',
    factoriesDir: 'src/server/database/factories',
  },
};
