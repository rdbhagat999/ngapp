import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: any;
  apiLoaded: Observable<boolean>;
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;

  display: google.maps.LatLngLiteral = this.center;

  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(
        `https://maps.googleapis.com/maps/api/js?key=${environment.mapApiKey}`,
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  ngOnInit(): void {}

  addMarker(event: any) {
    this.markerPositions.push(event.latLng.toJSON());
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  moveMap(event: any) {
    this.center = event.latLng.toJSON();
  }

  move(event: any) {
    this.display = event.latLng.toJSON();
  }
}
