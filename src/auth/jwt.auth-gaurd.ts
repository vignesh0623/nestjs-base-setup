import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: any = context.switchToHttp().getRequest();
    const token = request.cookies['user-session'];

    if (!token) {
      throw new UnauthorizedException('Authentication token not found.');
    }

    try {
      const user = this.authService.verifyToken(token);
      request.user = user;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired session.');
    }
  }
}