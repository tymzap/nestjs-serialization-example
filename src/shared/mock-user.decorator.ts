import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { Observable } from 'rxjs';

export function MockUser(roles: string[]) {
  return UseInterceptors(new MockUserInterceptor(roles));
}

class MockUserInterceptor implements NestInterceptor {
  constructor(private roles: string[]) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    request.user = {
      roles: this.roles,
    };

    return next.handle();
  }
}
