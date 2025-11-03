/**
 * useUser Hook
 * 
 * Custom hook for fetching and managing user data.
 * Handles loading states, errors, and refetching.
 * 
 * Usage:
 *   const { users, loading, error, refetch } = useUsers();
 */

'use client';

import { useState, useEffect } from 'react';
import { getUsers, getUserById } from '@/api/userApi';
import { User } from '@/types/user';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    loading,
    error,
    refetch: fetchUsers,
  };
}

export function useUser(id: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getUserById(id);
      setUser(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch user');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  return {
    user,
    loading,
    error,
    refetch: fetchUser,
  };
}
