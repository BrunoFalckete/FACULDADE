import { Injectable } from '@nestjs/common';
import { SuccessMessageOrderAdoptionDto } from '../dto/success-message-order-adoption-dto';
import { PrismaService } from 'src/prisma.service';
import { GenerateOrderAdoptionDto } from '../dto/generate-order-adoption-dto';
import { TypeHouse } from '@prisma/client';

@Injectable()
export class GenerateOrderAdoptionUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  public async execute(
    input: GenerateOrderAdoptionDto,
  ): Promise<SuccessMessageOrderAdoptionDto> {
    try {
      const orderAdoption = await this.prismaService.orderAdoption.create({
        data: {
          userId: input.userId,
          petId: input.petId,
          text: input.text,
          typeHouse: input.typeHouse.toUpperCase() as TypeHouse,
          other: input.other,
        },
      });
      if (orderAdoption) {
        return { message: 'Order adoption created' };
      }
    } catch (error) {
      console.log(error);
    }
  }
}
