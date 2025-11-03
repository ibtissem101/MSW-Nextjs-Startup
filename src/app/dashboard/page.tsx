'use client';

import { useUsers } from '@/hooks/useUser';
import { Button } from '@/components/Button';
import { Card, CardHeader, CardContent } from '@/components/Card';
import { createUser, updateUser, deleteUser } from '@/api/userApi';
import { useState } from 'react';

export default function DashboardPage() {
  const { users, loading, error, refetch } = useUsers();
  const [creating, setCreating] = useState(false);

  const handleCreateUser = async () => {
    setCreating(true);
    try {
      await createUser({
        firstName: 'New',
        lastName: 'User',
        email: `user${Date.now()}@example.com`,
        role: 'user',
      });
      await refetch();
    } catch (err) {
      console.error(err);
    } finally {
      setCreating(false);
    }
  };

  const handleMakeAdmin = async (id: string) => {
    try {
      await updateUser(id, { role: 'admin' });
      await refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteUser(id);
      await refetch();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Example page showing API client in action with MSW mocking
        </p>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Users</h2>
          <p className="text-sm text-gray-500 mt-1">
            {loading ? 'Loading...' : `${users.length} total users`}
          </p>
        </div>
        <Button onClick={handleCreateUser} loading={creating}>
          Create User
        </Button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          Error: {error}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <h3 className="font-semibold text-lg">
                {user.firstName} {user.lastName}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">{user.email}</p>
              <div className="flex items-center justify-between">
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    user.role === 'admin'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {user.role}
                </span>
                <div className="flex gap-2">
                  {user.role !== 'admin' && (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleMakeAdmin(user.id)}
                    >
                      Make Admin
                    </Button>
                  )}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
