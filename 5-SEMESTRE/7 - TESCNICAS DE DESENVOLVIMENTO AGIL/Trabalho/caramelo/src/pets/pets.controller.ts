import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { CreatePetDto } from './dto/create-pet-dto';
import { CreatePetUserCase } from './use-cases/create-pet-use-case';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UnprocessableEntityDto } from 'src/shared/dtos/unprocessable-entity-dto';
import { ResponsePetDto } from './dto/response-pet-dto';
import { Unauthorized } from 'src/shared/dtos/unauthorized-dto';
import { QueryParametersDto } from 'src/shared/dtos/query-parameters-dto';
import { GetAllPetsUseCase } from './use-cases/get-all-pets-use-case';
import { CreateApiHeaders } from 'src/shared/custom-decorators/createApiHeaders';
import { CreateApiResponse } from 'src/shared/custom-decorators/createApiResponse';
import { GetPetUseCase } from './use-cases/get-pet-use-case';
import { generatePetPresenter } from './presenters/pet-presenter';

@ApiBearerAuth()
@ApiTags('pets')
@Controller('pets')
export class PetsController {
  constructor(
    private readonly createPetUserCase: CreatePetUserCase,
    private readonly getAllPetsUseCase: GetAllPetsUseCase,
    private readonly getPetUseCase: GetPetUseCase,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBody({ type: CreatePetDto, description: 'Create Pet' })
  @CreateApiHeaders({
    name: 'Authorization',
    description: 'Bearer token',
    required: true,
  })
  @CreateApiResponse(
    { status: 201, description: 'Pet created', type: ResponsePetDto },
    { status: 401, description: 'Unauthorized', type: Unauthorized },
    { status: 400, description: 'Bad request', type: UnprocessableEntityDto },
  )
  async create(@Body() input: CreatePetDto, @Req() req): Promise<any> {
    input.userId = req.user.id;
    return await this.createPetUserCase.execute(input);
  }

  @Get()
  @CreateApiHeaders(
    { name: 'q', description: 'Query parameter', required: false },
    { name: 'page', description: 'Page number', required: false },
    {
      name: 'perPage',
      description: 'Number of items per page',
      required: false,
    },
  )
  @CreateApiResponse({
    status: 200,
    description: 'Pet created',
    type: ResponsePetDto,
  })
  async getAllPets(
    @Query() query: QueryParametersDto<string>,
  ): Promise<ResponsePetDto[]> {
    const pets = await this.getAllPetsUseCase.execute(query);
    return generatePetPresenter('all', pets) as ResponsePetDto[];
  }

  @Get('/:id')
  @CreateApiHeaders({ name: 'id', description: 'Pet id', required: true })
  async getPet(@Param('id') id: string): Promise<ResponsePetDto> {
    const pet = await this.getPetUseCase.execute(Number(id));
    return generatePetPresenter('show', pet) as ResponsePetDto;
  }
}
