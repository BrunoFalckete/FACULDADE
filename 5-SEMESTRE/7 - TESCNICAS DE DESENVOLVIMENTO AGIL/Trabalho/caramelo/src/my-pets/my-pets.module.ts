import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MyPetsController } from './my-pets.controller';
import { GetMyPetsUseCase } from './use-cases/get-my-pets-use-case';
import { GetMyPetUseCase } from './use-cases/get-my-pet-use-case';
import { EditMyPetUseCase } from './use-cases/edit-my-pet-use-case';
import { GetOrderAdotionUseCase } from './use-cases/get-order-adoption-use-case';
import { ChooseUserAdtoptionUseCase } from './use-cases/choose-user-adoption-use-case';

@Module({
  imports: [],
  controllers: [MyPetsController],
  providers: [
    PrismaService,
    GetMyPetsUseCase,
    GetMyPetUseCase,
    EditMyPetUseCase,
    GetOrderAdotionUseCase,
    ChooseUserAdtoptionUseCase,
  ],
})
export class MyPetsModule {}
