/**
 * Environment Configuration
 * 
 * Centralizes all environment variables used across the app.
 * Provides type-safe access to env vars with fallback defaults.
 * 
 * Usage:
 *   import { env } from '@/config/env';
 *   const apiUrl = env.API_URL;
 */

export const env = {
  // API Configuration
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  
  // Feature Flags
  ENABLE_MSW: process.env.NEXT_PUBLIC_ENABLE_MSW !== 'false', // Enabled by default in dev
  
  // Environment
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
} as const;

// Type-safe env checker
export function requireEnv(key: keyof typeof env): string {
  const value = env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return String(value);
}
