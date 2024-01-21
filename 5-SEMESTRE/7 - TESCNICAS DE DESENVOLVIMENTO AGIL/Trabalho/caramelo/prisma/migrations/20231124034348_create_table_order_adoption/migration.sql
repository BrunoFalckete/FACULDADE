-- CreateEnum
CREATE TYPE "TypeHouse" AS ENUM ('HOUSE', 'APARTMENT');

-- CreateTable
CREATE TABLE "OrderAdoption" (
    "id" SERIAL NOT NULL,
    "pet_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "type_house" "TypeHouse" NOT NULL,
    "other" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderAdoption_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderAdoption" ADD CONSTRAINT "OrderAdoption_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderAdoption" ADD CONSTRAINT "OrderAdoption_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
