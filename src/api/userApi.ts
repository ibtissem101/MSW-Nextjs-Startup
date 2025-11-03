/**
 * User API Functions
 * 
 * All user-related API calls in one place.
 * Each function is typed and returns a Promise.
 * 
 * Usage:
 *   import { getUsers, createUser } from '@/api/userApi';
 *   const users = await getUsers();
 */

import { apiClient, getErrorMessage } from './client';
import { User, CreateUserDto } from '@/types/user';

/**
 * Fetch all users
 */
export async function getUsers(): Promise<User[]> {
  try {
    const response = await apiClient.get<User[]>('/api/users');
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

/**
 * Fetch single user by ID
 */
export async function getUserById(id: string): Promise<User> {
  try {
    const response = await apiClient.get<User>(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

/**
 * Create new user
 */
export async function createUser(userData: CreateUserDto): Promise<User> {
  try {
    const response = await apiClient.post<User>('/api/users', userData);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

/**
 * Update existing user
 */
export async function updateUser(id: string, userData: Partial<User>): Promise<User> {
  try {
    const response = await apiClient.put<User>(`/api/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

/**
 * Delete user
 */
export async function deleteUser(id: string): Promise<void> {
  try {
    await apiClient.delete(`/api/users/${id}`);
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

/**
 * Get current logged-in user
 */
export async function getCurrentUser(): Promise<User> {
  try {
    const response = await apiClient.get<User>('/api/user');
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}
