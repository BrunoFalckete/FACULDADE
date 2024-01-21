import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GetMyPetUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  public async execute(userId: number, petId: number): Promise<any> {
    try {
      const pet = await this.prismaService.pet.findFirst({
        where: {
          id: petId,
          userId: userId,
        },
        include: {
          files: true,
          OrderAdoption: {
            include: {
              user: true,
            },
          },
        },
      });
      return pet;
    } catch (error) {
      console.log(error);
    }
  }
}
