import { withModuleFederation } from '@nx/module-federation/angular';
import config from './module-federation.config';

/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
export default withModuleFederation(
  {
    ...config,
    /*
     * Remote overrides for production.
     * Each entry is a pair of a unique name and the URL where it is deployed.
     *
     * e.g.

     * */
     remotes: [
        ['staff', ' http://176.96.241.59:4201'],
        ['organization', 'http://176.96.241.59:4202'],
        ['hotel', 'http://176.96.241.59:4203'],
        ['authorization', 'http://176.96.241.59:4205'],
        ['user', 'http://176.96.241.59:4206'],
        ['profile', 'http://176.96.241.59:4207'],
      ]

  },
  { dts: false }
);
