# 🚀 HackApp - Next.js Hackathon Starter

**A production-ready Next.js starter template built for hackathons.**  
Fast setup, best practices, and ready for rapid iteration.

---

## ✨ Features

- ✅ **Next.js 15+** with App Router & TypeScript
- ✅ **Centralized API Client** (Axios) with interceptors
- ✅ **MSW (Mock Service Worker)** for local API mocking
- ✅ **Clean Folder Structure** - organized and scalable
- ✅ **Reusable Components** (NavBar, Footer, Button, Card)
- ✅ **Custom Hooks** for data fetching
- ✅ **Environment Configuration** with .env support
- ✅ **Prettier + ESLint** for code consistency
- ✅ **Tailwind CSS** for rapid styling

---

## 📁 Project Structure

```
my-app/
├── src/
│   ├── api/           # API client & functions
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── mocks/         # MSW handlers
│   ├── lib/           # Utilities
│   ├── types/         # TypeScript types
│   ├── config/        # Configuration
│   └── app/           # Next.js pages
│
├── public/
├── .env.local
└── package.json
```

---

## 🚀 Quick Start

```powershell
npm install
npm run dev
```

Visit **http://localhost:3000**

---

## 💡 Key Concepts

### API Client (`src/api/client.ts`)

```typescript
import { apiClient } from '@/api/client';
const response = await apiClient.get('/api/users');
```

### Custom Hooks (`src/hooks/useUser.ts`)

```typescript
const { users, loading, error, refetch } = useUsers();
```

### MSW Mocking (`src/mocks/handlers.ts`)

```typescript
http.get('/api/users', async () => {
  return HttpResponse.json(users, { status: 200 });
});
```

---

## 🔧 Switch from Mock to Real API

1. Update `.env.local`:
```bash
NEXT_PUBLIC_API_URL=https://your-backend.com
NEXT_PUBLIC_ENABLE_MSW=false
```

2. Done! API client now uses real backend.

---

## 📝 Add New Endpoint

1. **Mock it** in `src/mocks/handlers.ts`
2. **Create API function** in `src/api/`
3. **Use in components** via hooks

---

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run lint` | Run linting |

---

## 🔥 Hackathon Tips

- ✅ Use MSW - don't wait for backend
- ✅ Reuse components from `src/components/`
- ✅ Path aliases: `@/components` not `../../`
- ✅ Check `/dashboard` for working example
- ✅ Every file has comments explaining its purpose

---

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [MSW Docs](https://mswjs.io/docs/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Good luck at your hackathon! 🚀**
