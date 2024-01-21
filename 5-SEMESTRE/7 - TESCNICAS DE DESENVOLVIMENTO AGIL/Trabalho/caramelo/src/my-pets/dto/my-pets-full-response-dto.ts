import { ApiProperty } from '@nestjs/swagger';
import { MyPetsResponseDto } from './my-pets-response-dto';

export class MyPetsFullResponseDto extends MyPetsResponseDto {
  @ApiProperty({ type: Object, description: 'The order adoption of the pet' })
  orderAdoption: object[];
}
