import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { RegisterUserUseCase } from './use-cases/register-user-use-case';
import { RegisterUserDto } from './dto/register-user-dto';
import { LoginUseCase } from './use-cases/login-use-case';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseRegisterUserDto } from './dto/response-register-use-dto';
import { Payload } from './dto/payload';
import { UnprocessableEntityDto } from 'src/shared/dtos/unprocessable-entity-dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly loginUserUseCase: LoginUseCase,
  ) {}

  @Post('/register')
  @ApiResponse({
    status: 201,
    description: 'User created',
    type: ResponseRegisterUserDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
    type: UnprocessableEntityDto,
  })
  @ApiBody({ type: RegisterUserDto, description: 'Register User' })
  async signUp(@Body() registerUserDto: RegisterUserDto): Promise<any> {
    return await this.registerUserUseCase.execute(registerUserDto);
  }

  @Post('/login')
  @ApiResponse({ status: 200, description: 'User logged in', type: Payload })
  @ApiResponse({
    status: 401,
    description: 'Bad request',
    type: UnprocessableEntityDto,
  })
  @ApiBody({ type: LoginUserDto, description: 'Login User' })
  async signIn(@Body() loginUserDto: LoginUserDto): Promise<any> {
    const token = await this.loginUserUseCase.execute(loginUserDto);
    return { token: token };
  }
}
