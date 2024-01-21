import { ApiProperty } from '@nestjs/swagger';

export class ResponseRegisterUserDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  id: number;

  @ApiProperty({ example: 'John Doe', description: 'User name' })
  name: string;

  @ApiProperty({ example: 'john@example.com', description: 'User email' })
  email: string;

  @ApiProperty({ example: '1990-01-01', description: 'User birth date' })
  birthDate: string;

  @ApiProperty({ example: 'john_doe', description: 'User username' })
  username: string;

  @ApiProperty({
    example: '2023-01-01T12:00:00Z',
    description: 'Timestamp of user creation',
  })
  createdAt: Date;
}
