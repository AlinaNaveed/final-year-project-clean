/*
  Warnings:

  - The primary key for the `CommunityQuestion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `company` on the `CommunityQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `CommunityQuestion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CommunityQuestion" DROP CONSTRAINT "CommunityQuestion_pkey",
DROP COLUMN "company",
DROP COLUMN "role",
ALTER COLUMN "answer" DROP NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "CommunityQuestion_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "CommunityQuestion_id_seq";
