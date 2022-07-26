import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'kindundnatur',
  distFolder: './dist/kindundnatur', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {
    '/:id': {
      serverTimeout: 300000,
      type: 'json',
      id: {
        url: 'https://kindundnatur.ch/spielgruppe',
        property: '_id',
      },
    },
  }
};
