/*
  Warnings:

  - The primary key for the `CommunityQuestion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `CommunityQuestion` table. All the data in the column will be lost.
  - The `id` column on the `CommunityQuestion` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CommunityQuestion" DROP CONSTRAINT "CommunityQuestion_pkey",
DROP COLUMN "userId",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "CommunityQuestion_pkey" PRIMARY KEY ("id");
