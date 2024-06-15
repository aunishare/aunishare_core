import { Controller, Get } from '@nestjs/common';
import { TicketsService } from './tickets.service';

@Controller()
export class TicketsController {
  constructor(private readonly appService: TicketsService) {}

  @Get('/tickets')
  getMain(): object {
    return this.appService.getTickets();
  }
}
