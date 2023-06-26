/*
  Warnings:

  - You are about to alter the column `price_original` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(2,2)`.
  - You are about to alter the column `price_discounted` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(2,2)`.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `price_original` DECIMAL(2, 2) NOT NULL,
    MODIFY `price_discounted` DECIMAL(2, 2) NULL;
