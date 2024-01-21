import { Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { PrismaService } from 'src/prisma.service';
import { CreatePetUserCase } from './use-cases/create-pet-use-case';
import { GetAllPetsUseCase } from './use-cases/get-all-pets-use-case';
import { GetPetUseCase } from './use-cases/get-pet-use-case';

@Module({
  imports: [],
  controllers: [PetsController],
  providers: [
    PrismaService,
    CreatePetUserCase,
    GetAllPetsUseCase,
    GetPetUseCase,
  ],
})
export class PetsModule {}
