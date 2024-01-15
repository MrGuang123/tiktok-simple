import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './jwt.strategy/constants';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      global: true
    })
  ],
  providers: [
    AuthService,
    PrismaService,
    ConfigService,
    JwtService
  ],
  exports: [
    JwtService,
    AuthService
  ]
})
export class AuthModule { }
