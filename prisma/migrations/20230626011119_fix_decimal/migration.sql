/*
  Warnings:

  - You are about to alter the column `price_original` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(2,2)` to `Decimal(10,2)`.
  - You are about to alter the column `price_discounted` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(2,2)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `price_original` DECIMAL(10, 2) NOT NULL,
    MODIFY `price_discounted` DECIMAL(10, 2) NULL;
