import { DataSource } from 'typeorm';
import { PostgresDatasource } from './datasource';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        ...PostgresDatasource.options,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      });
      return dataSource.initialize();
    },
  },
];
