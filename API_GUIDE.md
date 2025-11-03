# 📡 API Integration Guide

**How to work with APIs in this project**

---

## 🎯 The Flow

```
Component → Hook → API Function → API Client → Backend (or MSW Mock)
```

---

## 1️⃣ Define Types (`src/types/`)

```typescript
// src/types/project.ts
export interface Project {
  id: string;
  name: string;
  description: string;
}
```

---

## 2️⃣ Create Mock Handler (`src/mocks/handlers.ts`)

```typescript
const projects = [
  { id: '1', name: 'Hackathon App', description: 'Our awesome project' },
];

export const handlers = [
  // ... other handlers
  
  http.get('/api/projects', async () => {
    await delay(300); // Simulate network delay
    return HttpResponse.json(projects, { status: 200 });
  }),
  
  http.post('/api/projects', async ({ request }) => {
    const newProject = await request.json();
    projects.push({ ...newProject, id: String(projects.length + 1) });
    return HttpResponse.json(newProject, { status: 201 });
  }),
];
```

---

## 3️⃣ Create API Function (`src/api/projectApi.ts`)

```typescript
import { apiClient } from './client';
import { Project } from '@/types/project';

export async function getProjects(): Promise<Project[]> {
  const response = await apiClient.get('/api/projects');
  return response.data;
}

export async function createProject(data: Omit<Project, 'id'>): Promise<Project> {
  const response = await apiClient.post('/api/projects', data);
  return response.data;
}
```

---

## 4️⃣ Create Hook (`src/hooks/useProject.ts`)

```typescript
import { useState, useEffect } from 'react';
import { getProjects } from '@/api/projectApi';
import { Project } from '@/types/project';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProjects();
      setProjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return { projects, loading, error, refetch: fetchProjects };
}
```

---

## 5️⃣ Use in Component

```typescript
'use client';

import { useProjects } from '@/hooks/useProject';

export default function ProjectsPage() {
  const { projects, loading, error } = useProjects();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 🔄 Full Example: CRUD Operations

```typescript
// Create
const newProject = await createProject({ name: 'New', description: 'Desc' });

// Read
const projects = await getProjects();
const project = await getProjectById('1');

// Update
const updated = await updateProject('1', { name: 'Updated' });

// Delete
await deleteProject('1');
```

---

## 🛠️ API Client Features

The `apiClient` automatically:

✅ Adds auth tokens (from localStorage)  
✅ Handles errors globally  
✅ Logs requests in development  
✅ Uses base URL from `.env.local`  

---

## 🎭 MSW vs Real API

### Development (MSW Enabled)

```
Component → API Client → MSW → Mock Response
```

### Production (MSW Disabled)

```
Component → API Client → Real Backend
```

**Switch by changing `.env.local`!**

---

## 📝 Quick Reference

### GET Request

```typescript
http.get('/api/users', async () => {
  return HttpResponse.json(users, { status: 200 });
});
```

### POST Request

```typescript
http.post('/api/users', async ({ request }) => {
  const body = await request.json();
  return HttpResponse.json(body, { status: 201 });
});
```

### Dynamic Route

```typescript
http.get('/api/users/:id', async ({ params }) => {
  const { id } = params;
  const user = users.find(u => u.id === id);
  return HttpResponse.json(user, { status: 200 });
});
```

### Error Response

```typescript
http.get('/api/error', () => {
  return HttpResponse.json(
    { error: 'Something went wrong' },
    { status: 500 }
  );
});
```

---

## 🚨 Common Issues

### "Cannot find module @/..."

→ Check `tsconfig.json` has path aliases configured

### "MSW handlers not working"

→ Check browser console for "MSW initialized" message  
→ Verify `NEXT_PUBLIC_ENABLE_MSW=true` in `.env.local`

### "CORS errors with real API"

→ Add CORS headers to backend  
→ Or use Next.js API routes as proxy

---

**That's all you need to know! 🎉**
