import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core'; // 创建Nest实例
import { AppModule } from './app/app.module';
import { HttpExceptionFilter } from './utils/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter()); // 全局过滤器
  await app.listen(8000);
}
bootstrap();
