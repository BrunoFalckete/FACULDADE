import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ProcessFileUseCase } from './usecases/process-file-use-case';
import * as os from 'os';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        storage: diskStorage({
          destination: os.tmpdir(),
          filename: (req, file, callback) => {
            const filename = `${Date.now()}-${file.originalname}`;
            callback(null, filename);
          },
        }),
      }),
    }),
  ],
  controllers: [UploadController],
  providers: [ProcessFileUseCase],
})
export class UploadModule {}
