import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/data.service";
import { Chart } from "src/libs/chart.js/dist/Chart.js";
import { html2canvas } from "src/libs/html2canvas/build/html2canvas.js";

declare var $: any;
declare let L;

@Component({
  selector: "app-outdoor-map",
  templateUrl: "./outdoor-map.component.html",
  styleUrls: ["./outdoor-map.component.scss"]
})
export class OutdoorMapComponent implements OnInit {
  checked = false;
  sensorList: any = [];
  dataDateArr: any = [];
  dataPathArr: any = [];
  coordArr: any = [];
  tempArr: any = [];
  dataDate: any = [];
  dataPath: any = [];
  dateSelect: any;
  dataDateTime: any = [];
  dataTimeArr: any = [];
  addressPoints: any = [];
  map: any;
  chart = [];
  statusHeatmap: boolean = false;
  heat: any;
  featureGroup: any;
  sensorpath: any = [];
  lat: any = [];
  lng: any = [];
  temp: any = [];
  marker: any;
  firstpolyline: any;
  markers: any = [];
  coordinates: any = [];
  pathSelection: any;
  pathId: any = [];

  //temporary variable
  temp2: any = [];
  temp3: any = [];
  temp4: any = [];
  i = true;
  k: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.k = true;

    this.map = L.map("map").setView([2.920282, 101.641747], 12);
    var tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    // $(".col-sm-6 button").click(function () {
    //   if ($(this).hasClass("active")) {
    //     $(this).removeClass("active");
    //   } else {
    //     $(".col-sm-6 button").removeClass("active");
    //     $(this).addClass("active");
    //   }
    // });

    // $("#sensorSelect").change(function () { });

    // init path selection
    this.dataService.getPath().subscribe(res => {
      this.dataPath = res.data;
      var size = Object.keys(this.dataPath).length;
      for (let i = 0; i < size; i++) {
        this.dataPathArr[i] = this.dataPath[i].path_desc;
      }
    });

    $("div").on("click", ".scroll-down-button", function () {
      // var elmnt = document.getElementById("canvas");
      // elmnt.scrollIntoView();
      $('html, body').animate({
        scrollTop: $('#section-chart').offset().top
      }, 800);
    });

    $(window).bind("mousewheel", function () {
      $("html, body").stop();
    });

    // $('.scroll-down-button').click(function () {

