import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate React and ReactDOM into their own chunk
          react: ["react", "react-dom"],
          // Separate UI components into their own chunk
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-select",
            "@radix-ui/react-label",
          ],
          // Separate icons into their own chunk
          icons: ["lucide-react"],
          // Separate form libraries
          forms: ["react-hook-form", "@hookform/resolvers"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
}));
