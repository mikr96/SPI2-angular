import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';

declare var $: any;
declare let L;

@Component({
  selector: 'app-outdoor-map',
  templateUrl: './outdoor-map.component.html',
  styleUrls: ['./outdoor-map.component.scss']
})

export class OutdoorMapComponent implements OnInit {

  sensorList: any = [];
  addressPoints: any = [];
  map: any;
  statusHeatmap: boolean = false;
  statusSensorList: boolean = false;
  heat: any;
  sensorpath: any = [];
  path: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.map = L.map('map').setView([2.920282, 101.641747], 12);
    var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

  }

  genHeatmap() {

    this.statusHeatmap = !this.statusHeatmap;
    console.log(this.statusHeatmap);

    var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    if (this.statusHeatmap) {

      this.dataService.getSensorList().subscribe(res => {
        this.sensorList = res.data;

        var e = this.sensorList;
        console.log(e);

        this.addressPoints = e.map(function (x) {

          const pf = (n) => Number(parseFloat(n).toFixed(6));
          return [pf(x.latitude), pf(x.longitude), pf(x.temperature / 5)];

        });
        console.log(this.addressPoints);
        this.heat = L.heatLayer(this.addressPoints, { radius: 25 }).addTo(this.map);

      }, err => {
        console.log(err);
      });

    } else {
      this.map.removeLayer(this.heat);
    }

  }

  genPath() {
    this.statusSensorList = !this.statusSensorList;

    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    if (this.statusSensorList) {
      this.dataService.getSensorList().subscribe(
        res => {

          this.sensorList = res.data;
          var e = this.sensorList;

          this.path = e.map(function (x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return [pf(x.latitude), pf(x.longitude)];
          });

          var greenIcon = L.icon({
            iconUrl: 'src/assets/images/sensor_icon.png',

            iconSize: [15, 15], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
          });

          for (let i = 0; i < this.path.length; i++) {
            this.sensorpath[i] = L.marker(this.path[i], { icon: greenIcon }).addTo(this.map);
          }

        },
        err => {
          console.log(err);
        }
      );
    } else {
      //this.map.removeLayer(this.path);
      for (let i = 0; i < this.path.length; i++) {
        this.map.removeLayer(this.sensorpath[i]);
      }
    }
  }


}
