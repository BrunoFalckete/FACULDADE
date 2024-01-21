import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LoginUserDto } from '../dto/login-user.dto';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticateUserUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(userLoginDto: LoginUserDto): Promise<any> {
    const user = await this.getUserByUsername(userLoginDto.username);
    await this.validateUser(user, userLoginDto.password);

    return { username: user.name, id: user.id };
  }

  private async getUserByUsername(username: string): Promise<User> {
    return await this.prismaService.user.findUnique({
      where: { username: username },
    });
  }

  private async validateUser(user: User, password) {
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('username or password is wrong');
    }
  }
}
