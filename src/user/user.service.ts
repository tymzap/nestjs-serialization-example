import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(id: string) {
    return this.users.find((user) => user.id === id);
  }

  getUsers() {
    return {
      page: 1,
      totalPages: 1,
      data: this.users,
    };
  }

  private readonly users = [
    {
      id: '1',
      name: 'Alice Johnson',
      age: 29,
      email: 'alice.johnson@example.com',
      isActive: true,
      createdAt: new Date('2024-05-15T14:48:00.000Z'),
    },
    {
      id: '2',
      name: 'Bob Smith',
      age: 34,
      email: 'bob.smith@example.com',
      isActive: false,
      createdAt: new Date('2024-06-20T08:30:00.000Z'),
    },
    {
      id: '3',
      name: 'Charlie Davis',
      age: 22,
      email: 'charlie.davis@example.com',
      isActive: true,
      createdAt: new Date('2024-07-05T12:15:00.000Z'),
    },
  ];
}
