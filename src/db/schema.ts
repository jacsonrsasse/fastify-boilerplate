import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

const timestampColumns = {
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at'),
};

const softDelete = {
  deletedAt: timestamp('deleted_at'),
};

export const anything = pgTable('anything', {
  anythingId: serial('anything_id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  ...timestampColumns,
  ...softDelete,
});
