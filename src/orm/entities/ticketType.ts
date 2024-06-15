import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  OneToMany,
} from 'typeorm';
import { Ticket } from './ticket';

@Entity()
export class TicketType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  @Index('ticket_type_name_idx', { unique: true })
  name: string;

  @Column('varchar')
  @Index('ticket_type_sku_idx', { unique: true })
  sku: string;

  @Column('int')
  duration: number;

  @OneToMany(() => Ticket, (ticket) => ticket.ticketType, { nullable: true })
  tickets: Ticket[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
