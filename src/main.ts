import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {DominioModel} from "./app/dominio/entities/dominio.entity";
import {DominioModule} from "./app/dominio/dominio.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
      .setTitle('Api SSO')
      .setDescription('Endpoints de acessos e controles de usuarios e aplicações')
      .setVersion('1.0')
      //.addTag('cats')
      .build();
  const document = SwaggerModule.createDocument(app, config, {include: [DominioModule]});
  SwaggerModule.setup('api-docs', app, document);
  app.setGlobalPrefix('api/sso');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000).then(() => {
    console.log('Server on.')
  });
}
bootstrap();
