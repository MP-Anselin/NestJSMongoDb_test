import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from "../users.service";

@Injectable()
export class RolesGuard implements CanActivate {
  private roles = ['Admin', 'Author'];
  constructor(private usersService: UsersService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { username } = request.user;
    const userInfo = await this.usersService.findByUsername({ username });
    if (!!userInfo.roles.filter((role) => this.roles.includes(role)).length){
      return true;
    }
    throw new UnauthorizedException();
  }
}