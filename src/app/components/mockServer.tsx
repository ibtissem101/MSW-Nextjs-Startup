"use client";

import { useEffect, useState } from "react";

export function StartMockWorker({ children }: { children: React.ReactNode }) {
  const [isMockReady, setMockReady] = useState(false);

  useEffect(() => {
    async function enableMocks() {
      if (process.env.NODE_ENV === "development") {
        const { initMocks } = await import("@/mocks");
        await initMocks();
      }
      setMockReady(true);
    }

    enableMocks();
  }, []);

  if (!isMockReady) {
    return null;
  }

  return <>{children}</>;
}
