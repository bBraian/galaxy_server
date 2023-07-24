/*
  Warnings:

  - You are about to drop the column `clientsId` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_clientsId_fkey`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `clientsId`;
