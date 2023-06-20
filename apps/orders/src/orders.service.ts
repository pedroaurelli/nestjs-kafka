import { Get, Injectable, Post } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { OrderDto } from './order.dto'

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  @Get()
  all() {
    return this.prismaService.order.findMany();
  }

  @Post()
  create(data: OrderDto) {
    return this.prismaService.order.create({
      data: {
        ...data,
        status: 'PENDING'
      }
    });
  }
}
