import { ApiProperty } from '@nestjs/swagger';

export class UnprocessableEntityDto {
  @ApiProperty({
    example: 'Unprocessable Entity',
    description: 'Error message',
  })
  message: string | string[];

  @ApiProperty({ example: 'Unprocessable Entity', description: 'Error name' })
  error: string;

  @ApiProperty({ example: 400, description: 'Error status code' })
  statusCode: number;
}
