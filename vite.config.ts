import { defineConfig } from 'vite';
import { resolve } from 'path';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [tsConfigPaths()],
    resolve: {
        alias: {
            '@atoms': '/src/components/atoms',
            '@components': '/src/components',
        }
    },
    build: {
        rollupOptions: {
            input: {
              'toujou-be-page-ce-element': resolve(__dirname, './src/components/page-ce-element/page-ce-element.ts'),
            },
            external: ['lit'],
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo?.name?.split('.').at(1);
                    // @ts-ignore
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'img';
                    }
                    return `${extType}/[name]-[hash][extname]`;
                },
                chunkFileNames: 'js/[name]-[hash].js',
                entryFileNames: 'js/[name].js',
                globals: {
                    lit: 'lit',
                },
            },
        },
        outDir: 'dist', // Output directory for our components
    },
    base: '/toujou-backend-ui/',
});
