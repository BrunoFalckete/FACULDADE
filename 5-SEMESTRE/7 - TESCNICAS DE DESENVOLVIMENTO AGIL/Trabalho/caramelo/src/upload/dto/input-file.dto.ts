import { ApiProperty } from '@nestjs/swagger';

export class InputFileDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: Express.Multer.File;
}
