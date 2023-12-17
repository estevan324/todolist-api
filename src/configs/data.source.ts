import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { TaskEntity } from 'src/entities/task.entity';

config();

export const dbDataSource: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/src/entities/*.js'],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dbDataSource);

export default dataSource;
