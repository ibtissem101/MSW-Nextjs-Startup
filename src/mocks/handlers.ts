import { http, HttpResponse, delay } from 'msw';
import { User } from '@/types/user';
import { Product } from '@/types/product';

const users = [
  { id: '1', firstName: 'John', lastName: 'Doe', email: 'john@example.com', role: 'admin' },
  { id: '2', firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', role: 'user' },
];

const products = [
  { id: '1', name: 'Laptop', price: 1299, description: 'High-performance laptop' },
  { id: '2', name: 'Mouse', price: 29, description: 'Wireless mouse' },
];

export const handlers = [
  http.get('/api/user', async () => {
    await delay(300);
    return HttpResponse.json(users[0], { status: 200 });
  }),
  http.get('/api/users', async () => {
    await delay(400);
    return HttpResponse.json(users, { status: 200 });
  }),
  http.get('/api/products', async () => {
    await delay(400);
    return HttpResponse.json(products, { status: 200 });
  }),
];
