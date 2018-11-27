import { Component, OnInit } from "@angular/core";
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
  featureGroup: any;
  featureGroup_sensor: any;
  sensorpath: any = [];
  path: any = [];
  lat: any = [];
  lng: any = [];
  lat_sensor: any = [];
  lng_sensor: any = [];
  temp: any = [];
  firstpolyline: any;
  markers: any = [];
  coordinates: any = [];
  coordinates_sensor: any = [];
  sensors: any = [];
  val = 0;

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 1;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    $("#map").height(window.innerHeight);
    this.map = L.map("map", {
      zoomControl: false
    }).setView([2.920282, 101.641747], 12);
    L.tileLayer(
      "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);
  }

  path1() {
    this.statusHeatmap = !this.statusHeatmap;
    if (this.statusHeatmap) {
      this.update1(0);
      document.getElementById("slider1").style.display = "block";
    } else {
      document.getElementById("slider1").style.display = "none";
      this.update1("delete");
    }
  }

  path2() {
    this.statusHeatmap = !this.statusHeatmap;
    if (this.statusHeatmap) {
      this.update2(0);
      document.getElementById("slider2").style.display = "block";
    } else {
      document.getElementById("slider2").style.display = "none";
      this.update2("delete");
    }
  }

  path3() {
    this.statusHeatmap = !this.statusHeatmap;
    if (this.statusHeatmap) {
      this.genHeatmap3(0);
      document.getElementById("slider3").style.display = "block";
    } else {
      document.getElementById("slider3").style.display = "none";
      this.genHeatmap3("delete");
    }
  }

  update1(value) {
    L.tileLayer(
      "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png ",
      {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);
    this.dataService.getHeatmap1().subscribe(
      res => {
        if (value != "delete") {
          this.sensorList = res.data;

          var e = this.sensorList;
          //console.log(e[0].sensor_list);

          this.lat = e[value].sensor_list.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return pf(x.Latitude);
          });

          this.lng = e[value].sensor_list.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return pf(x.Longitude);
          });

          this.temp = e[value].sensor_list.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return pf(x.Temperature);
          });

          for (let i = 0; i < this.lat.length; i++) {
            this.coordinates.push([this.lat[i], this.lng[i]]);
          }

          for (let i = 0; i < this.lat.length; i++) {
            if (this.temp[i] > 26.7) {
              var sensor = L.circle(this.coordinates[i], 50, {
                weight: 0,
                fillColor: "#B22222",
                fillOpacity: 0.3
              });
              this.sensors.push(sensor);
            } else if (this.temp[i] < 26.7) {
              var sensor = L.circle(this.coordinates[i], 50, {
                weight: 0,
                fillColor: "#40E0D0",
                fillOpacity: 0.3
              });
              this.sensors.push(sensor);
            }
          }

          sensor = [];

          this.featureGroup = L.featureGroup(this.sensors).addTo(this.map);
          this.map.fitBounds(this.featureGroup.getBounds(), {
            padding: [50, 50]
          });
        } else {
          this.map.removeLayer(this.featureGroup);
          e = [];
          this.sensorList = [];
          this.lat = [];
          this.lng = [];
          this.temp = [];
          this.coordinates = [];
          this.sensors = [];
          this.featureGroup = [];
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  update2(value) {
    L.tileLayer(
      "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png ",
      {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);
    this.dataService.getHeatmap2().subscribe(
      res => {
        if (value != "delete") {
          this.sensorList = res.data;

          var e = this.sensorList;

          this.lat = e[value].sensor_list.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return pf(x.latitude);
          });

          this.lng = e[value].sensor_list.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return pf(x.longitude);
          });

          this.temp = e[value].sensor_list.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return pf(x.temperature);
          });

          for (let i = 0; i < this.lat.length; i++) {
            this.coordinates.push([this.lat[i], this.lng[i]]);
          }

          for (let i = 0; i < this.lat.length; i++) {
            if (this.temp[i] > 26.7) {
              var sensor = L.circle(this.coordinates[i], 50, {
                weight: 0,
                fillColor: "#B22222",
                fillOpacity: 0.3
              });
              this.sensors.push(sensor);
            } else if (this.temp[i] < 26.7) {
              var sensor = L.circle(this.coordinates[i], 50, {
                weight: 0,
                fillColor: "#40E0D0",
                fillOpacity: 0.3
              });
              this.sensors.push(sensor);
            }
          }

          this.featureGroup = L.featureGroup(this.sensors).addTo(this.map);
          this.map.fitBounds(this.featureGroup.getBounds(), {
            padding: [50, 50]
          });
        } else {
          this.map.removeLayer(this.featureGroup);
          e = [];
          this.sensorList = [];
          this.lat = [];
          this.lng = [];
          this.temp = [];
          this.coordinates = [];
          this.sensors = [];
          this.featureGroup = [];
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  // genHeatmap() {
  //   this.statusHeatmap = !this.statusHeatmap;
  //   console.log(this.statusHeatmap);

  //   var tiles = L.tileLayer(
  //     "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png ",
  //     {
  //       attribution:
  //         '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //     }
  //   ).addTo(this.map);

  //   if (this.statusHeatmap) {
  //     this.dataService.getSensorList().subscribe(
  //       res => {
  //         this.sensorList = res.data;

  //         var e = this.sensorList;
  //         console.log(e);

  //         this.addressPoints = e.map(function(x) {
  //           const pf = n => Number(parseFloat(n).toFixed(6));
  //           return [pf(x.latitude), pf(x.longitude), pf(x.temperature / 5)];
  //         });
  //         console.log(this.addressPoints);
  //         this.heat = L.heatLayer(this.addressPoints, { radius: 25 }).addTo(
  //           this.map
  //         );
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  //   } else {
  //     this.map.removeLayer(this.heat);
  //   }
  // }

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

          this.path = e.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return [pf(x.latitude), pf(x.longitude)];
          });

          this.lat = e.map(function(x) {
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
            iconUrl: "src/assets/images/greenIcon.svg",
            iconSize: [24, 24], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [12, 0]
          });

          var redIcon = L.icon({
            iconUrl: "src/assets/images/redIcon.svg",
            iconSize: [24, 24], // size of the icon
            iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor: [12, 0]
          });

          //console.log(e);
          this.lat_sensor = e.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return pf(x.latitude);
          });

          this.lng_sensor = e.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return pf(x.longitude);
          });

          for (let i = 0; i < this.lat_sensor.length; i++) {
            this.coordinates_sensor.push([
              this.lat_sensor[i],
              this.lng_sensor[i]
            ]);
          }

          var html = "";

          for (let i = 0; i < this.lat_sensor.length; i++) {
            html =
              "<strong> Latitude:" +
              this.lat_sensor[i] +
              "</strong><br/><strong> Longitude:" +
              this.lng_sensor[i] +
              "</strong><br/>";
            var marker = L.marker(this.coordinates_sensor[i], {
              icon: greenIcon
            })
              .on("mousemove", function(e) {
                e.target.setIcon(redIcon);
              })
              .on("mouseout", function(e) {
                e.target.setIcon(greenIcon);
              })
              .bindPopup(html);
            this.markers.push(marker);
          }

          this.featureGroup_sensor = L.featureGroup(this.markers).addTo(
            this.map
          );
          this.map.fitBounds(this.featureGroup_sensor.getBounds(), {
            padding: [50, 50]
          });
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.map.removeLayer(this.featureGroup_sensor);
      L.tileLayer(
        "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png ",
        {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }
      ).addTo(this.map);
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

          this.addressPoints = e.map(function(x) {
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

  // genHeatmap1(value) {
  //   L.tileLayer(
  //     "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png ",
  //     {
  //       attribution:
  //         '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //     }
  //   ).addTo(this.map);
  //   this.dataService.getHeatmap1().subscribe(
  //     res => {
  //       if (value != "delete") {
  //         this.sensorList = res.data;

  //         var e = this.sensorList;
  //         //console.log(e[0].sensor_list);

  //         this.lat = e[value].sensor_list.map(function(x) {
  //           const pf = n => Number(parseFloat(n).toFixed(6));
  //           return pf(x.Latitude);
  //         });

  //         this.lng = e[value].sensor_list.map(function(x) {
  //           const pf = n => Number(parseFloat(n).toFixed(6));
  //           return pf(x.Longitude);
  //         });

  //         this.temp = e[value].sensor_list.map(function(x) {
  //           const pf = n => Number(parseFloat(n).toFixed(6));
  //           return pf(x.Temperature);
  //         });

  //         for (let i = 0; i < this.lat.length; i++) {
  //           this.coordinates.push([this.lat[i], this.lng[i]]);
  //         }

  //         for (let i = 0; i < this.lat.length; i++) {
  //           if (this.temp[i] > 26.7) {
  //             var sensor = L.circle(this.coordinates[i], 50, {
  //               weight: 0,
  //               fillColor: "#B22222",
  //               fillOpacity: 0.3
  //             });
  //             this.sensors.push(sensor);
  //           } else if (this.temp[i] < 26.7) {
  //             var sensor = L.circle(this.coordinates[i], 50, {
  //               weight: 0,
  //               fillColor: "#40E0D0",
  //               fillOpacity: 0.3
  //             });
  //             this.sensors.push(sensor);
  //           }
  //         }

  //         sensor = [];

  //         this.featureGroup = L.featureGroup(this.sensors).addTo(this.map);
  //         this.map.fitBounds(this.featureGroup.getBounds(), {
  //           padding: [50, 50]
  //         });
  //       } else {
  //         this.map.removeLayer(this.featureGroup);
  //         e = [];
  //         this.sensorList = [];
  //         this.lat = [];
  //         this.lng = [];
  //         this.temp = [];
  //         this.coordinates = [];
  //         this.sensors = [];
  //         this.featureGroup = [];
  //       }
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

  // genHeatmap2(value) {
  //   L.tileLayer(
  //     "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png ",
  //     {
  //       attribution:
  //         '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //     }
  //   ).addTo(this.map);
  //   this.dataService.getHeatmap2().subscribe(
  //     res => {
  //       if (value != "delete") {
  //         this.sensorList = res.data;

  //         var e = this.sensorList;

  //         this.lat = e[value].sensor_list.map(function(x) {
  //           const pf = n => Number(parseFloat(n).toFixed(6));
  //           return pf(x.latitude);
  //         });

  //         this.lng = e[value].sensor_list.map(function(x) {
  //           const pf = n => Number(parseFloat(n).toFixed(6));
  //           return pf(x.longitude);
  //         });

  //         this.temp = e[value].sensor_list.map(function(x) {
  //           const pf = n => Number(parseFloat(n).toFixed(6));
  //           return pf(x.temperature);
  //         });

  //         for (let i = 0; i < this.lat.length; i++) {
  //           this.coordinates.push([this.lat[i], this.lng[i]]);
  //         }

  //         for (let i = 0; i < this.lat.length; i++) {
  //           if (this.temp[i] > 26.7) {
  //             var sensor = L.circle(this.coordinates[i], 50, {
  //               weight: 0,
  //               fillColor: "#B22222",
  //               fillOpacity: 0.3
  //             });
  //             this.sensors.push(sensor);
  //           } else if (this.temp[i] < 26.7) {
  //             var sensor = L.circle(this.coordinates[i], 50, {
  //               weight: 0,
  //               fillColor: "#40E0D0",
  //               fillOpacity: 0.3
  //             });
  //             this.sensors.push(sensor);
  //           }
  //         }

  //         this.featureGroup = L.featureGroup(this.sensors).addTo(this.map);
  //         this.map.fitBounds(this.featureGroup.getBounds(), {
  //           padding: [50, 50]
  //         });
  //       } else {
  //         this.map.removeLayer(this.featureGroup);
  //         e = [];
  //         this.sensorList = [];
  //         this.lat = [];
  //         this.lng = [];
  //         this.temp = [];
  //         this.coordinates = [];
  //         this.sensors = [];
  //         this.featureGroup = [];
  //       }
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

  genHeatmap3(value) {
    L.tileLayer(
      "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png ",
      {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);
    this.dataService.getHeatmap3().subscribe(
      res => {
        if (value != "delete") {
          this.sensorList = res.data;

          var e = this.sensorList;

          this.lat = e[value].sensor_list.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return pf(x.latitude);
          });

          this.lng = e[value].sensor_list.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return pf(x.longitude);
          });

          this.temp = e[value].sensor_list.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return pf(x.temperature);
          });

          for (let i = 0; i < this.lat.length; i++) {
            this.coordinates.push([this.lat[i], this.lng[i]]);
          }

          for (let i = 0; i < this.lat.length; i++) {
            if (this.temp[i] > 26.7) {
              var sensor = L.circle(this.coordinates[i], 50, {
                weight: 0,
                fillColor: "#B22222",
                fillOpacity: 0.3
              });
              this.sensors.push(sensor);
            } else if (this.temp[i] < 26.7) {
              var sensor = L.circle(this.coordinates[i], 50, {
                weight: 0,
                fillColor: "#40E0D0",
                fillOpacity: 0.3
              });
              this.sensors.push(sensor);
            }
          }

          this.featureGroup = L.featureGroup(this.sensors).addTo(this.map);
          this.map.fitBounds(this.featureGroup.getBounds(), {
            padding: [50, 50]
          });
        } else {
          this.map.removeLayer(this.featureGroup);
          e = [];
          this.sensorList = [];
          this.lat = [];
          this.lng = [];
          this.temp = [];
          this.coordinates = [];
          this.sensors = [];
          this.featureGroup = [];
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
