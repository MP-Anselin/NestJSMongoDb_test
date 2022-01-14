import { User } from "../schemas/user.schema";

export class UpdateUserDto {
  constructor(user?: Partial<User>) {
    if (!user)
      return;
    this.updatedAt = user.updatedAt;
    this.last_name = user.last_name;
    this.first_name = user.first_name;
    this.email = user.email;
    this.username = user.username;
    this.roles = user.roles;
  }
  updatedAt: Date;
  last_name: string;
  first_name: string;
  email: string;
  username: string;
  isLog: boolean;
  roles: string[];
}