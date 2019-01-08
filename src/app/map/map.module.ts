import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapPage } from './map.page';
import {AgmCoreModule} from '@agm/core/core.module';
import {AgmDirectionModule} from 'agm-direction';


const routes: Routes = [
  {
    path: '',
    component: MapPage
  }
];

@NgModule({

  imports: [
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyBNvmvnqWm94i0QPftK95siu8dMErRnF1g',
    }),
    AgmDirectionModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapPage],
  providers: [],
  bootstrap: [MapPage]
})
export class MapPageModule {}
