import { NestFactory } from '@nestjs/core';
import { AppModule } from './controller/app.module';
import * as dotenv from 'dotenv';
import * as Knex from 'knex';
import { Model } from 'objection';

dotenv.config();
const { USER, PASSWORD, HOST, PORT, DATABASE } = process.env;

const knex = Knex({
  client: 'postgresql',
  useNullAsDefault: true,
  connection: {
    user: USER,
    password: PASSWORD,
    host: HOST,
    port: +PORT,
    database: DATABASE,
  },
});

Model.knex(knex);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
