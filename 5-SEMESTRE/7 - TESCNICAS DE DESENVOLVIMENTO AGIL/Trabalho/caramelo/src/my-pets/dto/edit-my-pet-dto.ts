import { ApiProperty } from '@nestjs/swagger';

export class EditMyPetDto {
  @ApiProperty({ type: String, description: 'The name of the pet' })
  name: string;

  @ApiProperty({ type: String, description: 'Sex of pet' })
  gender: string;

  @ApiProperty({ type: String, description: 'The kind of the pet' })
  kind: string;

  @ApiProperty({ type: Number, description: 'The year of the pet' })
  year: number;

  @ApiProperty({ type: Number, description: 'The month of the pet' })
  month: number;

  @ApiProperty({ type: String, description: 'The description of the pet' })
  description: string;
}
