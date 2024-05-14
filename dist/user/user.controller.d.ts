import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UserResponseInterface } from './types/userResponse.interface';
import { LoginUserDto } from './dto/loginUser.dto';
import { ExpressRequestInterface } from './types/expressRequest.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<UserResponseInterface>;
    login(loginUserDto: LoginUserDto): Promise<UserResponseInterface>;
    currentUser(request: ExpressRequestInterface): Promise<UserResponseInterface>;
}
