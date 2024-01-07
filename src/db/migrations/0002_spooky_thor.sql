CREATE TABLE IF NOT EXISTS "brands" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(32) NOT NULL,
	CONSTRAINT "brands_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(32) NOT NULL,
	"description" text,
	CONSTRAINT "categories_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "units" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(24) NOT NULL,
	"abbreviation" varchar(8) NOT NULL,
	CONSTRAINT "units_name_unique" UNIQUE("name"),
	CONSTRAINT "units_abbreviation_unique" UNIQUE("abbreviation")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "warehouses" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(32) NOT NULL,
	"type" varchar(32) NOT NULL,
	"description" text,
	"location" varchar(32) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "items" ALTER COLUMN "name" SET DATA TYPE varchar(128);--> statement-breakpoint
ALTER TABLE "items" ALTER COLUMN "category" SET DATA TYPE varchar(64);--> statement-breakpoint
ALTER TABLE "items" ALTER COLUMN "brand" SET DATA TYPE varchar(64);--> statement-breakpoint
ALTER TABLE "items" ALTER COLUMN "barcode" SET DATA TYPE varchar(64);--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "tax_rate" numeric(3, 1) DEFAULT '0' NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "width" numeric(10, 2) DEFAULT '0' NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "height" numeric(10, 2) DEFAULT '0' NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "depth" numeric(10, 2) DEFAULT '0' NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "dimensions_unit" varchar(8) NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "weight" numeric(10, 2) DEFAULT '0' NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "warehouse" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "sku" varchar(128) NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "quantity" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "unit" varchar(8) NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "reorder_point" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "supplier" varchar(64) NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "notes" text;