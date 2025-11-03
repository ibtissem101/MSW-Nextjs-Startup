# ⚡ Quick Start Guide

**For teammates joining the hackathon project**

---

## 🚀 Get Running in 2 Minutes

### Step 1: Install

```powershell
npm install
```

### Step 2: Run

```powershell
npm run dev
```

### Step 3: Open Browser

- **Home**: http://localhost:3000
- **Dashboard** (working example): http://localhost:3000/dashboard
- **Examples**: http://localhost:3000/examples

---

## 📂 Where is Everything?

```
src/
├── api/           ← API calls go here
├── components/    ← Reusable UI components  
├── hooks/         ← Custom React hooks
├── mocks/         ← Fake API responses (for development)
├── types/         ← TypeScript interfaces
└── app/           ← Pages (routes)
```

---

## 🎯 Common Tasks

### Add a New Page

1. Create `src/app/my-page/page.tsx`
2. Visit http://localhost:3000/my-page

### Call an API

```typescript
import { getUsers } from '@/api/userApi';

const users = await getUsers();
```

### Use a Hook

```typescript
import { useUsers } from '@/hooks/useUser';

function MyComponent() {
  const { users, loading, error } = useUsers();
  return <div>{users.map(...)}</div>;
}
```

### Add a Mock API

Edit `src/mocks/handlers.ts`:

```typescript
http.get('/api/projects', async () => {
  return HttpResponse.json([{ id: 1, name: 'Project' }]);
});
```

---

## 🔧 Switch to Real Backend

Edit `.env.local`:

```bash
NEXT_PUBLIC_API_URL=https://your-backend.com
NEXT_PUBLIC_ENABLE_MSW=false
```

Restart server. Done!

---

## 💡 Tips

- ✅ Check `/dashboard` for a working example
- ✅ All files have comments explaining what they do
- ✅ Use `@/` for imports (`@/components` not `../../components`)
- ✅ MSW = Mock Service Worker (fake API for development)
- ✅ Components in `src/components/` are ready to use

---

## 🆘 Having Issues?

1. Delete `node_modules` and `.next`
2. Run `npm install` again
3. Run `npm run dev`

---

**That's it! Now start building. 🚀**
