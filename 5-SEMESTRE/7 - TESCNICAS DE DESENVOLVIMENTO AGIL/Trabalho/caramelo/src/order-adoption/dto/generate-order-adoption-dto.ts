import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GenerateOrderAdoptionDto {
  @ApiProperty({ example: 1, description: 'The id of the pet' })
  @IsNumber()
  @IsNotEmpty()
  petId: number;

  userId: number;

  @ApiProperty({
    example: 'I want to adopt this pet',
    description: 'The text of the order',
  })
  @IsString()
  @IsNotEmpty()
  text: string;

  @ApiProperty({ example: 'house', description: 'type of housing' })
  @IsString()
  typeHouse: string;

  @ApiProperty({ example: 'yes', description: 'Do you have a yard?' })
  other?: string;
}
