import { db, sql } from "@/db";
import { migrate } from "drizzle-orm/postgres-js/migrator";

async function migrateFn() {
  try {
    await migrate(db, { migrationsFolder: "drizzle" });

    await sql.end();
    console.log("Migrated successfully");
  } catch (error) {
    console.log(error);
  }
}

await migrateFn();
