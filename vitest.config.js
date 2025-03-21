import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['**/*.spec.js'],
		coverage: {
			provider: 'istanbul'
		}
	}
});
