import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { typeGuard } from './utils/constants';

@Injectable()
export class JwtAuthGuard extends AuthGuard(typeGuard.jwt) {}
