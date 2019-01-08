// import {Component, OnInit} from '@angular/core';
//
// import {ActivatedRoute} from '@angular/router';
//
//
// @Component({
//   selector: 'app-map-delivery',
//   templateUrl: './map-from.component.html',
//   styleUrls: ['./map-from.component.scss'],
// })
// export class MapFromComponent implements OnInit {
//
//   id: string;
//   public lat: number;
//   public lng: number;
//   public origin: any;
//   public destination: any;
//   constructor(
//     private route: ActivatedRoute,
//     // private myMapFromComponent: MapFromComponent
//   ) {
//   }
//   ngOnInit(): void {
//     this.id = this.route.snapshot.paramMap.get('id');
//     this.getDirection();
//   }
//   getDirection() {
//
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(position => {
//         this.origin = { lat: 52.1912856, lng: 20.9540901 };
//         //this.origin = { lat: 52.214711, lng: 20.955437 };
//         this.destination  = { lat: 52.220072, lng: 21.0121157 };
//       });
//     }
//   }
// }
