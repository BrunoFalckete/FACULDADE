import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GetPetUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  public async execute(id: number): Promise<any> {
    try {
      const pet = await this.prismaService.pet.findUnique({
        where: { id },
        include: {
          files: true,
          user: true,
        },
      });
      return pet;
    } catch (error) {
      throw new Error(`Error on get pet: ${error.message}`);
    }
  }
}
