import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UserResponseInterface } from './types/userResponse.interface';
import { LoginUserDto } from './dto/loginUser.dto';
import { UserEntity } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<UserResponseInterface>;
    login(loginUserDto: LoginUserDto): Promise<UserResponseInterface>;
    currentUser(user: UserEntity, currentUserId: number): Promise<UserResponseInterface>;
}
