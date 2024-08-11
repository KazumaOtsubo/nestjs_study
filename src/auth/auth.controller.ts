import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { CredentialsDto } from './dto/credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.authService.createUser(createUserDto);
  }

  @Post('signin')
  async signIn(
    @Body() credentialsDto: CredentialsDto,
  ): Promise<{ token: string }> {
    return await this.authService.singIn(credentialsDto);
  }
}
