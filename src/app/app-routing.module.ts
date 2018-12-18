import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '../lib/auth/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard]},
  {path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule', canActivate: [AuthGuard]},
  {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  {
    path: 'map/:id',
    loadChildren: './map/map.module#MapPageModule', canActivate: [AuthGuard]
  },
  {
    path: 'map',
    loadChildren: './map/map.module#MapPageModule', canActivate: [AuthGuard]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
