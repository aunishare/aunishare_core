import { Injectable } from '@nestjs/common';
import AppDataSource from '../../orm';
import { TicketType } from '../../orm/entities/ticketType';

@Injectable()
export class TicketTypesService {
  getTicketTypes(): Promise<TicketType[]> {
    return AppDataSource.getRepository(TicketType).find();
  }
}
