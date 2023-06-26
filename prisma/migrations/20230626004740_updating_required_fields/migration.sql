/*
  Warnings:

  - Made the column `changed_user` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `changed_user` VARCHAR(191) NOT NULL,
    MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);
