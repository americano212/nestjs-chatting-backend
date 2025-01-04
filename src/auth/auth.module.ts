import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { LocalStrategy, GoogleStrategy, JwtStrategy } from './strategies';
import { AuthSerializer } from './auth.serializer';

@Global()
@Module({
  imports: [JwtModule.register({}), UserModule],
  providers: [AuthService, LocalStrategy, GoogleStrategy, JwtStrategy, AuthSerializer],
  exports: [AuthService],
})
export class AuthModule {}
