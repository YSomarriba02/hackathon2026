import { IsEmail, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email!: string;

  @MinLength(5, { message: 'Ingresa una password mas segura' })
  password!: string;
}
