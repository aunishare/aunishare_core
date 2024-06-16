import { Controller, Get } from '@nestjs/common';
import { TicketGroupsService } from './ticket.groups.service';
import { TicketGroupDTO } from './ticket.groups.dto';
import { PaginatedData } from '../common/pagination.dto';

@Controller()
export class TicketGroupsController {
  constructor(private readonly appService: TicketGroupsService) {}

  @Get('/ticket-groups')
  getTicketGroups(): Promise<PaginatedData<TicketGroupDTO>> {
    return this.appService.getTicketGroups();
  }
}
