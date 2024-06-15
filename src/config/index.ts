import { config as configDotenv } from 'dotenv';

configDotenv();

export const config = {
  jwtSecret: process.env.JWT_SECRET ?? '',
  port: process.env.PORT === undefined ? 3000 : parseInt(process.env.PORT, 10),
  db: {
    name: process.env.DB_NAME ?? 'unishare-api',
    host: process.env.DB_HOST ?? 'localhost',
    port:
      process.env.DB_PORT === undefined
        ? 5432
        : parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME ?? 'postgres',
    password: process.env.DB_PASSWORD ?? '',
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
    region: process.env.AWS_REGION ?? '',
    bucket: process.env.AWS_BUCKET_NAME ?? '',
    endpoint: process.env.AWS_ENDPOINT ?? '',
  },
};
