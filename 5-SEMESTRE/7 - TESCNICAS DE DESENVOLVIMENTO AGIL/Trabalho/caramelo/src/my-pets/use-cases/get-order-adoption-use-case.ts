import { Injectable } from '@nestjs/common';
import { OrderAdoption } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GetOrderAdotionUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(orderAdoptionId: number): Promise<OrderAdoption> {
    try {
      return await this.prismaService.orderAdoption.findUnique({
        where: { id: orderAdoptionId },
      });
    } catch (error) {
      throw error;
    }
  }
}
