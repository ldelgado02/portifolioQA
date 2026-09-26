import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, type UserConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(async ({ command }): Promise<UserConfig> => {
  // nitro only produces the deploy bundle, so keep it out of the dev server.
  const buildPlugins =
    command === "build"
      ? [
          (await import("nitro/vite")).nitro({
            defaultPreset: "cloudflare-module",
            // Must match the Worker name in the Cloudflare dashboard.
            cloudflare: {
              nodeCompat: true,
              deployConfig: true,
              wrangler: { name: "luis-delgado-qa", workers_dev: true },
            },
          }),
        ]
      : [];

  return {
    server: { host: "::", port: 8080 },
    css: { transformer: "lightningcss" },
    resolve: {
      alias: { "@": `${process.cwd()}/src` },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    plugins: [
      tailwindcss(),
      tsConfigPaths({ projects: ["./tsconfig.json"] }),
      tanstackStart({
        importProtection: {
          behavior: "error",
          client: { files: ["**/server/**"], specifiers: ["server-only"] },
        },
        // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
        server: { entry: "server" },
      }),
      ...buildPlugins,
      viteReact(),
    ],
  };
});
