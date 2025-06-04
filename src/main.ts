import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para o Angular (localhost:4200)
  app.enableCors({
    origin: 'http://localhost:4200', // ou origin: '*' para todos (não recomendado em prod)
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
