import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = (env: string) => {
  const config = new DocumentBuilder()
    .setTitle('Travel Planner API')
    .setDescription('API for managing tourist attractions')
    .setVersion('1.0')
    .addBearerAuth();

  if (env === 'development') {
    config.addServer('http://localhost:3000');
  } else if (env === 'production') {
    config.addServer('https://sysplanvisattr.com/api');
  }

  return config.build();
};
