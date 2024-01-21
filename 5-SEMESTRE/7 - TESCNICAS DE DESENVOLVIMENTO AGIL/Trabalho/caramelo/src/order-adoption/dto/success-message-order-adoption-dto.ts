import { ApiProperty } from '@nestjs/swagger';

export class SuccessMessageOrderAdoptionDto {
  @ApiProperty({ example: 'Order adoption created' })
  message: string;
}
