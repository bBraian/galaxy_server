/*
  Warnings:

  - Added the required column `background` to the `client` table without a default value. This is not possible if the table is not empty.

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
    "created_user" TEXT NOT NULL,
    "changed_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "changed_user" TEXT NOT NULL
);
INSERT INTO "new_client" ("changed_at", "changed_user", "created_at", "created_user", "id", "logo", "title", "url") SELECT "changed_at", "changed_user", "created_at", "created_user", "id", "logo", "title", "url" FROM "client";
DROP TABLE "client";
ALTER TABLE "new_client" RENAME TO "client";
CREATE UNIQUE INDEX "client_url_key" ON "client"("url");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
