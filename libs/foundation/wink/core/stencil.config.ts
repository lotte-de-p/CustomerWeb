import path from 'path';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil-community/postcss';
import autoprefixer from 'autoprefixer';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['wink-input'],
    event: 'valueChanged',
    targetAttr: 'value',
    type: 'text',
  },
];

export const config: Config = {
  namespace: 'wink-core',
  taskQueue: 'async',
  enableCache: true,
  buildDist: true,
  hashFileNames: true,
  srcDir: resolveAndNormalizePath(`src`),
  globalScript: resolveAndNormalizePath(`src/assets/shared/scripts/global.ts`),
  globalStyle: resolveAndNormalizePath(`src/assets/telenet/styles/globals.scss`),
  testing: {
    browserHeadless: 'new',
    collectCoverageFrom: [
      'src/components/**/*.{ts,tsx}',
      '!src/components/**/*.{cy,spec,stories}.{ts,tsx}',
      '!src/components/_doc-components/**/*',
    ],
    coverageDirectory: '../../../../coverage/libs/@telenet/wink-core',
  },
  transformAliasedImportPaths: true,
  plugins: [
    sass({
      injectGlobalPaths: [resolveAndNormalizePath(`src/assets/shared/styles/utils/functions`)],
    }),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'assets/shared/img', dest: '../assets/shared/img', warn: true },
        { src: 'assets/shared/logos', dest: '../assets/shared/logos', warn: true },
        { src: 'assets/base/img', dest: '../assets/base/img', warn: true },
        { src: 'assets/base/fonts', dest: '../assets/base/fonts', warn: true },
        { src: 'assets/telenet/img', dest: '../assets/telenet/img', warn: true },
        { src: 'assets/telenet/fonts', dest: '../assets/telenet/fonts', warn: true },
        { src: 'assets/telenet/icons/icons-font', dest: '../assets/telenet/icons/icons-font', warn: true },
        {
          src: '../../../../../node_modules/@telenet/design-tokens/dist/css',
          dest: '../assets/shared/tokens',
          warn: true,
        },
        { src: '../release.config.js', dest: '../../release.config.js', warn: true },
        { src: '../wink-core-parser.js', dest: '../../wink-core-parser.js', warn: true },
      ],
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: [
        { src: 'assets/shared/img', dest: 'assets/shared/img', warn: true },
        { src: 'assets/shared/logos', dest: 'assets/shared/logos', warn: true },
        { src: 'assets/base/img', dest: 'assets/base/img', warn: true },
        { src: 'assets/base/fonts', dest: 'assets/base/fonts', warn: true },
        { src: 'assets/telenet/img', dest: 'assets/telenet/img', warn: true },
        { src: 'assets/telenet/fonts', dest: 'assets/telenet/fonts', warn: true },
        { src: 'assets/telenet/icons/icons-font', dest: 'assets/telenet/icons/icons-font', warn: true },
        {
          src: '../../../../../node_modules/@telenet/design-tokens/dist/css',
          dest: 'assets/shared/tokens',
          warn: true,
        },
      ],
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      generateTypeDeclarations: true,
      dir: 'components',
    },
    angularOutputTarget({
      componentCorePackage: '@telenet/wink-core',
      outputType: 'standalone',
      customElementsDir: 'components',
      directivesProxyFile: '../ng/src/generated/proxies.ts',
      directivesArrayFile: '../ng/src/generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
};

function resolveAndNormalizePath(relativePath: string): string {
  return path.resolve(__dirname, relativePath).replace(/\\/g, '/');
}
