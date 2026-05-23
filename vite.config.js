import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        story: resolve(__dirname, 'the_story_of_senga/index.html'),
        classroom: resolve(__dirname, 'practical_classroom/index.html'),
        trees: resolve(__dirname, 'tree_billionaire_generation/index.html'),
        community: resolve(__dirname, 'community_villages/index.html'),
        movement: resolve(__dirname, 'join_the_movement/index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        blogPost1: resolve(__dirname, 'blog/post-1-healthy-soil.html'),
        blogPost2: resolve(__dirname, 'blog/post-2-tree-billionaire.html'),
        blogPost3: resolve(__dirname, 'blog/post-3-urban-rooftop.html'),
      },
    },
  },
});
