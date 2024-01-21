import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { GetMyPetsUseCase } from './use-cases/get-my-pets-use-case';
import { CreateApiResponse } from 'src/shared/custom-decorators/createApiResponse';
import { Unauthorized } from 'src/shared/dtos/unauthorized-dto';
import { CreateApiHeaders } from 'src/shared/custom-decorators/createApiHeaders';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryParametersDto } from 'src/shared/dtos/query-parameters-dto';
import { generateMyPetPresenter } from './presenters/my-pet-presenter';
import { MyPetsResponseDto } from './dto/my-pets-response-dto';
import { GetMyPetUseCase } from './use-cases/get-my-pet-use-case';
import { EditMyPetDto } from './dto/edit-my-pet-dto';
import { EditMyPetUseCase } from './use-cases/edit-my-pet-use-case';
import { UnprocessableEntityDto } from 'src/shared/dtos/unprocessable-entity-dto';
import { MyPetsFullResponseDto } from './dto/my-pets-full-response-dto';
import { GetOrderAdotionUseCase } from './use-cases/get-order-adoption-use-case';
import { generateOrderAdoptionPresenter } from './presenters/order-adoption-presenter';
import { OrderAdoptionResponse } from './dto/order-adoption-response-dto';
import { ChooseUserAdtoptionUseCase } from './use-cases/choose-user-adoption-use-case';
import { twilioClient } from 'src/libs/twillo';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('my_pets')
@ApiTags('my_pets')
@CreateApiHeaders({
  name: 'Authorization',
  description: 'Bearer token',
  required: true,
})
export class MyPetsController {
  constructor(
    private readonly getMyPetsUseCase: GetMyPetsUseCase,
    private readonly getMyPetUseCase: GetMyPetUseCase,
    private readonly editMyPetUseCase: EditMyPetUseCase,
    private readonly getOrderAdotionUseCase: GetOrderAdotionUseCase,
    private readonly chooseUserAdtoptionUseCase: ChooseUserAdtoptionUseCase,
  ) {}

  @Get()
  @CreateApiResponse(
    { status: 200, description: 'My pets', type: MyPetsResponseDto },
    { status: 401, description: 'Unauthorized', type: Unauthorized },
  )
  async myPets(
    @Query() query: QueryParametersDto<string>,
    @Req() req,
  ): Promise<MyPetsResponseDto[]> {
    const pets = await this.getMyPetsUseCase.execute(req.user.id, query);
    return generateMyPetPresenter('all', pets) as MyPetsResponseDto[];
  }

  @Get(':id')
  @CreateApiResponse(
    { status: 200, description: 'My pets', type: MyPetsFullResponseDto },
    { status: 401, description: 'Unauthorized', type: Unauthorized },
  )
  async getMyPet(
    @Param('id') id: string,
    @Req() req,
  ): Promise<MyPetsFullResponseDto> {
    const pet = await this.getMyPetUseCase.execute(req.user.id, Number(id));
    return generateMyPetPresenter(
      'with-order-adoption',
      pet,
    ) as MyPetsFullResponseDto;
  }

  @Put('/edit/:id')
  @ApiBody({ type: EditMyPetDto, description: 'Edit My Pet' })
  @CreateApiResponse(
    { status: 200, description: 'My pets', type: MyPetsResponseDto },
    { status: 401, description: 'Unauthorized', type: Unauthorized },
    { status: 400, description: 'Bad request', type: UnprocessableEntityDto },
  )
  async editMyPet(
    @Param('id') id: string,
    @Body() input: EditMyPetDto,
    @Req() req,
  ): Promise<MyPetsResponseDto> {
    const pet = await this.editMyPetUseCase.execute(Number(id), input);
    return generateMyPetPresenter('simple', pet) as MyPetsResponseDto;
  }

  @Get('/order_adoption/:id')
  @CreateApiResponse(
    { status: 200, description: 'My pets', type: OrderAdoptionResponse },
    { status: 401, description: 'Unauthorized', type: Unauthorized },
  )
  async getOrderAdoption(
    @Param('id') id: string,
  ): Promise<OrderAdoptionResponse> {
    const orderAdoption = await this.getOrderAdotionUseCase.execute(Number(id));
    return generateOrderAdoptionPresenter(
      'simple',
      orderAdoption,
    ) as OrderAdoptionResponse;
  }

  @Patch('/order_adoption/:order_adoption_id/pet/:pet_id/choose/user/:user_id')
  @CreateApiResponse({ status: 200, description: 'My pets', type: '' })
  async chooseUserOrderAdoption(
    @Param('order_adoption_id') order_adoption_id: string,
    @Param('user_id') user_id: string,
    @Param('pet_id') petId: string,
  ): Promise<any> {
    return this.chooseUserAdtoptionUseCase.execute({
      orderAdoptionId: Number(order_adoption_id),
      petId: Number(petId),
      userId: Number(user_id),
    });
  }
}
