/*
  Warnings:

  - The primary key for the `authors` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `auther_id` on the `authors` table. All the data in the column will be lost.
  - You are about to drop the column `auther_name` on the `authors` table. All the data in the column will be lost.
  - Added the required column `name` to the `authors` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "authors_auther_name_key";

-- AlterTable
ALTER TABLE "authors" DROP CONSTRAINT "authors_pkey",
DROP COLUMN "auther_id",
DROP COLUMN "auther_name",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "authors_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "books" ADD COLUMN     "published_at" TIMESTAMP(3),
ALTER COLUMN "zenra" DROP NOT NULL;
