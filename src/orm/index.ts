import { DataSource } from 'typeorm';
import { City } from './entities/city';
import { Ticket } from './entities/ticket';
import { TicketType } from './entities/ticketType';
import { User } from './entities/user';
import { config } from '../config';
import logger from './util/logger';
import { TicketGroup } from './entities/ticketGroup';
import { Init1718502809693 } from './migrations/1718502809693-Init';
import { AddValidationCode1718517006689 } from './migrations/1718517006689-AddValidationCode';

const AppDataSource = new DataSource({
  type: 'postgres',
  database: config.db.name,
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  entities: [City, Ticket, TicketGroup, TicketType, User],
  migrations: [Init1718502809693, AddValidationCode1718517006689],
});

if (process.env.WITH_MIGRATION_DATASOURCE === 'true') {
  AppDataSource.initialize()
    .then(() => {
      logger.info('[DataSource][init] Data Source has been initialized!');
    })
    .catch((err) => {
      logger.error(
        '[DataSource][init] Error during Data Source initialization',
        err,
      );
    });
}

export default AppDataSource;
