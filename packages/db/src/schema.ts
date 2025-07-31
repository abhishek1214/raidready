import { relations, sql } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { users } from "./auth-schema";

export const Guilds = pgTable("guilds", (t) => ({
  id: t.uuid().notNull().primaryKey().defaultRandom(),
  owner: t.text().references(() => users.id),
  name: t.text().notNull(),
  enableDkp: t.boolean().default(false),
  createdAt: t.timestamp().defaultNow().notNull(),
  updatedAt: t
    .timestamp({ mode: "date", withTimezone: true })
    .$onUpdateFn(() => sql`now()`),
}))

export const CreateGuildSchema = createInsertSchema(Guilds, {
  name: z.string().max(256),
  enableDkp: z.string().max(256),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const Characters = pgTable('characters', (t) => ({
  id: t.serial().primaryKey(),
  userId: t.text().references(() => users.id),
  name: t.text().notNull(),
  role: t.text().notNull(),
  updatedAt: t
    .timestamp({ mode: "date", withTimezone: true })
    .$onUpdateFn(() => sql`now()`),
}))

export const CharacterRelations = relations(Characters, ({one}) => ({
  user: one(users, {
    fields: [Characters.userId],
    references: [users.id]
  })
}))

export * from "./auth-schema";
