import { worker } from "./browser";
import { env } from "@/config/env";

export async function initMocks() {
  if (typeof window === "undefined") return;
  if (!env.IS_DEVELOPMENT && !env.ENABLE_MSW) return;

  await worker.start({
    onUnhandledRequest: "bypass",
    serviceWorker: {
      url: "/mockServiceWorker.js",
    },
    quiet: false,
  });

  console.log("🔶 MSW initialized");
}
