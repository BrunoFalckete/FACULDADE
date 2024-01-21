import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { GenerateOrderAdoptionDto } from './dto/generate-order-adoption-dto';
import { CreateApiHeaders } from 'src/shared/custom-decorators/createApiHeaders';
import { CreateApiResponse } from 'src/shared/custom-decorators/createApiResponse';
import { Unauthorized } from 'src/shared/dtos/unauthorized-dto';
import { UnprocessableEntityDto } from 'src/shared/dtos/unprocessable-entity-dto';
import { GenerateOrderAdoptionUseCase } from './use-cases/generate-order-adoption-use-case';
import { SuccessMessageOrderAdoptionDto } from './dto/success-message-order-adoption-dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@ApiBearerAuth()
@ApiTags('order-adoption')
@Controller('order_adoption')
@UseGuards(JwtAuthGuard)
export class OrderAdoptionController {
  constructor(
    private readonly generateOrderAdoptionUseCase: GenerateOrderAdoptionUseCase,
  ) {}

  @Post()
  @ApiBody({
    type: GenerateOrderAdoptionDto,
    description: 'The order adoption to create',
  })
  @CreateApiHeaders({
    name: 'Authorization',
    description: 'Bearer token',
    required: true,
  })
  @CreateApiResponse(
    {
      status: 201,
      description: 'Order adoption created',
      type: SuccessMessageOrderAdoptionDto,
    },
    { status: 401, description: 'Unauthorized', type: Unauthorized },
    { status: 400, description: 'Bad request', type: UnprocessableEntityDto },
  )
  async create(
    @Body() input: GenerateOrderAdoptionDto,
    @Req() req,
  ): Promise<SuccessMessageOrderAdoptionDto> {
    input.userId = req.user.id;
    return await this.generateOrderAdoptionUseCase.execute(input);
  }
}
