/*
  Warnings:

  - You are about to drop the column `clients_id` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_clients_id_fkey`;

-- AlterTable
ALTER TABLE `products` ALTER COLUMN `price_discounted` DROP DEFAULT;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `clients_id`,
    ADD COLUMN `clientsId` INTEGER NULL;

-- CreateTable
CREATE TABLE `UserClients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `users_id` INTEGER NOT NULL,
    `clients_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_clientsId_fkey` FOREIGN KEY (`clientsId`) REFERENCES `clients`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserClients` ADD CONSTRAINT `UserClients_users_id_fkey` FOREIGN KEY (`users_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserClients` ADD CONSTRAINT `UserClients_clients_id_fkey` FOREIGN KEY (`clients_id`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
