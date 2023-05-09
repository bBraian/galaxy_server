/*
  Warnings:

  - You are about to drop the `client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `clientId` on the `categories` table. All the data in the column will be lost.
  - Added the required column `client_id` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "client_url_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "client";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clients_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_user" TEXT,
    "changed_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "changed_user" TEXT
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "categories_id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price_original" TEXT NOT NULL,
    "price_discounted" TEXT
);

-- CreateTable
CREATE TABLE "options" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "categories_id" TEXT NOT NULL,
    "required" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "options_list" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "options_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "default" BOOLEAN NOT NULL DEFAULT false,
    "client_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_user" TEXT,
    "changed_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "changed_user" TEXT
);
INSERT INTO "new_categories" ("changed_at", "changed_user", "created_at", "created_user", "default", "id", "title") SELECT "changed_at", "changed_user", "created_at", "created_user", "default", "id", "title" FROM "categories";
DROP TABLE "categories";
ALTER TABLE "new_categories" RENAME TO "categories";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "clients_url_key" ON "clients"("url");
