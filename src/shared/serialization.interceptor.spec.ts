import { SerializationInterceptor } from './serialization.interceptor';
import { ExecutionContext } from '@nestjs/common';
import { of } from 'rxjs';
import { Exclude, Transform } from 'class-transformer';

describe('SerializationInterceptor', () => {
  let context: ExecutionContext;

  beforeEach(() => {
    context = mockExecutionContext();
  });

  it('serializes a response', (done) => {
    const userMock = {
      id: '1',
      name: 'Alice Johnson',
      age: 20,
      createdAt: new Date('2024-06-20T08:30:00.000Z'),
    };

    class UserDtoMock {
      id: string;
      name: string;

      @Exclude()
      age: number;

      @Transform(({ value }) => value.toLocaleDateString('en-US'))
      createdAt: string;
    }

    const interceptor = new SerializationInterceptor(UserDtoMock);
    const next = mockCallHandler(userMock);

    interceptor.intercept(context, next).subscribe((result) => {
      expect(result).toEqual({
        id: '1',
        name: 'Alice Johnson',
        createdAt: '6/20/2024',
      });
      done();
    });
  });
});

function mockExecutionContext() {
  return {
    switchToHttp: jest.fn().mockReturnThis(),
    getRequest: jest.fn().mockReturnValue({}),
  } as unknown as ExecutionContext;
}

function mockCallHandler(returnedData: any) {
  return {
    handle: jest.fn().mockReturnValue(of(returnedData)),
  };
}
