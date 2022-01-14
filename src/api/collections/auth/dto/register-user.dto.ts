import { IsEmail, IsNotEmpty, MaxLength, MinLength, Matches  } from "class-validator";

export class RegisterUserDto {
    @IsNotEmpty()
    first_name: string;

    @IsNotEmpty()
    last_name: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    role: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(50)
    @Matches(/^(?=.*\d).{5,20}$/, {
        message: 'password too weak',
    })
    password: string;
}