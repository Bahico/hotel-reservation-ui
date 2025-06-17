import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'authorization',
  exposes: {
    './routes': 'apps/authorization/src/app/remote-entry/entry.routes.ts',
  },
  additionalShared: [
    {
      libraryName: '@ngx-translate/core',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        requiredVersion: '16.0.4'
      }
    },
    {
      libraryName: '@ngx-translate/http-loader',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        requiredVersion: '16.0.1'
      }
    },
    {
      libraryName: '@angular/router',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        requiredVersion: '19.2.14'
      }
    }
  ]
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
