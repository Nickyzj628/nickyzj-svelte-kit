import { sveltekit } from "@sveltejs/kit/vite";
import unoCss from "unoCss/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [unoCss(), sveltekit()],
});
