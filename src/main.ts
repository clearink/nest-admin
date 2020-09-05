import { NestFactory } from '@nestjs/core'; // 创建Nest实例
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
