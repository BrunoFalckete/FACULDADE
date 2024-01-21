import { Injectable } from '@nestjs/common';
import { OutputFileDto } from '../dto/output-file.dto';
import {
  UploadApiResponse,
  UploadApiErrorResponse,
  v2 as cloudinary,
} from 'cloudinary';
import { cloudinaryTokens } from 'src/libs/cloudinary-integration';

@Injectable()
export class ProcessFileUseCase {
  public async execute(
    file: Express.Multer.File,
    req: any,
  ): Promise<OutputFileDto> {
    return new Promise<OutputFileDto>((resolve, reject) => {
      cloudinary.config(cloudinaryTokens);
      cloudinary.uploader.upload(
        file.path,
        (error: UploadApiErrorResponse, result: UploadApiResponse) => {
          if (error) {
            reject(new Error(`Error on upload file: ${error.message}`));
          } else {
            resolve({
              fileName: result.original_filename,
              fileType: result.format,
              size: result.bytes,
              url: result.url,
            });
          }
        },
      );
    });
  }
}
