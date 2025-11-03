/**
 * User Types & Interfaces
 * 
 * Shared TypeScript types used across the app.
 * Keep this in sync with your backend API.
 */

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  role?: 'admin' | 'user' | 'guest';
}

export interface UpdateUserDto {
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: 'admin' | 'user' | 'guest';
}
