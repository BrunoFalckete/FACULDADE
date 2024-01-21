import { ApiProperty } from '@nestjs/swagger';

export class OrderAdoptionResponse {
  @ApiProperty({ type: Number, description: 'Id' })
  id: number;

  @ApiProperty({ type: Number, description: 'Pet Id' })
  petId: number;

  @ApiProperty({ type: Number, description: 'User Id' })
  userId: number;

  @ApiProperty({ type: String, description: 'Type' })
  typeHouse: string;

  @ApiProperty({ type: String, description: 'Text' })
  text: string;

  @ApiProperty({ type: String, description: 'Other' })
  other: string;

  createdAt: Date;
  updatedAt: Date;
}
