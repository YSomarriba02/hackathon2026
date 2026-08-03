import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Post } from '../generated/prisma/client';


@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) { }
  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }
}
