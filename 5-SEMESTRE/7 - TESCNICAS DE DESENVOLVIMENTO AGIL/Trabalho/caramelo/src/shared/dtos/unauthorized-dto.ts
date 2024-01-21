import { ApiProperty } from '@nestjs/swagger';

export class Unauthorized {
  @ApiProperty({ example: 'Unauthorized', description: 'Error message' })
  message: string;

  @ApiProperty({ example: 401, description: 'unauthorized' })
  statusCode: number;
}
