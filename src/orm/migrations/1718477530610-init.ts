import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1718477530610 implements MigrationInterface {
  name = 'Init1718477530610';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "address" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "address_idx" ON "user" ("address") `,
    );
    await queryRunner.query(
      `CREATE TABLE "ticket_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "sku" character varying NOT NULL, "duration" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_757d4830df239a662399edf9f24" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "ticket_type_name_idx" ON "ticket_type" ("name") `,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "ticket_type_sku_idx" ON "ticket_type" ("sku") `,
    );
    await queryRunner.query(
      `CREATE TABLE "ticket" ("id" SERIAL NOT NULL, "validatedAt" date, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "cityId" integer, "userId" integer, "ticketTypeId" integer NOT NULL, CONSTRAINT "PK_d9a0835407701eb86f874474b7c" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "city" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "countryCode" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`CREATE INDEX "city_name_idx" ON "city" ("name") `);
    await queryRunner.query(
      `CREATE INDEX "city_country_code_idx" ON "city" ("countryCode") `,
    );
    await queryRunner.query(
      `ALTER TABLE "ticket" ADD CONSTRAINT "FK_bc27d781f4b722e111f32e86826" FOREIGN KEY ("cityId") REFERENCES "city"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ticket" ADD CONSTRAINT "FK_0e01a7c92f008418bad6bad5919" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ticket" ADD CONSTRAINT "FK_7061359da242fbf565771953137" FOREIGN KEY ("ticketTypeId") REFERENCES "ticket_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "ticket" DROP CONSTRAINT "FK_7061359da242fbf565771953137"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ticket" DROP CONSTRAINT "FK_0e01a7c92f008418bad6bad5919"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ticket" DROP CONSTRAINT "FK_bc27d781f4b722e111f32e86826"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_e976d3f4e0c4e4a63d89df95509"`,
    );
    await queryRunner.query(`DROP INDEX "public"."city_country_code_idx"`);
    await queryRunner.query(`DROP INDEX "public"."city_name_idx"`);
    await queryRunner.query(`DROP TABLE "city"`);
    await queryRunner.query(`DROP TABLE "ticket"`);
    await queryRunner.query(`DROP INDEX "public"."ticket_type_sku_idx"`);
    await queryRunner.query(`DROP INDEX "public"."ticket_type_name_idx"`);
    await queryRunner.query(`DROP TABLE "ticket_type"`);
    await queryRunner.query(`DROP INDEX "public"."address_idx"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
