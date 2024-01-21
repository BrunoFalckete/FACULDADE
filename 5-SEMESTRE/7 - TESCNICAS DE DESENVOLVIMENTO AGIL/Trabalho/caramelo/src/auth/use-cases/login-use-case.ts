import { Injectable } from '@nestjs/common';
import { LoginUserDto } from '../dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthenticateUserUseCase } from './authenticate-user-use-case';

@Injectable()
export class LoginUseCase {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authenticateUserUseCase: AuthenticateUserUseCase,
  ) {}

  async execute(loginDto: LoginUserDto): Promise<any> {
    const user = await this.authenticateUserUseCase.execute(loginDto);
    const payload = { username: user.username, userId: user.id };
    return await this.jwtService.sign(payload);
  }
}
