import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserEditDto } from '../dto/user-edit-dto';
import { User } from '@prisma/client';

@Injectable()
export class EditUserUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  public async execute(userId: number, input: UserEditDto): Promise<User> {
    let addressUpdated = undefined
    try {
      const userUpdated = await this.updateUser(userId, input);

      if(input.address !== undefined){
        addressUpdated = await this.updateAddress(userId, input);
      }

      return { ...userUpdated, Address: addressUpdated };
    } catch (err) {
      throw err;
    }
  }

  private async updateUser(userId: number, input: UserEditDto): Promise<any> {
    try {
      const { address, ...data } = input;
      return await this.prismaService.user.update({
        where: { id: userId },
        data: {
          ...data,
          birthDate: data.birthDate ? new Date(data.birthDate) : undefined,
        },
        include: { Address: true },
      });
    } catch (err) {
      throw err;
    }
  }

  private async updateAddress(
    userId: number,
    input: UserEditDto,
  ): Promise<any> {
    try {
      const { address } = input;
      return await this.prismaService.address.update({
        where: { id: address.id },
        data: {
          ...address,
        },
      });
    } catch (err) {
      throw err;
    }
  }
}
