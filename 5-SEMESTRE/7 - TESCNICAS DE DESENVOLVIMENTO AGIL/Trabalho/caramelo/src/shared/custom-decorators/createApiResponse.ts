import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

export const CreateApiResponse = (
  ...responses: { status: number; description: string; type: any }[]
) => {
  return applyDecorators(...responses.map((response) => ApiResponse(response)));
};
