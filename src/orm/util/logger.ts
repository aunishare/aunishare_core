import { transports as winstonTransports, format, createLogger } from 'winston';
import { ConsoleTransportInstance } from 'winston/lib/winston/transports';

const transports: Array<ConsoleTransportInstance> = [
  new winstonTransports.Console({
    format: format.combine(
      format.colorize(),
      format.timestamp(),
      format.printf(
        (info) => `[${info.timestamp}] ${info.level}: ${info.message}`,
      ),
    ),
  }),
];

const logger = createLogger({ transports });

export default logger;
