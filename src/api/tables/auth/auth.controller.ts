import { Body, Controller, Get, Param, Post, Request, UseGuards, ValidationPipe } from "@nestjs/common";
import { LocalAuthGuard } from "./local-auth.guard";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt/jwt-auth.guard";
import { RegisterUserDto } from "./dto/register-user.dto"
import { User } from "../users/schemas/user.schema";
import { LoginReturnInfoUserDto } from "./dto/login-return-info-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Request() req): Promise<LoginReturnInfoUserDto> {
    return this.authService.login(req.user);
  }

  @Post('signup')
  signUp(
    @Body(ValidationPipe) registerUserDto: RegisterUserDto,
  ): Promise<User> {
    return this.authService.signUp(registerUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('logout/:userId')
  async logOut(@Param('userId') userId: string) {
    await this.authService.logOut(userId)
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}