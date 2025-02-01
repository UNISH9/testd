import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { BooksService } from 'src/books/books.service';

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService,PrismaService],
})
export class AuthorsModule {}
