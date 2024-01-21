import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmpty, IsNotEmpty } from 'class-validator';

export class CreatePetDto {
  @ApiProperty({ example: 'Caramelo', description: 'pet name', type: 'text' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'male', description: 'gender', type: 'text' })
  @IsNotEmpty()
  gender: string;

  @ApiProperty({ example: 'dog', description: 'cachorro', type: 'text' })
  @IsNotEmpty()
  kind: string;

  @ApiProperty({ example: 1, description: 'year', type: 'number' })
  @IsNotEmpty()
  year: number;

  @ApiProperty({ example: 1, description: 'month', type: 'number' })
  @IsNotEmpty()
  month: number;

  @ApiProperty({ example: 'description', description: 'Pet name' })
  @IsNotEmpty()
  description: string;

  @IsEmpty()
  userId?: number;

  @ApiProperty({
    type: () => FileDto,
    example: '',
    description: '',
    isArray: true,
    required: true,
  })
  @Type(() => FileDto)
  files: FileDto[];
}

export class FileDto {
  @ApiProperty({ example: 'file name', description: 'file name' })
  @IsNotEmpty()
  fileName: string;

  @ApiProperty({ example: 'file type', description: 'file type' })
  @IsNotEmpty()
  fileType: string;

  @ApiProperty({ example: 'size', description: 'size' })
  @IsNotEmpty()
  size: number;

  @ApiProperty({ example: 'url', description: 'url' })
  @IsNotEmpty()
  url: string;

  @ApiProperty({ example: 'pet id', description: 'pet id' })
  petId?: number;
}
