import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { HomePageModule } from '../home/home.module';
import {OrdersPageModule} from '../orders/orders.module';
import { MapPageModule } from '../map/map.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    ContactPageModule,
    OrdersPageModule,
    MapPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
