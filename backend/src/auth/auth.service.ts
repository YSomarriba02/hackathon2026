import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) { }

  async loginWithGoogle(googleUser: any) {
    // 1. Lógica para buscar o crear el usuario en tu base de datos
    // const user = await this.usersService.findOrCreate(googleUser);

    // 2. Generar tu propio token de acceso JWT
    const payload = { email: googleUser.email, sub: 'user_id_aqui' };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}