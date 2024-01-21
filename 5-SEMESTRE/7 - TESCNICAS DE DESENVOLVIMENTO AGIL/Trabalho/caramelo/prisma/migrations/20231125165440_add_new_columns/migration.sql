-- AlterTable
ALTER TABLE "OrderAdoption" ADD COLUMN     "chosen" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "adopted" BOOLEAN NOT NULL DEFAULT false;
