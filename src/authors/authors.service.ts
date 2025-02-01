import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private readonly prismaService: PrismaService) {}
  
 async create(createAuthorDto: CreateAuthorDto) {
    return this.prismaService.author.create({data: createAuthorDto})
  }

  findAll() {
    return this.prismaService.author.findMany();
  }

  findOne(id: number) {
    return this.prismaService.author.findUnique({ where: { id } });
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
     return this.prismaService.author.update({
       where: { id },
       data: updateAuthorDto,
     });
   }
 
   remove(id: number) {
     return this.prismaService.author.delete({ where: { id } });
   }
 }
 