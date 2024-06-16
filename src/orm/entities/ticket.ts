import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user';
import { TicketType } from './ticketType';
import { TicketStatus } from '../types';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date', { nullable: true })
  validatedAt: Date;

  @Column('varchar', { nullable: true })
  validationCode: string;

  @ManyToOne(() => User, (user) => user.tickets, { nullable: true })
  user: User;

  @ManyToOne(() => TicketType, (ticketType) => ticketType.tickets, {
    nullable: false,
  })
  ticketType: TicketType;

  @Column('enum', {
    nullable: false,
    enum: ['pending', 'validated', 'expired'],
    default: 'pending',
  })
  status: TicketStatus;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
