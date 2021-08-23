import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core/core.service';
import * as darkTheme from '../../../assets/google-maps-themes/dark-theme.json';
import * as silverTheme from '../../../assets/google-maps-themes/silver-theme.json';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map!: google.maps.Map;
  private center: google.maps.LatLngLiteral = { lat: 53.34493282706019, lng: -6.267533876858588 };
  private options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    disableDefaultUI: true,
    minZoom: 7,
    maxZoom: 11,
    zoom: 7,
    mapTypeControlOptions: {
      mapTypeIds: ['styled_map']
    }
  }
  
  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
    this.initMap();
    this.addMarker();

    this.coreService.$isDarkMode.subscribe(isDark => {
      this.toogleMapTheme(isDark);
    });
  }

  private initMap() {
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement);
    this.map.setOptions(this.options);
    this.map.setCenter(this.center);
  }

  private addMarker() {
    new google.maps.Marker({
      position: { lat: this.center.lat, lng: this.center.lng },
      map: this.map,
      label: 'Q'
    });
  }

  private toogleMapTheme(isDark: boolean) {
    let theme: any[] = isDark ? darkTheme: silverTheme;
    const styledMapType = new google.maps.StyledMapType(theme);
    this.map.mapTypes.set("styled_map", styledMapType);
    this.map.setMapTypeId("styled_map");
  }
}
