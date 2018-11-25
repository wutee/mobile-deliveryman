import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import {OrdersPage} from '../orders/orders.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(orders:orders)',
        pathMatch: 'full',
      },
      {
        path: 'orders',
        outlet: 'orders',
        component: OrdersPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(orders:orders)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
