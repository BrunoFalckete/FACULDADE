import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ResponsePetDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  gender: string;

  @ApiProperty()
  @IsNotEmpty()
  kind: string;

  @ApiProperty()
  @IsNotEmpty()
  year: number;

  @ApiProperty()
  @IsNotEmpty()
  month: number;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  file_url: string;

  files?: any[];

  user?: any;
}
