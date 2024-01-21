import { ApiProperty } from '@nestjs/swagger';

class AddressEdit {
  @ApiProperty({ type: Number, description: 'Address ID' })
  id: number;

  @ApiProperty({ type: String, description: 'User street' })
  cep: string;

  @ApiProperty({ type: String, description: 'User street' })
  city: string;

  @ApiProperty({ type: String, description: 'User street' })
  state: string;

  @ApiProperty({ type: String, description: 'User street' })
  uf: string;
}

export class UserEditDto {
  @ApiProperty({ type: String, description: 'User name' })
  name: string;

  @ApiProperty({ type: String, description: 'User phone number' })
  phoneNumber: string;

  @ApiProperty({ type: Date, description: 'User birth date' })
  birthDate: Date;

  @ApiProperty({ type: String, description: 'User email' })
  email: string;

  @ApiProperty({ type: AddressEdit, description: 'User address' })
  address?: AddressEdit;

  @ApiProperty({ type: String, description: 'User password' })
  password: string;
}
