import { Injectable } from '@nestjs/common';
import AppDataSource from '../../orm';
import { TicketGroup } from '../../orm/entities/ticketGroup';
import { TicketGroupDTO } from './ticket.groups.dto';
import { PaginatedData } from '../common/pagination.dto';

@Injectable()
export class TicketGroupsService {
  async getTicketGroups(): Promise<PaginatedData<TicketGroupDTO>> {
    const [groups, total] = await AppDataSource.getRepository(
      TicketGroup,
    ).findAndCount({
      relations: {
        city: true,
        ticketTypes: true,
      },
    });
    const data = groups.map((ticketGroup) => TicketGroupDTO.map(ticketGroup));
    return { data, total };
  }
}
