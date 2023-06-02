/*
  Warnings:

  - You are about to drop the column `client_id` on the `categories` table. All the data in the column will be lost.
  - You are about to alter the column `categories_id` on the `options` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `options_id` on the `options_list` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `categories_id` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `clients_id` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categories` DROP COLUMN `client_id`,
    ADD COLUMN `clients_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `options` MODIFY `categories_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `options_list` MODIFY `options_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `products` MODIFY `categories_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `categories` ADD CONSTRAINT `categories_clients_id_fkey` FOREIGN KEY (`clients_id`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_categories_id_fkey` FOREIGN KEY (`categories_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `options` ADD CONSTRAINT `options_categories_id_fkey` FOREIGN KEY (`categories_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `options_list` ADD CONSTRAINT `options_list_options_id_fkey` FOREIGN KEY (`options_id`) REFERENCES `options`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
