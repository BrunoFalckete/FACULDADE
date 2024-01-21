import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class GetUserUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  public async execute(user_id: number): Promise<User> {
    try {
      return await this.prismaService.user.findUnique({
        where: {
          id: user_id,
        },
        include: {
          Address: true,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
}
