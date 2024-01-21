import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { PrismaService } from 'src/prisma.service';
import { GetUserUseCase } from './use-cases/get-user-use-case';
import { EditUserUseCase } from './use-cases/edit-user-use-case';
import { UserPresenter } from './presenters/user-presenter';

@Module({
  controllers: [ProfileController],
  providers: [PrismaService, GetUserUseCase, EditUserUseCase, UserPresenter],
})
export class ProfileModule {}
