import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import injectHTML from 'vite-plugin-html-inject';
import { defineConfig } from 'vite';

export default defineConfig({
	root: './src',
	base: '/travel/',
	publicDir: './src/assets/',
	server: {
		port: 3000,
		open: true,
	},
	build: {
		outDir: '../dist',
		rollupOptions: {
			input: {
				main: './src/index.html',
			},
		},
	},
	plugins: [
		injectHTML(),
		ViteImageOptimizer({
			png: {
				quality: 80,
			},
			jpg: {
				quality: 80,
			},
		}),
	],
});
