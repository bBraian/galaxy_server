/*
  Warnings:

  - Added the required column `clientId` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_client" (
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
INSERT INTO "new_client" ("background", "changed_at", "changed_user", "created_at", "created_user", "id", "logo", "title", "url") SELECT "background", "changed_at", "changed_user", "created_at", "created_user", "id", "logo", "title", "url" FROM "client";
DROP TABLE "client";
ALTER TABLE "new_client" RENAME TO "client";
CREATE UNIQUE INDEX "client_url_key" ON "client"("url");
CREATE TABLE "new_categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "default" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_user" TEXT,
    "changed_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "changed_user" TEXT,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "categories_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_categories" ("changed_at", "changed_user", "created_at", "created_user", "default", "id", "title") SELECT "changed_at", "changed_user", "created_at", "created_user", "default", "id", "title" FROM "categories";
DROP TABLE "categories";
ALTER TABLE "new_categories" RENAME TO "categories";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
