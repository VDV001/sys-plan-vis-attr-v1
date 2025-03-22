var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module.js';
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield NestFactory.create(AppModule);
        const config = new DocumentBuilder()
            .setTitle('Attractions API')
            .setDescription('API for managing attractions')
            .setVersion('1.0')
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api', app, document);
        yield app.listen(3000);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map