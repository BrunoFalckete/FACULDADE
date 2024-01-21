import { Body, Controller, Get, Put, Req, UseGuards } from '@nestjs/common';
import { UserDto } from './dto/user-dto';
import { GetUserUseCase } from './use-cases/get-user-use-case';
import {
  UserPresenter,
  generateUserPresenter,
} from './presenters/user-presenter';
import { CreateApiResponse } from 'src/shared/custom-decorators/createApiResponse';
import { Unauthorized } from 'src/shared/dtos/unauthorized-dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { CreateApiHeaders } from 'src/shared/custom-decorators/createApiHeaders';
import { UserEditDto } from './dto/user-edit-dto';
import { EditUserUseCase } from './use-cases/edit-user-use-case';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(
    private readonly getUserUseCase: GetUserUseCase,
    private readonly editUserUseCase: EditUserUseCase,
  ) {}

  @Get('/user')
  @CreateApiHeaders({
    name: 'Authorization',
    description: 'Bearer token',
    required: true,
  })
  @CreateApiResponse(
    { status: 200, description: 'User found', type: UserPresenter },
    { status: 401, description: 'Unauthorized', type: Unauthorized },
  )
  async getUser(@Req() req): Promise<UserPresenter> {
    const user = await this.getUserUseCase.execute(req.user.id);
    return generateUserPresenter('with-address', user) as UserPresenter;
  }

  @Put('/edit')
  @ApiBody({ type: UserEditDto, description: 'User edit' })
  @CreateApiHeaders({
    name: 'Authorization',
    description: 'Bearer token',
    required: true,
  })
  @CreateApiResponse(
    { status: 401, description: 'Unauthorized', type: Unauthorized },
    { status: 200, description: 'User edited', type: UserDto },
  )
  async editUser(
    @Body() input: UserEditDto,
    @Req() req,
  ): Promise<UserPresenter> {
    const user = await this.editUserUseCase.execute(req.user.id, input);
    return generateUserPresenter('with-address', user) as UserPresenter;
  }
}
