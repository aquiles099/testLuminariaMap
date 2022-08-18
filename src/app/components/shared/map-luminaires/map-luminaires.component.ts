import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { 
  circleMarker, geoJSON, GeoJSONOptions,
  LatLng, LatLngBounds, Layer, Map, MapOptions,
  tileLayer, TileLayer } from 'leaflet';

@Component({
  selector: 'app-map-luminaires',
  templateUrl: './map-luminaires.component.html',
  styleUrls: ['./map-luminaires.component.scss']
})
export class MapLuminairesComponent implements OnInit  {

  @Output() infoLuminaires: EventEmitter<any> = new EventEmitter;

  public map!:Map;

  public mapOptions:MapOptions = {
    zoom: 15,
    zoomControl: true,
    center: [40.395347, -3.694041],
    preferCanvas: true
  };

  public baseLayer:TileLayer = tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    crossOrigin: 'anonymous',
    className: 'OSM',
    maxZoom: 22,
    minZoom: 5
  });;

  public mapFitBounds:LatLngBounds = new LatLngBounds([
    [37.50547228, -4.22810257],
    [37.70590845000001, -3.98959274]
  ]);

  public constructor() {}

  ngOnInit(): void {
  }

  public onMapReady(map:Map):void {
    this.map = map;
    this.addLuminairesLayer();
  }

  private async addLuminairesLayer():Promise<void> {
    let self = this;

    const luminaires = await (await fetch('assets/data/luminarias.geojson')).json();

    const options:GeoJSONOptions = {
      pointToLayer: (feature:GeoJSON.Feature, latLng:LatLng) => circleMarker(latLng),
      style: feature =>  ({
        radius: 8, 
        color: "#333",
        fillColor: "#FFFA4D",
        weight: 1,
        opacity: 1,
        fillOpacity: 1
      }),
      onEachFeature: (feature, layer) => {
        layer.bindTooltip(self.makeInfoTooltip(feature.properties));
        layer.on("mouseover", (e) => {
          layer.openTooltip(e.latlng);
        });
        layer.on("mouseout", (e) => {
          layer.closeTooltip();
        });
        layer.on("click", (e) => {
          layer.closeTooltip();
          self.map.closePopup();

          layer.bindPopup(
            self.makeInfoPopup(feature.properties),
            {closeButton: false}
          )
          .on("popupopen", (a) => {
            var popUp = a.target.getPopup()
            popUp.getElement()
            .querySelector(".btn-close-popup")
            .addEventListener("click", (e: any) => {
              self.map.closePopup();
            });
          })
          .openPopup(e.latlng);
          self.setCenterMap([e.latlng.lat, e.latlng.lng],17);                 
          this.infoLuminaires.emit(feature);
        });
      },
      bubblingMouseEvents: false
    };

    geoJSON(luminaires, options).addTo(this.map);

    this.setCenterMap([37.590154770679646, -4.07840008365674],14);
  }

  setCenterMap(latlng: any, zoom: number) {
    this.map.flyTo(latlng, zoom);
  }

  makeInfoPopup(data: any): string {
    return `<div>ID Luminaria: ${ data.id_luminaria }</div>` +
      `<div>Operativa: ${ data.operativa }</div>` +
      `<div>Centro de mando: ${ data.centro_mando }</div>` +
      `<div>Circuito: ${ data.circuito }</div>` +
      `<button class="btn btn-close-popup">
        Cerrar
      </button>`;
  }

  makeInfoTooltip(data: any): string {
    return `<div>ID Luminaria: ${ data.id_luminaria }</div>` +
      `<div>Operativa: ${ data.operativa }</div>` +
      `<div>Centro de mando: ${ data.centro_mando }</div>` +
      `<div>Circuito: ${ data.circuito }</div>`;
  }

}
