import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ✅ Enable global validation with custom error formatting

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        console.log('Validation Errors:', errors);
  
        const errorMessages = errors.map((error) => ({
          field: error.property,
          errors: Object.values(error.constraints || {}),
        }));
  
        return new BadRequestException({
          message: 'Payload is invalid',
          status: 400,
          errors: errorMessages, // Send array of errors
        });
      },
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  
  const PORT = 3000;
  await app.listen(PORT);
  console.log(`🚀 Server is running on port:${PORT}`);
}
bootstrap();
