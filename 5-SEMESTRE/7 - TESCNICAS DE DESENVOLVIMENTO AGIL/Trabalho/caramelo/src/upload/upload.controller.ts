import {
  Controller,
  Post,
  Req,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiHeader,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { InputFileDto } from './dto/input-file.dto';
import { OutputFileDto } from './dto/output-file.dto';
import { ProcessFileUseCase } from './usecases/process-file-use-case';
import { Unauthorized } from 'src/shared/dtos/unauthorized-dto';

@ApiTags('upload')
@Controller('upload')
@ApiHeader({
  name: 'Authorization',
  description: 'Bearer token',
  required: true,
})
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class UploadController {
  constructor(private readonly processFileUseCase: ProcessFileUseCase) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: InputFileDto, description: 'Upload File' })
  @ApiResponse({
    status: 201,
    description: 'File uploaded',
    type: OutputFileDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized', type: Unauthorized })
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Req() req,
  ): Promise<any> {
    return await this.processFileUseCase.execute(file, req);
  }
}
