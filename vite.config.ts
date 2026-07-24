import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [react(), 
ViteImageOptimizer({
      jpg: { quality: 70 },
      jpeg: { quality: 70 },
      png: { quality: 70, compressionLevel: 8 },
      webp: { quality: 70 },
      avif: { quality: 60 },
    }), ],

  build: {
    // Use esbuild for minification (faster than terser, ships with Vite)
    minify: "esbuild",

    // Raise warning threshold — gallery pages are image-heavy by nature
    chunkSizeWarningLimit: 2000,

    // Enable CSS code splitting — each async chunk gets its own CSS file
    cssCodeSplit: true,

    // Content-hash filenames for long-term caching
    rollupOptions: {
      output: {
        // Manual chunk splitting keeps vendor code separate from app code
        // so returning visitors only re-download what changed
        manualChunks: {
          // React core — almost never changes
          "vendor-react": ["react", "react-dom", "react/jsx-runtime"],

          // Router — changes less often than app code
          "vendor-router": ["react-router-dom"],

          // Icons — large, changes rarely
          "vendor-icons": ["lucide-react"],

          // Data-fetching — separate so cache survives UI changes
          "vendor-query": ["@tanstack/react-query", "@tanstack/query-core"],
        },

        // Put JS in /assets/js/, CSS in /assets/css/, images in /assets/img/
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split(".").pop()?.toLowerCase() ?? "";
          if (["jpg", "jpeg", "png", "webp", "gif", "svg", "avif"].includes(ext)) {
            return "assets/img/[name]-[hash][extname]";
          }
          if (ext === "css") {
            return "assets/css/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },

    // Source maps in prod are useful for error tracking (Sentry etc.)
    // Set to false if you want a leaner build and have no error tracker
    sourcemap: false,

    // Let the browser decide to pre-load chunks — Vite handles modulepreload
    modulePreload: { polyfill: true },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },

  // In dev, pre-bundle deps so the browser gets one request instead of hundreds
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "lucide-react",
      "@tanstack/react-query",
    ],
  },
}));