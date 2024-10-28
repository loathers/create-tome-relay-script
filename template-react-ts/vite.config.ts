import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const publicFiles = fs.readdirSync(path.resolve(__dirname, "public"));
const publicFilesRegex = publicFiles
  .map((f) => f.replace(/\./g, "\\."))
  .join("|");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/app/",
  resolve: {
    alias: {
      kolmafia: path.resolve(
        __dirname,
        "node_modules/tome-kolmafia/dist/kolmafia/index.js",
      ),
    },
  },
  optimizeDeps: {
    include: ["kolmafia > dataloader", "tome-kolmafia > dataloader"],
    exclude: ["kolmafia", "tome-kolmafia"],
  },
  build: {
    outDir: "build",
  },
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    port: 3000,
    proxy: {
      [`^/(?!app/|src/|node_modules/|@react-refresh|@vite|${publicFilesRegex}).*(?<!.js.map)$`]:
        {
          target: "http://127.0.0.1:60080",
          changeOrigin: true,
          secure: false,
        },
    },
  },
});
