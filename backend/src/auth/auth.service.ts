import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/create-auth.dto';
// import { RegisterDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  register(registerDto: RegisterDto) {
    const email = registerDto.email ?? 'noemail';
    const password = registerDto.password ?? 'nopassword';
    console.log(`${email} - ${password}`);
    return {
      message: 'testeando',
    };
  }
}
