import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(data: any): string {
    return this.jwtService.sign(data);
  }

  verifyToken(token: string): any {
    try {
      return this.jwtService.verify(token);
    } catch (err) {
      throw new UnauthorizedException('Invalid or expired session');
    }
  }
}