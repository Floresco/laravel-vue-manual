import { defineConfig } from "vite";
import {fileURLToPath} from "url";
import vue from "@vitejs/plugin-vue";

export default ({ mode }) => {
    // check if development
    const isDevelopment = mode === "development";

    return defineConfig({
        server: {
            port: 3000,
        },
        build: {
            // the built files will be added here
            outDir: "./../public/app",
        },
        // also going to change base on mode
        base: isDevelopment ? "/" : "/app/",
        plugins: [vue()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
    });
};
