import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma.service';
import { RegisterUserUseCase } from './use-cases/register-user-use-case';
import { LoginUseCase } from './use-cases/login-use-case';
import { AuthenticateUserUseCase } from './use-cases/authenticate-user-use-case';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { jwtRegister } from './utils/jwt-register';

@Module({
  imports: [jwtRegister, PassportModule],
  controllers: [AuthController],
  providers: [
    PrismaService,
    RegisterUserUseCase,
    LoginUseCase,
    AuthenticateUserUseCase,
    JwtStrategy,
  ],
})
export class AuthModule {}
