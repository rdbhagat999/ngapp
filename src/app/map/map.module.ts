import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MapComponent } from './map.component';

const routes: Route[] = [
  {
    path: '',
    component: MapComponent,
  },
];

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forChild(routes),
  ],
})
export class MapModule {}
