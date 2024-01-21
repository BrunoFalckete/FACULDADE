import { Injectable } from '@nestjs/common';
import { KindPet, Pet } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { QueryParametersDto } from 'src/shared/dtos/query-parameters-dto';

@Injectable()
export class GetAllPetsUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  static readonly DEFAULT_PER_PAGE = 6;
  static readonly DEFAULT_PAGE = 1;
  static readonly DEFAULT_TYPE_ORDER_BY = 'desc';

  public async execute({
    q,
    page = GetAllPetsUseCase.DEFAULT_PAGE,
  }: QueryParametersDto<string>): Promise<any[]> {
    try {
      const skip = Math.max((page - 1) * GetAllPetsUseCase.DEFAULT_PER_PAGE, 0);
      const filter = q ? { kind: q.toUpperCase() as KindPet } : {};

      const response = await this.prismaService.pet.findMany({
        skip: skip,
        take: GetAllPetsUseCase.DEFAULT_PER_PAGE,
        where: filter,
        include: {
          files: true,
        },
        orderBy: { id: GetAllPetsUseCase.DEFAULT_TYPE_ORDER_BY },
      });

      return response;
    } catch (error) {
      throw new Error(`Error on get all pets: ${error.message}`);
    }
  }
}
