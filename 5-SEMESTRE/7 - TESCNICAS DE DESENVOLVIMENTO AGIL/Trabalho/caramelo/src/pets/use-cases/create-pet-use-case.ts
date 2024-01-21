import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePetDto, FileDto } from '../dto/create-pet-dto';
import { PrismaService } from 'src/prisma.service';
import { Pet } from '@prisma/client';

@Injectable()
export class CreatePetUserCase {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(input: CreatePetDto): Promise<Pet> {
    try {
      const pet = await this.save(input);
      await this.saveFiles(input.files, pet.id);
      return pet;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  private async save(input: CreatePetDto): Promise<Pet> {
    return await this.prismaService.pet.create({
      data: {
        name: input.name,
        gender: input.gender,
        year: input.year,
        month: input.month,
        kind: this.setKind(input.kind),
        description: input.description,
        userId: input.userId,
      },
    });
  }

  private async saveFiles(files: FileDto[], petId: number): Promise<any> {
    const newFiles = files.map((file) => ({ petId: petId, ...file }));
    return await this.prismaService.file.createMany({
      data: newFiles,
    });
  }

  private setKind(kind: string) {
    switch (kind) {
      case 'dog':
        return 'DOG';
      case 'cat':
        return 'CAT';
    }
  }
}
