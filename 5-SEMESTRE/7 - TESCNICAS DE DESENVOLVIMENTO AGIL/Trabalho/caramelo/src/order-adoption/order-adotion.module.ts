import { Module } from '@nestjs/common';
import { OrderAdoptionController } from './order_adoption.controller';
import { GenerateOrderAdoptionUseCase } from './use-cases/generate-order-adoption-use-case';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  controllers: [OrderAdoptionController],
  providers: [PrismaService, GenerateOrderAdoptionUseCase],
})
export class OrderAdoptionModule {}
