import { IsDateString, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddressDto {
  @ApiProperty({ example: '12345-678', description: 'User address CEP' })
  @IsNotEmpty({ message: 'cep is required' })
  @IsString()
  cep: string;

  @ApiProperty({ example: 'City', description: 'User address city' })
  @IsNotEmpty({ message: 'city is required' })
  @IsString()
  city: string;

  @ApiProperty({ example: 'State', description: 'User address state' })
  @IsNotEmpty({ message: 'state is required' })
  @IsString()
  state: string;

  @ApiProperty({ example: 'UF', description: 'User address UF' })
  @IsNotEmpty({ message: 'uf is required' })
  @IsString()
  uf: string;
}

export class RegisterUserDto {
  @ApiProperty({ example: 'John Doe', description: 'User name' })
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  name: string;

  @ApiProperty({ example: '123.456.789-01', description: 'User CPF' })
  @IsNotEmpty({ message: 'Cpf is required' })
  @IsString()
  cpf: string;

  @ApiProperty({ example: '123456789', description: 'User phone number' })
  @IsNotEmpty({ message: 'Phone number is required' })
  @IsString()
  phoneNumber: string;

  @ApiProperty({ example: '1990-01-01', description: 'User birth date' })
  @IsNotEmpty({ message: 'Birth date is required' })
  @IsDateString()
  birthDate: string;

  @ApiProperty({ example: 'john@example.com', description: 'User email' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;

  @ApiProperty({ type: () => AddressDto, description: 'User address' })
  address: AddressDto;

  @ApiProperty({ example: 'john_doe', description: 'User username' })
  @IsNotEmpty({ message: 'Username is required' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'password123', description: 'User password' })
  @IsNotEmpty({ message: 'Password is required' })
  @IsString()
  password: string;

  @ApiProperty({ example: 'password123', description: 'Password confirmation' })
  @IsNotEmpty({ message: 'Password confirmation is required' })
  @IsString()
  passwordConfirmation: string;
}
