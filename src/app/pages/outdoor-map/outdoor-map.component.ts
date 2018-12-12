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
  dataDateArr: any = [];
  dataPathArr: any = [];
  coordArr: any = [];
  dataDate: any = [];
  dataPath: any = [];
  dateSelect: any;
  dataDateTime: any = [];
  dataTimeArr: any = [];
  addressPoints: any = [];
  map: any;
  statusHeatmap: boolean = false;
  statusHeatmap2: boolean = false;
  statusSensorList: boolean = false;
  alertStatus: boolean = false;
  heat: any;
  featureGroup: any;
  sensorpath: any = [];
  testLat: any = [];
  testLng: any = [];
  lat: any = [];
  lng: any = [];
  marker: any;
  firstpolyline: any;
  markers: any = [];
  coordinates: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.map = L.map("map").setView([2.920282, 101.641747], 12);
    var tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    $(".col-sm-6 button").click(function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(".col-sm-6 button").removeClass("active");
        $(this).addClass("active");
      }
    });

    $("#sensorSelect").change(function() {
      //console.log("hello");
    });

    // init date selection data
    this.dataService.getDataDate().subscribe(res => {
      this.dataDate = res.data;

      this.dataDateArr = this.dataDate;
      //console.log(this.dataDateArr[0].str_date_updated);

      this.dataService
        .getTimeDate(this.dataDateArr[0].str_date_updated)
        .subscribe(res => {
          this.dataDateTime = res.data;

          this.dataTimeArr = this.dataDateTime;
          //console.log(this.dataTimeArr);
        });
    });

    // init path selection
    this.dataService.getPath().subscribe(res => {
      this.dataPath = res.data;
      var size = Object.keys(this.dataPath).length;
      for (let i = 0; i < size; i++) {
        this.dataPathArr[i] = this.dataPath[i].path;
      }
      var testArr = this.dataPath[0].coordinate;

      // var lat: any = ([] = testArr.map(function(x) {
      //   const pf = n => Number(parseFloat(n).toFixed(6));
      //   return pf(x.latitude);
      // }));

      // var lng: any = ([] = testArr.map(function(x) {
      //   const pf = n => Number(parseFloat(n).toFixed(6));
      //   return pf(x.longitude);
      // }));

      this.coordArr = testArr.map(function(x) {
        const pf = n => Number(parseFloat(n).toFixed(6));
        return [pf(x.latitude), pf(x.longitude)];
      });

      //console.log(this.coordArr);
    });

    // alert($("div.main-section").hasClass("draw-in"));
  }

  onDateChange(value) {
    if (
      $(".leaflet-overlay-pane")
        .children()
        .hasClass("leaflet-heatmap-layer")
    ) {
      this.map.removeLayer(this.heat);
      $("#tempScale").hide();
      $("#tempPointer").hide();
    }

    console.log("date" + value);
    this.dateSelect = value;
    this.dataService.getTimeDate(value).subscribe(res => {
      this.dataDateTime = res.data;

      this.dataTimeArr = this.dataDateTime;
      console.log(this.dataTimeArr);
    });
  }

  onTimeChange(value) {
    console.log("time" + value);
    console.log("date" + this.dateSelect);

    // var arg;
    // if (value == '04:35:00') {
    //   arg = 1;
    // } else {
    //   arg = 2;
    // }

    this.genHeatmap(this.dateSelect, value);
  }

  onPathChange(value) {
    this.genPath(value);
  }

  genHeatmap(val1, val2) {
    this.statusHeatmap = !this.statusHeatmap;
    var valuedate = val1;
    var valuetime = val2;

    var tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    if (
      $(".leaflet-overlay-pane")
        .children()
        .hasClass("leaflet-heatmap-layer")
    ) {
      this.map.removeLayer(this.heat);
    }

    var colorGrad;

    this.dataService.getSensorList(valuedate, valuetime).subscribe(
      res => {
        this.sensorList = res.data;

        //console.log(res.data);
        var g = this.sensorList;
        var e = g[0].sensor_list;
        //console.log(g);

        this.addressPoints = e.map(function(x) {
          const pf = n => Number(parseFloat(n).toFixed(6));
          return [pf(x.latitude), pf(x.longitude), pf(x.temperature / 100)];
        });

        const avgIntensity =
          e.map(x => x.temperature).reduce((a, c) => a + c, 0) /
          (e.length * 100);
        //console.log(avgIntensity);

        let arrowPosition;

        if (avgIntensity >= 0.2 && avgIntensity < 0.21) {
          colorGrad = "#48d1cc";
          arrowPosition = 0;
        } else if (avgIntensity >= 0.21 && avgIntensity < 0.22) {
          colorGrad = "#6fd6be";
          arrowPosition = 5;
        } else if (avgIntensity >= 0.22 && avgIntensity < 0.23) {
          colorGrad = "#89dab0";
          arrowPosition = 10;
        } else if (avgIntensity >= 0.23 && avgIntensity < 0.24) {
          colorGrad = "#9fdfa1";
          arrowPosition = 15;
        } else if (avgIntensity >= 0.24 && avgIntensity < 0.25) {
          colorGrad = "#b1e492";
          arrowPosition = 20;
        } else if (avgIntensity >= 0.25 && avgIntensity < 0.26) {
          colorGrad = "#c2e982";
          arrowPosition = 25;
        } else if (avgIntensity >= 0.26 && avgIntensity < 0.27) {
          colorGrad = "#d1ee71";
          arrowPosition = 30;
        } else if (avgIntensity >= 0.27 && avgIntensity < 0.28) {
          colorGrad = "#dff25e";
          arrowPosition = 35;
        } else if (avgIntensity >= 0.28 && avgIntensity < 0.29) {
          colorGrad = "#ecf747";
          arrowPosition = 40;
        } else if (avgIntensity >= 0.29 && avgIntensity < 0.3) {
          colorGrad = "#f9fc27";
          arrowPosition = 45;
        } else if (avgIntensity >= 0.3 && avgIntensity < 0.31) {
          colorGrad = "#fff510";
          arrowPosition = 50;
        } else if (avgIntensity >= 0.31 && avgIntensity < 0.32) {
          colorGrad = "#fde021";
          arrowPosition = 55;
        } else if (avgIntensity >= 0.32 && avgIntensity < 0.33) {
          colorGrad = "#fccc2a";
          arrowPosition = 60;
        } else if (avgIntensity >= 0.33 && avgIntensity < 0.34) {
          colorGrad = "#f9b730";
          arrowPosition = 65;
        } else if (avgIntensity >= 0.34 && avgIntensity < 0.35) {
          colorGrad = "#f6a235";
          arrowPosition = 70;
        } else if (avgIntensity >= 0.35 && avgIntensity < 0.36) {
          colorGrad = "#f28d38";
          arrowPosition = 75;
        } else if (avgIntensity >= 0.36 && avgIntensity < 0.37) {
          colorGrad = "#ed773a";
          arrowPosition = 80;
        } else if (avgIntensity >= 0.37 && avgIntensity < 0.38) {
          colorGrad = "#e85e3b";
          arrowPosition = 85;
        } else if (avgIntensity >= 0.38 && avgIntensity < 0.39) {
          colorGrad = "#e2423c";
          arrowPosition = 90;
        } else if (avgIntensity >= 0.39 && avgIntensity < 0.4) {
          colorGrad = "#dc143c";
          arrowPosition = 100;
        }

        $("#tempScale").show();
        $("#tempPointer").show();

        $(
          "<style>.arrow:after { left: " +
            arrowPosition +
            "% !important; content: ' '; }</style>"
        ).appendTo("#tempPointer");

        $("#tempPointer p")
          .children()
          .remove();
        $("#tempPointer p").append(
          "<span> " + (avgIntensity * 100).toFixed(2) + " degC</span>"
        );

        this.heat = L.heatLayer(this.addressPoints, {
          radius: 40,
          gradient: {
            "0": colorGrad,
            "1": colorGrad
          }
        }).addTo(this.map);

        $(".leaflet-heatmap-layer").css("opacity", "0.8");
      },
      err => {
        console.log(err);
      }
    );
  }

  genPath(val) {
    this.statusSensorList = !this.statusSensorList;

    L.tileLayer(
      "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    if (
      $(".leaflet-overlay-pane")
        .children()
        .hasClass("leaflet-zoom-animated")
    ) {
      this.map.removeLayer(this.firstpolyline);
      this.statusSensorList = true;
    }

    if (
      $(".leaflet-marker-pane")
        .children()
        .hasClass("leaflet-marker-icon")
    ) {
      this.map.removeLayer(this.featureGroup);
      this.lat = [];
      this.lng = [];
      this.coordinates = [];
      this.markers = [];
      this.statusSensorList = true;
    }

    if (this.statusSensorList) {
      this.dataService.getPath().subscribe(
        res => {
          var greenIcon = L.icon({
            iconUrl: "src/assets/images/greenIcon.svg",
            iconSize: [24, 24], // size of the icon
            iconAnchor: [12.5, 12.5] // point of the icon which will correspond to marker's location
            //popupAnchor: [12, 0]
          });

          var redIcon = L.icon({
            iconUrl: "src/assets/images/redIcon.svg",
            iconSize: [24, 24], // size of the icon
            iconAnchor: [12.5, 12.5] // point of the icon which will correspond to marker's location
            //popupAnchor: [12, 0]
          });

          if (val == "TMRnD to CBJ2") {
            val = 0;
          } else if (val == "CBJ2 to FDC") {
            val = 1;
          } else if (val == "C026") {
            val = 2;
          }

          this.dataPath = res.data;
          var e = this.dataPath[val].coordinate;

          this.coordArr = e.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return [pf(x.latitude), pf(x.longitude)];
          });

          this.lat = e.map(function(x) {
            const pf = n => Number(parseFloat(n).toFixed(6));
            return pf(x.latitude);
          });

          this.lng = e.map(function(x) {
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
              .on("mousemove", function(e) {
                e.target.setIcon(redIcon);
              })
              .on("mouseout", function(e) {
                e.target.setIcon(greenIcon);
              })
              .bindPopup(html);
            this.markers.push(marker);
          }

          this.firstpolyline = new L.polyline(this.coordArr, {
            color: "red",
            weight: 7,
            opacity: 0.7,
            lineCap: "square",
            lineJoin: "round"
          });

          this.firstpolyline.addTo(this.map);
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
      this.map.removeLayer(this.firstpolyline);
      this.map.removeLayer(this.featureGroup);
    }
  }

  viewPoint(val1, val2) {
    if ($(".main-section").hasClass("draw-in")) {
      console.log("test");
      $(".absolute").css({
        width: "calc(100% - 600px)",
        "margin-left": "300px",
        transition: "margin-left .5s"
      });
    }

    this.alertStatus = !this.alertStatus;

    if (this.alertStatus) {
      var redIcon = L.icon({
        iconUrl: "src/assets/images/redIcon.svg",
        iconSize: [24, 24], // size of the icon
        iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
        popupAnchor: [12, 0]
      });

      var html =
        "<strong> Latitude:" +
        val1 +
        "</strong><br/><strong> Longitude:" +
        val2 +
        "</strong><br/>";
      this.marker = L.marker([val1, val2], {
        icon: redIcon
      })
        .bindPopup(html)
        .addTo(this.map)
        .openPopup();

      // var featureGroup = L.featureGroup(this.marker).addTo(this.map);
      // this.map.fitBounds(featureGroup.getBounds(), {
      //   padding: [10, 10]
      // });
    } else {
      this.map.removeLayer(this.marker);
    }
  }

  clear() {
    this.lat = [];
    this.lng = [];
    this.coordinates = [];
    this.markers = [];
    this.map.removeLayer(this.firstpolyline);
    this.map.removeLayer(this.featureGroup);
  }
}
