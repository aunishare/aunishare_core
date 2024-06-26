import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Index,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { TicketGroup } from './ticketGroup';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  @Index('city_name_idx', { unique: false })
  name: string;

  @Column('varchar')
  @Index('city_country_code_idx', { unique: false })
  countryCode: string;

  @OneToMany(() => TicketGroup, (ticketGroup) => ticketGroup.city, {
    nullable: true,
  })
  ticketGroups: TicketGroup[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
