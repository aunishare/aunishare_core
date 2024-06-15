import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //GET locations
  //GET tickets data
  //GET QR
  //POST ticket/validate

  @Get()
  getMain(): object {
    return this.appService.getMain();
  }
}
