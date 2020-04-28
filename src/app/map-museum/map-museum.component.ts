import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-museum',
  templateUrl: './map-museum.component.html',
  styleUrls: ['./map-museum.component.css']
})
export class MapMuseumComponent implements AfterViewInit {
  private museumMap: any;
  @Input() museumCoord:number[];

  constructor() { }

  private initMuseumMap(): void {
    this.museumMap = L.map('museum-map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Salut !'
    });
    tiles.addTo(this.museumMap);
    const marker = L.marker([ 39.8282, -98.5795 ]);
    marker.addTo(this.museumMap)
  };


  ngAfterViewInit(): void {
    this.initMuseumMap();
  }

}
