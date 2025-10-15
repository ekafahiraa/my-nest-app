import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // Menangani endpoint dari server
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello from NestJS Backend!';
  }
}
