import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './guards/google-auth-guard';
import type { Response } from 'express';

const SEVENDAYS = 1000 * 60 * 60 * 24 * 7;
const FIFTYMIN = 1000 * 60 * 15;

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth() {}

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Req() req, @Res() res: Response) {
    const appurl = process.env.FRONTEND_URL;
    const { accessToken, refreshToken } =
      await this.authService.loginWithGoogle(req.user);

    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: FIFTYMIN,
    });
    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: 'auth/refresh',
      maxAge: SEVENDAYS,
    });
    return res.redirect(`${appurl}/`);
  }
}
