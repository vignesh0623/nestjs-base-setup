"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
const common_1 = require("@nestjs/common");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        exceptionFactory: (errors) => {
            console.log('Validation Errors:', errors);
            const errorMessages = errors.map((error) => ({
                field: error.property,
                errors: Object.values(error.constraints || {}),
            }));
            return new common_1.BadRequestException({
                message: 'Payload is invalid',
                status: 400,
                errors: errorMessages,
            });
        },
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const PORT = 3000;
    await app.listen(PORT);
    console.log(`🚀 Server is running on port:${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map