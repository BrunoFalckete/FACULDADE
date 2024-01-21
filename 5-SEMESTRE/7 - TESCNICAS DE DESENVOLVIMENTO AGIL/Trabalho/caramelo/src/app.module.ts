import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PetsModule } from './pets/pets.module';
import { UploadModule } from './upload/upload.module';
import { OrderAdoptionModule } from './order-adoption/order-adotion.module';
import { ProfileModule } from './profile/profile.module';
import { MyPetsModule } from './my-pets/my-pets.module';

@Module({
  imports: [
    AuthModule,
    PetsModule,
    UploadModule,
    OrderAdoptionModule,
    ProfileModule,
    MyPetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
