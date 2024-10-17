import {
  NestInterceptor,
  Injectable,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  ClassConstructor,
  plainToInstance,
} from 'class-transformer';

@Injectable()
export class SerializationInterceptor implements NestInterceptor {
  constructor(private classConstructor: ClassConstructor<unknown>) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<unknown>,
  ): Observable<unknown> {
    return next.handle().pipe(map((data) => this.serialize(data)));
  }

  private serialize(value: unknown) {
    return plainToInstance(this.classConstructor, value);
  }
}
