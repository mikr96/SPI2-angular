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
  statusHeatmap2: boolean = false;
  statusSensorList: boolean = false;
  heat: any;
  featureGroup: any;
  sensorpath: any = [];
  path: any = [];
  lat: any = [];
  lng: any = [];
  firstpolyline: any;
  markers: any = [];
  coordinates: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.map = L.map('map').setView([2.920282, 101.641747], 12);
    var tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    $('.col-sm-6 button').click(function () {
      if ($('.col-sm-6 button').hasClass('active')) {
        $('.col-sm-6 button').removeClass('active')
      }
      $(this).addClass('active');
    });

  }

  genHeatmap() {

    this.statusHeatmap = !this.statusHeatmap;
    console.log(this.statusHeatmap);

    var tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    if (this.statusHeatmap) {

      this.dataService.getSensorList().subscribe(res => {
        this.sensorList = res.data;

        var e = this.sensorList;
        console.log(e);

        this.addressPoints = e.map(function (x) {

          const pf = (n) => Number(parseFloat(n).toFixed(6));
          return [pf(x.latitude), pf(x.longitude), pf(x.temperature / 100)];

        });
        console.log(this.addressPoints);
        this.heat = L.heatLayer(this.addressPoints, {
          radius: 40,
          gradient: {
            '0': '#0091BF',
            '0.20': '#00adc0',
            '0.21': '#1588ac',
            '0.22': '#00c2b9',
            '0.23': '#00c49f',
            '0.24': '#00c684',
            '0.25': '#00c869',
            '0.26': '#00c99a',
            '0.27': '#00cb31',
            '0.28': '#00cd14',
            '0.29': '#09cf00',
            '0.30': '#27d100',
            '0.31': '#45d200',
            '0.32': '#64d400',
            '0.33': '#84d600',
            '0.34': '#a4d800',
            '0.35': '#c4da00',
            '0.36': '#dbd100',
            '0.37': '#ddb400',
            '0.38': '#df9500',
            '0.39': '#e17600',
            '0.40': '#e35700',
            '0.41': '#1588ac',
            '0.42': '#00c2b9',
            '0.43': '#00c49f',
            '0.44': '#00c684',
            '0.45': '#00c869',
            '0.46': '#00c99a',
            '0.47': '#00cb31',
            '0.48': '#00cd14',
            '0.49': '#09cf00',
            '0.50': '#27d100',
            '0.51': '#45d200',
            '0.52': '#64d400',
            '0.53': '#84d600',
            '0.54': '#a4d800',
            '0.55': '#c4da00',
            '0.56': '#dbd100',
            '0.57': '#ddb400',
            '0.58': '#df9500',
            '0.59': '#e17600',
            '0.60': '#e35700',
            '1': '#e53700'
          }
        }).addTo(this.map);
        // this.map.fitBounds(this.heat.getBounds(), {
        //   padding: [50, 50]
        // });

        $('.leaflet-heatmap-layer').css('opacity', '1');

      }, err => {
        console.log(err);
      });

    } else {
      this.map.removeLayer(this.heat);
    }

  }

  genHeatmap_2() {

    this.statusHeatmap2 = !this.statusHeatmap2;
    console.log(this.statusHeatmap2);

    var tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    if (this.statusHeatmap2) {

      this.dataService.getSensorList_2().subscribe(res => {
        this.sensorList = res.data;

        var e = this.sensorList;
        console.log(e);

        this.addressPoints = e.map(function (x) {

          const pf = (n) => Number(parseFloat(n).toFixed(6));
          return [pf(x.latitude), pf(x.longitude), pf(x.temperature / 100)];

        });
        console.log(this.addressPoints);
        this.heat = L.heatLayer(this.addressPoints, {
          radius: 40,
          gradient: {
            '0': '#0091BF',
            '0.20': '#00adc0',
            '0.21': '#1588ac',
            '0.22': '#00c2b9',
            '0.23': '#00c49f',
            '0.24': '#00c684',
            '0.25': '#00c869',
            '0.26': '#00c99a',
            '0.27': '#00cb31',
            '0.28': '#00cd14',
            '0.29': '#09cf00',
            '0.30': '#27d100',
            '0.31': '#45d200',
            '0.32': '#64d400',
            '0.33': '#84d600',
            '0.34': '#a4d800',
            '0.35': '#c4da00',
            '0.36': '#dbd100',
            '0.37': '#ddb400',
            '0.38': '#df9500',
            '0.39': '#e17600',
            '0.40': '#e35700',
            '1': '#e53700'
          }
        }).addTo(this.map);
        // this.map.fitBounds(this.heat.getBounds(), {
        //   padding: [50, 50]
        // });

        $('.leaflet-heatmap-layer').css('opacity', '1');

      }, err => {
        console.log(err);
      });

    } else {
      this.map.removeLayer(this.heat);
    }

  }

  genPath() {
    this.statusSensorList = !this.statusSensorList;

    L.tileLayer(
      "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    if (this.statusSensorList) {
      this.dataService.getSensorList().subscribe(
        res => {
          this.sensorList = res.data;
          var e = this.sensorList;

          this.path = e.map(function (x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return [pf(x.latitude), pf(x.longitude)];
          });

          this.lat = e.map(function (x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return pf(x.latitude);
          });

          //console.log(this.lat);

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

    L.tileLayer(
      "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    if (this.statusSensorList) {
      this.dataService.getSensorList().subscribe(
        res => {
          this.sensorList = res.data;
          var e = this.sensorList;

          var greenIcon = L.icon({
            iconUrl: "../assets/images/sensor_icon.png",
            iconSize: [24, 24], // size of the icon
            iconAnchor: [12.5, 12.5], // point of the icon which will correspond to marker's location
            //popupAnchor: [12, 0]
          });

          var redIcon = L.icon({
            iconUrl: "../assets/images/sensor_icon.png",
            iconSize: [24, 24], // size of the icon
            iconAnchor: [12.5, 12.5], // point of the icon which will correspond to marker's location
            //popupAnchor: [12, 0]
          });

          console.log(e);
          this.lat = e.map(function (x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return pf(x.latitude);
          });

          this.lng = e.map(function (x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return pf(x.longitude);
          });

          for (let i = 0; i < this.lat.length; i++) {
            this.coordinates.push([this.lat[i], this.lng[i]]);
          }

          var html = "";

          for (let i = 0; i < this.lat.length; i++) {
            html =
              "<strong> Latitude:" +
              this.lat[i] +
              "</strong><br/><strong> Longitude:" +
              this.lng[i] +
              "</strong><br/>";
            var marker = L.marker(this.coordinates[i], {
              icon: greenIcon
            })
              .on("mousemove", function (e) {
                e.target.setIcon(redIcon);
              })
              .on("mouseout", function (e) {
                e.target.setIcon(greenIcon);
              })
              .bindPopup(html);
            this.markers.push(marker);
          }

          this.featureGroup = L.featureGroup(this.markers).addTo(this.map);
          this.map.fitBounds(this.featureGroup.getBounds(), {
            padding: [50, 50]
          });
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.map.removeLayer(this.featureGroup);
    }
  }

  genWaterLevel() {
    this.statusHeatmap = !this.statusHeatmap;
    console.log(this.statusHeatmap);

    var tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png ",
      {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    if (this.statusHeatmap) {
      this.dataService.getSensorList().subscribe(
        res => {
          this.sensorList = res.data;

          var e = this.sensorList;
          console.log(e);

          this.addressPoints = e.map(function (x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return [pf(x.latitude), pf(x.longitude), pf(x.temperature / 5)];
          });
          console.log(this.addressPoints);
          this.heat = L.heatLayer(this.addressPoints, {
            radius: 25,
            gradient: {
              "0.0": "rgb(0, 0, 0)",
              "0.6": "rgb(24, 53, 103)",
              "0.75": "rgb(46, 100, 158)",
              "0.9": "rgb(23, 173, 203)",
              "1.0": "rgb(0, 250, 250)"
            }
          }).addTo(this.map);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.map.removeLayer(this.heat);
    }
  }
}
