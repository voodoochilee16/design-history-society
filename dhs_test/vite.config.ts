import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import autoImport from "sveltekit-autoimport";

const config: UserConfig = {
	plugins: [
		autoImport({
			components: ['./src/lib']
		}),
		sveltekit()],
}

export default config;
