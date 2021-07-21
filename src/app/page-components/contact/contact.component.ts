import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  center: any;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    disableDefaultUI: true,
    zoom: 7,
    minZoom: 5,
    maxZoom: 10,
  }

  markers: any[] = [];

  constructor() { }

  ngOnInit(): void { 
    this.center = {
      lat: 51.36366938589878,
      lng: 22.548670637589957,
    }
    this.addMarker();
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat,
        lng: this.center.lng,
      },
      label: {
        color: 'red',
      },
      options: { animation: google.maps.Animation.DROP },
      info: 'Marker info ' + (this.markers.length + 1),
    })
  }

}
