import { IsDefined, IsEmail, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  @IsEmail()
  @IsDefined()
  email: string;

  @IsString()
  @IsDefined()
  name: string;
}

export class UserEmailDto {
  @IsString()
  @IsEmail()
  @IsDefined()
  email: string;
}
