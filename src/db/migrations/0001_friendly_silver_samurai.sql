ALTER TABLE "items" ADD COLUMN "category" varchar(63) NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "brand" varchar(63) NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "barcode" varchar(63) NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "description" text;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "selling_price" numeric(10, 2) DEFAULT '0' NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "purchase_price" numeric(10, 2) DEFAULT '0' NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "images" json DEFAULT 'null'::json;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "updated_at" timestamp DEFAULT now();