    //   console.log('scroll');
    //   $('html, body').animate({
    //     scrollTop: $('#section-chart').offset().top
    //   }, 800);
    // })
  }

  onPathChange(value) {

    this.pathSelection = value;

    if (this.map.getZoom() > 11) {
      this.map.setZoom(12);
    }

    this.dataDateArr = [];
    this.dataTimeArr = [];
    this.temp4 = [];
    this.coordArr = [];

    this.clear();

    $("#date_selection").val("");
    $("#time_selection").val("");

    //path selection
    if (this.pathSelection == "Test Path") {

      $('#alert').hide();
      this.pathId = 1;

      // init date selection data
      this.dataService.getSensorList(this.pathId).subscribe(res => {
        this.dataDate = res.data;
        var size = Object.keys(this.dataDate).length;
        var j = 0;
        var k = 0;
        for (let i = 0; i < size; i++) {
          if (i > 0) {
            k = j + i;
            if (this.dataDate[i].date_updated == this.dataDateArr[k - i]) {
              //kalau tarikh sama, move to next array
              continue;
            } else {
              j++;
              this.dataDateArr.push(this.dataDate[i].date_updated);
            }
          } else this.dataDateArr.push(this.dataDate[i].date_updated);
        }
      });

    } else if (this.pathSelection == "C026 To DP") {

      $('#alert').hide();
      this.pathId = 2;

      // init date selection data
      this.dataService.getSensorList(this.pathId).subscribe(res => {
        this.dataDate = res.data;
        var size = Object.keys(this.dataDate).length;

        var j = 0;
        var k = 0;
        for (let i = 0; i < size; i++) {
          if (i > 0) {
            k = j + i;
            if (this.dataDate[i].date_updated == this.dataDateArr[k - i]) {
              //kalau tarikh sama, move to next array
              continue;
            } else {
              j++;
              this.dataDateArr.push(this.dataDate[i].date_updated);
            }
          } else this.dataDateArr.push(this.dataDate[i].date_updated);
        }
      });
    } else if (this.pathSelection == "TM R&D To CBJ2 Exchange") {

      this.pathId = 3;
      $('#alert').show();
      // init date selection data
      this.dataService.getSensorList(this.pathId).subscribe(res => {
        this.dataPath = res.data;
        var size = Object.keys(this.dataPath).length;
        this.temp4 = this.dataPath[size - 1].sensor_list;
        var size = Object.keys(this.temp4).length;
        for (let i = 0; i < size; i++) {
          if (this.temp4[i].temperature >= 0) {
            this.coordArr.push([
              this.temp4[i].latitude,
              this.temp4[i].longitude
            ]);
          }
        }
      });

    } else if (this.pathSelection == "CBJ2 Exchange To FDC") {

      this.pathId = 4;

      $('#alert').show();

      // init date selection data
      this.dataService.getSensorList(this.pathId).subscribe(res => {
        this.dataPath = res.data;
        var size = Object.keys(this.dataPath).length;
        this.temp4 = this.dataPath[size - 1].sensor_list;
        var size = Object.keys(this.temp4).length;
        for (let i = 0; i < size; i++) {
          if (this.temp4[i].temperature >= 27) {
            this.coordArr.push([
              this.temp4[i].latitude,
              this.temp4[i].longitude
            ]);
          }
        }
      });

    } else if (this.pathSelection == "FDC (C007) to DP36 Putra Perdana") {

      $('#alert').hide();
      this.pathId = 5;

      // init date selection data
      this.dataService.getSensorList(this.pathId).subscribe(res => {
        this.dataDate = res.data;
        var size = Object.keys(this.dataDate).length;
        var j = 0;
        var k = 0;
        for (let i = 0; i < size; i++) {
          if (i > 0) {
            k = j + i;
            if (this.dataDate[i].date_updated == this.dataDateArr[k - i]) {
              //kalau tarikh sama, move to next array
              continue;
            } else {
              j++;
              this.dataDateArr.push(this.dataDate[i].date_updated);
            }
          } else this.dataDateArr.push(this.dataDate[i].date_updated);
        }
      });

    }
  }

  onDateChange(value) {
    this.dateSelect = [];
    this.dataTimeArr = [];
    this.clear();
    $("#time_selection").val("");

    this.dateSelect = value;
    this.dataService.getTimeDate(value, this.pathId).subscribe(res => {
      this.dataDateTime = res.data;
      var size = Object.keys(this.dataDateTime).length;
      for (let i = 0; i < size; i++) {
        this.dataTimeArr.push(this.dataDateTime[i].str_time_updated);
      }
    });
  }

  onTimeChange(value) {
    // console.log("time" + value);
    // console.log("date" + this.dateSelect);
    // console.log("path" + this.pathId);
    // $(".mat-checkbox-layout").css("display", "none");
    this.checked = false;

    this.genHeatmap(this.dateSelect, value, this.pathId);
  }

  onSensorChange(value) {
    if (value) {
      $(".leaflet-interactive").css("stroke-opacity", "0.8");
      $(".leaflet-marker-pane").css("display", "block");
    } else {
      $(".leaflet-interactive").css("stroke-opacity", "0");
      $(".leaflet-marker-pane").css("display", "none");
    }
  }

  genHeatmap(val1, val2, val3) {
    // console.log(this.pathId);
    // console.log(this.)

    $("#sensor_status").show();
    this.statusHeatmap = !this.statusHeatmap;
    var valuedate = val1;
    var valuetime = val2;
    var valuepath = val3;

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

    //re initialize variables
    this.sensorList = [];
    this.temp = [];
    this.temp2 = [];
    this.temp3 = [];
    this.lat = [];
    this.lng = [];
    this.coordinates = [];
    this.addressPoints = [];
    this.firstpolyline = [];
    this.chart = [];
    this.featureGroup = [];
    this.markers = [];
    let time = [];
    let temp = [];
    let temp5 = [];
    let date = this.dateSelect;
    //console.log(temp5);

    var colorGrad;

    this.dataService.getSensorList(valuepath).subscribe(
      res => {
        var greenIcon = L.icon({
          iconUrl: "../assets/images/greenIcon.svg",
          iconSize: [24, 24], // size of the icon
          iconAnchor: [10, 20] // point of the icon which will correspond to marker's location
          //popupAnchor: [12, 0]
        });

        var redIcon = L.icon({
          iconUrl: "../assets/images/redIcon.svg",
          iconSize: [24, 24], // size of the icon
          iconAnchor: [10, 20] // point of the icon which will correspond to marker's location
          //popupAnchor: [12, 0]
        });

        this.sensorList = res.data;
        console.log(this.sensorList);
        var size = Object.keys(this.sensorList).length;
        //console.log(size);

        //initialize x-axis graph -> time
        for (var i = 0; i < size; i++) {
          if (this.sensorList[i].date_updated == valuedate) {
            time.push(this.sensorList[i].str_time_updated);
            temp5.push(this.sensorList[i]);
          }
        }
        console.log(this.sensorList);

        for (var i = 0; i < size; i++) {
          if (
            this.sensorList[i].date_updated == valuedate &&
            this.sensorList[i].str_time_updated == valuetime
          ) {
            this.temp3.push(this.sensorList[i]);
          }
        }

        console.log(this.temp3);

        var g = this.temp3;
        var e = g[0].sensor_list;
        console.log(e);
        this.lat = g[0].sensor_list.map(e => e.latitude); //initialize latitude

        this.lng = g[0].sensor_list.map(e => e.longitude); //initialize longitude

        //initialize coordinates
        this.coordinates = g[0].sensor_list.map(e => {
          return [e.latitude, e.longitude];
        });

        this.addressPoints = e.map(function (x) {
          const pf = n => Number(parseFloat(n).toFixed(6));
          return [pf(x.latitude), pf(x.longitude), pf(x.temperature / 100)];
        });

        var html = "";

        for (let i = 0; i < this.lat.length; i++) {
          html =
            "<strong> Latitude:" +
            this.lat[i] +
            "</strong><br/><strong> Longitude:" +
            this.lng[i] +
            "</strong><br/>" +
            '<button type="button" class="btn scroll-down-button">Scroll</button>';
          var marker = L.marker(this.coordinates[i], {
            icon: greenIcon
          })
            .on("mousemove", function (e) {
              e.target.setIcon(redIcon);
            })
            .on("mouseout", function (e) {
              e.target.setIcon(greenIcon);
            })
            .bindPopup(html)
            .on("mousedown", onClick);
          this.markers.push(marker);
        }

        this.firstpolyline = new L.polyline(this.coordinates, {
          color: "red",
          weight: 7,
          opacity: 0.7,
          lineCap: "square",
          lineJoin: "round"
        });

        function onClick(e) {
          var size = Object.keys(temp5).length;
          for (let i = 0; i < size; i++) {
            var size2 = Object.keys(temp5[i].sensor_list).length;
            for (let j = 0; j < size2; j++) {
              if (
                e.latlng.lat == temp5[i].sensor_list[j].latitude &&
                e.latlng.lng == temp5[i].sensor_list[j].longitude
              )
                temp.push(temp5[i].sensor_list[j].temperature);
            }
          }

          const rows = [[date], [time], [temp]];
          let csvContent = "data:text/csv;charset=utf-8,";
          rows.forEach(function (rowArray) {
            let row = rowArray.join(",");
            csvContent += row + "\r\n";
          });

          var encodedUri = encodeURI(csvContent);
          var link = document.getElementById("a");
          link.setAttribute("href", encodedUri);
          link.setAttribute("download", "my_data.csv");
          link.setAttribute("type", "button");

          $("#section-chart").show();
          $("#btn").show();
          $("#a").show();

          this.chart = new Chart("canvas", {
            type: "line",
            data: {
              labels: time,
              datasets: [
                {
                  data: temp,
                  borderColor: "#3e95cd",
                  fill: false
                }
              ]
            },
            options: {
              title: {
                display: true,
                text: 'Temperature vs Time'
              },
              legend: {
                display: false
              },
              scales: {
                xAxes: [
                  {
                    display: true
                  }
                ],
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: 'Temperature (Degree C)'
                    }
                  }
                ]
              }
            }
          });
        }

        var avgIntensity =
          e.map(x => x.temperature).reduce((a, c) => a + c, 0) /
          (e.length * 100);

        let arrowPosition;

        // colorGrad = "#A9A9A9";
        // arrowPosition = 100;
        // avgIntensity = 0;

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

        $("#tempScale").css("margin-top", "15px");
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

        this.firstpolyline.addTo(this.map);
        this.featureGroup = L.featureGroup(this.markers).addTo(this.map);
        this.map.fitBounds(this.featureGroup.getBounds(), {
          padding: [50, 50]
        });

        $(".leaflet-interactive").css("stroke-opacity", "0");
        $(".leaflet-marker-pane").css("display", "none");
        this.heat = L.heatLayer(this.addressPoints, {
          radius: 40,
          gradient: {
            "0": colorGrad,
            "1": colorGrad
          }
        }).addTo(this.map);

        $(".leaflet-heatmap-layer").css("opacity", "0.8");

        $('.scroll-down-button').click(function () {

          console.log('scroll');
          $('html, body').animate({
            scrollTop: $('#section-chart').offset().top
          }, 800);
        })
      },
      err => {
        console.log(err);
      }
    );
  }

  // scrollDown() {
  //   $('html, body').animate({
  //     scrollTop: $('#section-chart').offset().top
  //   }, 800);
  // }

  viewPoint(val1, val2) {
    $(".leaflet-marker-pane").css("display", "block");
    $(".leaflet-popup-content-wrapper").css("display", "block");
    var redIcon = L.icon({
      iconUrl: "src/assets/images/redIcon.svg",
      iconSize: [24, 24], // size of the icon
      iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
      popupAnchor: [12, 0]
    });

    if (this.i) {
      if (!this.k) {
        this.map.removeLayer(this.marker);
      }
      L.tileLayer(
        "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }
      ).addTo(this.map);

      var html =
        "<strong> Latitude:" +
        val1 +
        "</strong><br/><strong> Longitude:" +
        val2 +
        "</strong><br/>________<br/>______<br />";
      this.marker = L.marker([val1, val2], {
        icon: redIcon
      })
        .bindPopup(html)
        .addTo(this.map)
        .openPopup();
      this.i = false;
    } else {
      this.map.removeLayer(this.marker);
      this.marker = [];
      this.k = false;
      L.tileLayer(
        "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }
      ).addTo(this.map);

      var html =
        "<strong> Latitude:" +
        val1 +
        "</strong><br/><strong> Longitude:" +
        val2 +
        "</strong><br/><br/><br />";
      this.marker = L.marker([val1, val2], {
        icon: redIcon
      })
        .bindPopup(html)
        .addTo(this.map)
        .openPopup();
      this.i = true;
    }
  }

  printThis() {
    let canvas = document.getElementById("canvas") as HTMLCanvasElement;
    var dataURL = canvas
      .toDataURL("image/jpeg", 1.0)
      .replace("image/jpeg", "image/octet-stream");

    var link = document.createElement("a");
    link.download = "my-image.png";
    link.href = dataURL;
    link.click();
  }

  clear() {
    if (
      $(".leaflet-overlay-pane")
        .children()
        .hasClass("leaflet-heatmap-layer")
    ) {
      this.map.removeLayer(this.heat);
      $("#tempScale").hide();
      $("#tempPointer").hide();
    }

    //remove layer marker
    if (!this.k) {
      this.map.removeLayer(this.marker);
    }

    this.chart = [];

    $(".leaflet-interactive").css("stroke-opacity", "0");
    $(".leaflet-marker-pane").css("display", "none");
    $(".leaflet-popup-content-wrapper").css("display", "none");
    $("#sensor_status").hide();
    // $(".mat-checkbox-layout").css("display", "none");
    this.checked = false;
  }
}
