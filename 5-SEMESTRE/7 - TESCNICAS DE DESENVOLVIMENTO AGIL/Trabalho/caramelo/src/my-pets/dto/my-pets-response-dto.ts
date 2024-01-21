import { ApiProperty } from '@nestjs/swagger';

class FileDto {
  url: string;
}

export class MyPetsResponseDto {
  @ApiProperty({ type: Number, description: 'The id of the pet' })
  id: number;

  @ApiProperty({ type: String, description: 'The name of the pet' })
  name: string;

  @ApiProperty({ type: String, description: 'male' })
  gender: string;

  @ApiProperty({ type: Number, description: 'The year of the pet' })
  year: number;

  @ApiProperty({ type: Number, description: 'The month of the pet' })
  month: number;

  @ApiProperty({ type: String, description: 'The kind of the pet' })
  kind: string;

  @ApiProperty({ type: String, description: 'The description of the pet' })
  description: string;

  @ApiProperty({ type: FileDto, description: 'The file of the pet' })
  files?: FileDto | FileDto[];

  OrderAdoption?: object[];
}
