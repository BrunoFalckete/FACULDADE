import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ type: Number, description: 'User id' })
  id: number;

  @ApiProperty({ type: String, description: 'User name' })
  name: string;

  @ApiProperty({ type: String, description: 'User email' })
  email: string;

  cpf: string;
  phoneNumber: string;
  birthDate: Date;

  @ApiProperty({ type: Date, description: 'User created_at' })
  created_at: Date;

  @ApiProperty({ type: Date, description: 'User updated_at' })
  updated_at: Date;

  @ApiProperty({ type: Object, description: 'User address' })
  Address: object;
}
