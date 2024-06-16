import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Ticket } from './ticket';
import { TicketGroup } from './ticketGroup';

@Entity()
export class TicketType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  @Index('ticket_type_name_idx', { unique: true })
  name: string;

  @Column('varchar')
  service: string;

  @Column('varchar')
  zone: string;

  @Column('varchar')
  time: string;

  @Column('varchar', { nullable: true })
  description: string;

  @Column('int')
  price: string;

  @OneToMany(() => Ticket, (ticket) => ticket.ticketType, { nullable: true })
  tickets: Ticket[];

  @ManyToOne(() => TicketGroup, (ticketGroup) => ticketGroup.ticketTypes, {
    nullable: true,
  })
  ticketGroup: TicketGroup;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
