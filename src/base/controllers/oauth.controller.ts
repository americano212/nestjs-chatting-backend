import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { AuthService, GoogleLoginGuard, JwtSign, Payload } from '../../auth';
import { ReqUser } from '../../common';
import { SNSLoginDto } from '../dto';

@ApiTags('Auth')
@Controller('login')
export class OAuthController {
  constructor(private readonly auth: AuthService) {}

  @ApiBody({ type: SNSLoginDto })
  @Post('/sns')
  public async snsLogin(@Body() data: SNSLoginDto): Promise<JwtSign> {
    return await this.auth.snsLogin(data);
  }

  @Get('/google')
  @UseGuards(GoogleLoginGuard)
  public async googleLogin(): Promise<void> {}

  @Get('/google/callback')
  @UseGuards(GoogleLoginGuard)
  public async googleLoginCallback(@ReqUser() user: Payload): Promise<JwtSign> {
    return await this.auth.jwtSign(user);
  }
}
