import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterUserDto } from '../dto/register-user-dto';
import { validate } from 'class-validator';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { ShowUserDto } from '../dto/show-user-dto';

@Injectable()
export class RegisterUserUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  public async execute(registerUserDto: RegisterUserDto): Promise<ShowUserDto> {
    try {
      await this.inputValid(registerUserDto);
      await this.passwordValid(
        registerUserDto.password,
        registerUserDto.passwordConfirmation,
      );
      await this.userNameExists(registerUserDto.username);
      await this.cpfExists(registerUserDto.cpf);
      await this.emailExists(registerUserDto.email);

      return await this.save(registerUserDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  private async save(input): Promise<ShowUserDto> {
    const { address, ...userWithoutAddress } = input;
    const { passwordConfirmation, ...userWithoutPasswordConfirmation } =
      userWithoutAddress;

    const user = await this.prismaService.user.create({
      data: {
        ...userWithoutPasswordConfirmation,
        birthDate: new Date(userWithoutAddress.birthDate),
        password: this.encryptPassword(
          userWithoutPasswordConfirmation.password,
        ),
        Address: { create: address },
      },
    });

    return user;
  }

  private async emailExists(email: string): Promise<void> {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });
    if (user) throw new BadRequestException('Email already exists');
  }

  private async cpfExists(cpf: string): Promise<void> {
    const user = await this.prismaService.user.findUnique({
      where: { cpf },
    });
    if (user) throw new BadRequestException('Cpf already exists');
  }

  private async userNameExists(username: string): Promise<void> {
    const user = await this.prismaService.user.findUnique({
      where: { username },
    });

    if (user) throw new BadRequestException('Username already exists');
  }

  private async inputValid(input: RegisterUserDto): Promise<void> {
    const errors = await validate(input);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
  }

  private passwordValid(password: string, passwordConfirmation: string): void {
    if (password !== passwordConfirmation) {
      throw new BadRequestException(
        'Password and password confirmation must be equal',
      );
    }
  }

  private encryptPassword(password: string): string {
    return bcrypt.hashSync(password, Number(process.env.SALT_PASSWORD));
  }
}
