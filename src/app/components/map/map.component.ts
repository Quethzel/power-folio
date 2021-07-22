import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow

  center: google.maps.LatLngLiteral = { lat: 51.36366938589878, lng: 22.548670637589957 };
  markerPositions: google.maps.LatLngLiteral[] = [];
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    disableDefaultUI: true,
    zoom: 5,
    minZoom: 5,
    maxZoom: 11,
  }
  
  constructor() { }

  ngOnInit(): void {
    this.addMarker();
  }

  addMarker() {
    this.markerPositions.push({ lat: this.center.lat, lng: this.center.lng });
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  onMapClick() {
    this.infoWindow.close();
  }

}
