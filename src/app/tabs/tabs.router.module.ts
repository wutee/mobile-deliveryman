import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import {OrdersPage} from '../orders/orders.page';
import { MapPage } from '../map/map.page';
import {MyOrdersPage} from '../my-orders/my-orders.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'orders',
        outlet: 'orders',
        component: OrdersPage
      },
      {
        path: 'my-orders',
        outlet: 'my-orders',
        component: MyOrdersPage
      },
      {
        path: 'map',
        outlet: 'map',
        component: MapPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
