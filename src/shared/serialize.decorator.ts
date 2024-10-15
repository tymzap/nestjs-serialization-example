import { UseInterceptors } from '@nestjs/common';
import { ClassConstructor } from 'class-transformer';
import { SerializationInterceptor } from './serialization.interceptor';

export function Serialize(classConstructor: ClassConstructor<unknown>) {
  return UseInterceptors(new SerializationInterceptor(classConstructor));
}
