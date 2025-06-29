import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'hotel-reservation-ui',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  remotes: [
    'staff',
    'organization',
    'hotel',
    'authorization',
    'user',
    'profile',
  ],
  additionalShared: [
    {
      libraryName: '@ngx-translate/core',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        requiredVersion: '16.0.4',
      },
    },
    {
      libraryName: '@ngx-translate/http-loader',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        requiredVersion: '16.0.1',
      },
    },
    {
      libraryName: '@angular/router',
      sharedConfig: {
        singleton: true,
        strictVersion: true,
        requiredVersion: '19.2.14',
      },
    },
  ],
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
