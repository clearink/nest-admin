import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core'; // 创建Nest实例
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  await app.listen(8000);
}
bootstrap();
