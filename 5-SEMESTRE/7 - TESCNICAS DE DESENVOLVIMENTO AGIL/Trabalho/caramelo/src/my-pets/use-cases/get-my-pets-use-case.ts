import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { QueryParametersDto } from 'src/shared/dtos/query-parameters-dto';

@Injectable()
export class GetMyPetsUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  static readonly DEFAULT_PAGE = 1;
  static readonly DEFAULT_PER_PAGE = 6;
  static readonly DEFAULT_ORDER_BY = 'desc';

  public async execute(
    userId: number,
    { page = GetMyPetsUseCase.DEFAULT_PAGE }: QueryParametersDto<string>,
  ): Promise<any> {
    try {
      const skip = Math.max((page - 1) * GetMyPetsUseCase.DEFAULT_PER_PAGE, 0);

      return await this.prismaService.pet.findMany({
        take: GetMyPetsUseCase.DEFAULT_PER_PAGE,
        skip: skip,
        where: {
          userId: userId,
        },
        include: {
          files: true,
        },
        orderBy: {
          id: GetMyPetsUseCase.DEFAULT_ORDER_BY,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
