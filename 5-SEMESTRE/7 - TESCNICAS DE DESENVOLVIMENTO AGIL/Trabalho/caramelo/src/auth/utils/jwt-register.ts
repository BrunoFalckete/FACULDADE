import { JwtModule } from '@nestjs/jwt';

export const jwtRegister = JwtModule.register({
  secret: process.env.SECRET_JWT,
  signOptions: { expiresIn: '1d' },
});
