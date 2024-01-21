import { Injectable } from '@nestjs/common';
import { EditMyPetDto } from '../dto/edit-my-pet-dto';
import { PrismaService } from 'src/prisma.service';
import { KindPet } from '@prisma/client';

@Injectable()
export class EditMyPetUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  public async execute(id: number, input: EditMyPetDto): Promise<any> {
    try {
      console.log(input);
      return await this.prismaService.pet.update({
        where: { id },
        data: {
          ...input,
          kind: this.setKind(input.kind) as KindPet,
        },
      });
    } catch (err) {
      console.log(err);
    }
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
