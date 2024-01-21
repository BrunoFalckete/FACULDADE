/*
  Warnings:

  - Changed the type of `key` on the `files` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "files" DROP COLUMN "key",
ADD COLUMN     "key" INTEGER NOT NULL;
