import { Injectable } from '@nestjs/common';
import AppDataSource from '../../orm';
import { Ticket } from '../../orm/entities/ticket';

@Injectable()
export class TicketsService {
  getTickets(): Promise<Ticket[]> {
    return AppDataSource.getRepository(Ticket).find({
      relations: {
        ticketType: true,
      },
    });
  }
}
