import * as dotenv              from "dotenv";
import { type DB }              from "@definitions/schema.type";
import { createPool, }          from "mysql2";
import { Kysely, MysqlDialect } from "kysely";
dotenv.config();

export const pool = createPool({
  database: `${process.env.DATABASE}`,
  host: `${process.env.DATABASE_HOST}`,
  port: process.env.DATABASE_PORT as any,
  user: `${process.env.USER}`,
  password: process.env.PASSWORD,
  multipleStatements: true,
});

const dialect = new MysqlDialect({ pool });
const db = new Kysely<DB>({ dialect });

export default db;
