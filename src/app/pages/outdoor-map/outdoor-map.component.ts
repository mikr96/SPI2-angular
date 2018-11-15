import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "src/app/data.service";

declare var $: any;
declare let L;

@Component({
  selector: "app-outdoor-map",
  templateUrl: "./outdoor-map.component.html",
  styleUrls: ["./outdoor-map.component.scss"]
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
  lat: any = [];
  firstpolyline: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.map = L.map("map").setView([2.920282, 101.641747], 12);
    var tiles = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  genHeatmap() {
    this.statusHeatmap = !this.statusHeatmap;
    console.log(this.statusHeatmap);

    var tiles = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    if (this.statusHeatmap) {
      this.dataService.getSensorList().subscribe(
        res => {
          this.sensorList = res.data;

          var e = this.sensorList;
          console.log(e);

          this.addressPoints = e.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return [pf(x.latitude), pf(x.longitude), pf(x.temperature / 5)];
          });
          console.log(this.addressPoints);
          this.heat = L.heatLayer(this.addressPoints, { radius: 25 }).addTo(
            this.map
          );
        },
        err => {
          console.log(err);
        }
      );
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

          this.path = e.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return [pf(x.latitude), pf(x.longitude)];
          });

          this.lat = e.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return pf(x.latitude);
          });

          //console.log(this.lat);

          var greenIcon = L.icon({
            iconUrl: "src/assets/images/sensor_icon.png",

            iconSize: [15, 15], // size of the icon
            iconAnchor: [0, 0] // point of the icon which will correspond to marker's location
          });

          this.firstpolyline = new L.polyline(this.path, {
            color: "red",
            weight: 7,
            opacity: 0.7,
            // dashArray: '9,30',
            lineCap: "square",
            lineJoin: "round"
          });

          this.firstpolyline.addTo(this.map);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.map.removeLayer(this.firstpolyline);
    }
  }

  genSensor() {
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

          this.path = e.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return [pf(x.latitude), pf(x.longitude)];
          });

          this.lat = e.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return pf(x.latitude);
          });

          var greenIcon = L.icon({
            iconUrl: "src/assets/images/sensor_icon.png",

            iconSize: [15, 15], // size of the icon
            iconAnchor: [0, 0] // point of the icon which will correspond to marker's location
          });
          var j = 1;
          for (let i = 0; i < this.path.length; i++) {
            this.sensorpath[i] = L.marker(this.path[i], {
              icon: greenIcon,
              title: j
            }).addTo(this.map);
            j++;
          }
        },
        err => {
          console.log(err);
        }
      );
    } else {
      for (let i = 0; i < this.path.length; i++)
        this.map.removeLayer(this.sensorpath[i]);
    }
  }
}
