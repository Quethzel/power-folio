import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import * as darkTheme from '../../../assets/google-maps-themes/dark-theme.json';
import * as silverTheme from '../../../assets/google-maps-themes/silver-theme.json';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow

  center: google.maps.LatLngLiteral = { lat: 53.34493282706019, lng: -6.267533876858588 };
  markerPositions: google.maps.LatLngLiteral[] = [];
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    disableDefaultUI: true,
    zoom: 7,
    minZoom: 5,
    maxZoom: 11,
  }
  
  constructor() { }

  ngOnInit(): void {
    const defaultTheme: any[] = silverTheme;
    this.options.styles = defaultTheme;

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
