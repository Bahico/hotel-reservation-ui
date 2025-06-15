declare module 'hotel/routes' {
  import {Routes} from '@angular/router';
  const routes: Routes;
  export default routes;
}

declare module 'hotel/dashboard.items' {
  import {DashboardItem} from '@components/models';
  const items: DashboardItem[];
  export default items;
}
