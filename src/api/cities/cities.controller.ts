import { Controller, Get } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller()
export class CitiesController {
  constructor(private readonly appService: CitiesService) {}

  @Get('/cities')
  getMain(): object {
    return this.appService.getCities();
  }
}
