import { ApiProperty } from '@nestjs/swagger';

export class OutputFileDto {
  @ApiProperty({ type: 'string', format: 'text' })
  fileName: string;

  @ApiProperty({ type: 'string', format: 'text' })
  fileType: string;

  @ApiProperty({ type: 'number', format: 'number' })
  size: number;

  @ApiProperty({ type: 'string', format: 'text' })
  url: string;
}
