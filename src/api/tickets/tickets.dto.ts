import { IsNumber } from 'class-validator';
export class CreateTicketDTO {
  @IsNumber()
  ticketTypeId: number;

  @IsNumber()
  userId: number;
}
