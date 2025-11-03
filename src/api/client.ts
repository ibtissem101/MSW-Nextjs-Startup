/**
 * API Client Configuration
 * 
 * Centralized Axios instance with:
 * - Base URL configuration
 * - Request/Response interceptors
 * - Error handling
 * - Authentication token injection
 * 
 * Usage:
 *   import { apiClient } from '@/api/client';
 *   const response = await apiClient.get('/users');
 */

import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { env } from '@/config/env';

// Create axios instance with default config
export const apiClient = axios.create({
  baseURL: env.API_URL,
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add auth token, logging, etc.
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add auth token if available (e.g., from localStorage)
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    // Log request in development
    if (env.IS_DEVELOPMENT) {
      console.log('🚀 API Request:', config.method?.toUpperCase(), config.url);
    }

    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors globally
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log response in development
    if (env.IS_DEVELOPMENT) {
      console.log('✅ API Response:', response.config.url, response.status);
    }
    return response;
  },
  (error: AxiosError) => {
    // Handle different error cases
    if (error.response) {
      // Server responded with error status
      const status = error.response.status;
      
      switch (status) {
        case 401:
          console.error('🔒 Unauthorized - Please login');
          // Redirect to login or refresh token
          if (typeof window !== 'undefined') {
            // window.location.href = '/login';
          }
          break;
        case 403:
          console.error('🚫 Forbidden - Access denied');
          break;
        case 404:
          console.error('🔍 Not Found');
          break;
        case 500:
          console.error('⚠️ Server Error');
          break;
        default:
          console.error('❌ API Error:', status);
      }
    } else if (error.request) {
      // Request made but no response
      console.error('📡 Network Error - No response received');
    } else {
      // Something else happened
      console.error('❌ Error:', error.message);
    }

    return Promise.reject(error);
  }
);

/**
 * API Error Handler
 * Extracts error message from various error formats
 */
export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || error.message || 'An error occurred';
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unknown error occurred';
}
