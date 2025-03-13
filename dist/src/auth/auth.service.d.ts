import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateToken(data: any): string;
    verifyToken(token: string): any;
}
