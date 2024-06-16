import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import AppDataSource from './orm';

async function bootstrap() {
  await AppDataSource.initialize();

  const app = await NestFactory.create(AppModule);
  await app.listen(3080);
}
bootstrap();
