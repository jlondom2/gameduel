// vite.config.ts
// vite.config.ts
import { defineConfig, loadEnv } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      TanStackRouterVite(),
      viteReact(),
      // ...
    ],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  };
});
