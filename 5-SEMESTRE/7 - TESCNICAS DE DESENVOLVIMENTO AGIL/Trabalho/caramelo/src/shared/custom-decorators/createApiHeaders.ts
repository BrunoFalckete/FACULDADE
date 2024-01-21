import { applyDecorators } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';

export const CreateApiHeaders = (
  ...headers: { name: string; description: string; required: boolean }[]
) => {
  return applyDecorators(...headers.map((header) => ApiHeader(header)));
};
