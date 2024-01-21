import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ChooseUserAdoptionDto } from '../dto/choose-order-adtoption-dto';

@Injectable()
export class ChooseUserAdtoptionUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  public async execute(input: ChooseUserAdoptionDto): Promise<string> {
    try {
      const { orderAdoptionId, petId, userId } = input;
      if (
        this.updateOrderAdoption(orderAdoptionId, userId) &&
        this.updatePet(petId)
      )
        return 'Adoption chosen successfully';
    } catch (e) {
      throw e;
    }
  }

  private async updateOrderAdoption(
    orderAdoptionId: number,
    userId: number,
  ): Promise<boolean> {
    try {
      const orderAdoption = await this.prismaService.orderAdoption.update({
        where: { id: orderAdoptionId, userId: userId },
        data: {
          chosen: true,
        },
      });
      if (orderAdoption) return true;
    } catch (e) {
      throw e;
    }
  }

  private async updatePet(petId: number): Promise<boolean> {
    try {
      const pet = await this.prismaService.pet.update({
        where: { id: petId },
        data: {
          adopted: true,
        },
      });

      if (pet) return true;
    } catch (e) {
      throw e;
    }
  }
}
