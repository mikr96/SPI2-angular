import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/data.service";
import { Chart } from "src/assets/libs/chart.js/dist/Chart.min.js"; //import chart library

declare var $: any; //Enable JQuery-ing
declare let L; //Enable map declaration

@Component({
  selector: "app-outdoor-map",
  templateUrl: "./outdoor-map.component.html",
  styleUrls: ["./outdoor-map.component.scss"]
})
export class OutdoorMapComponent implements OnInit {
  checked = false; //unchecked checkbox
  /* VARIABLE DECLARATION */
  sensorList: any = [];
  dataDateArr: any = []; //Store dates in array
  dataPathArr: any = []; //Store path in array
  coordArr: any = []; //Store coordinates in array
  tempArr: any = []; //Store temperature in array
  dataTimeArr: any = []; //Store time in array
  dataDate: any = []; //Store object date
  dataPath: any = []; //Store object path
  dataTime: any = []; //Store object time
  dateSelect: any; //Store user's date selection
  addressPoints: any = [];
  map: any; //map declaration
  chart = []; //chart declaration
  statusHeatmap: boolean = false;
  heat: any;
  featureGroup: any;
  sensorpath: any = [];
  lat: any = []; //latitude
  lng: any = []; //longitude
  temp: any = []; //temperature
  marker: any; //1 marker
  firstpolyline: any; //path line
  markers: any = []; //markers
  coordinates: any = [];
  pathSelection: any; //Store user's path selection
  pathId: any = []; //Path id
  alert: boolean = false;
  show: boolean = false;
  i = true;
  k: boolean;

  //temporary variable
  //the final data will not be stored in these variables. They are just temporaries
  temp2: any = [];
  temp3: any = [];
  temp4: any = [];

  constructor(private dataService: DataService) {}

  /* Runs on page initialize */
  ngOnInit() {
    this.k = true;

    //map initialization
    this.map = L.map("map").setView([2.920282, 101.641747], 12);
    var tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    // init path selection
    this.dataService.getPath().subscribe(res => {
      this.dataPath = res.data;
      var size = Object.keys(this.dataPath).length;
      for (let i = 0; i < size; i++) {
        this.dataPathArr[i] = this.dataPath[i].path_desc;
      }
    });

    //scroll down animation, triggers after user click button 'scroll'
    $("div").on("click", ".scroll-down-button", function() {
      $("html, body").animate(
        {
          scrollTop: $("#section-chart").offset().top
        },
        800
      );
    });

    $(window).bind("mousewheel", function() {
      $("html, body").stop();
    });
  }

  /* Function triggers after user select path */
  onPathChange(value) {
    this.pathSelection = value;

    //Zoom out map
    if (this.map.getZoom() > 11) {
      this.map.setZoom(12);
    }

    //Re-initialize variables to avoid any data redundance
    this.dataDateArr = [];
    this.dataTimeArr = [];
    this.temp4 = [];
    this.coordArr = [];
    this.clear();

    //reset date and time selection
    $("#date_selection").val("");
    $("#time_selection").val("");

    //path selection
    if (this.pathSelection == "Test Path") {
      $("#alert").hide();
      this.pathId = 1;

      // init date selection data
      this.dataService.getSensorList(this.pathId).subscribe(res => {
        this.initializeDate(res);
      });
    } else if (this.pathSelection == "C026 To DP") {
      $("#alert").hide();
      this.pathId = 2;

      // init date selection data
      this.dataService.getSensorList(this.pathId).subscribe(res => {
        this.initializeDate(res);
      });
    } else if (this.pathSelection == "TM R&D To CBJ2 Exchange") {
      this.pathId = 3;
      $("#alert").show();
      // init date selection data
      this.dataService.getSensorList(this.pathId).subscribe(res => {
        this.initializeDate(res);
        this.getAlert(res);
      });
    } else if (this.pathSelection == "CBJ2 Exchange To FDC") {
      this.pathId = 4;

      $("#alert").show();

      // init date selection data
      this.dataService.getSensorList(this.pathId).subscribe(res => {
        this.initializeDate(res);
        this.getAlert(res);
      });
    } else if (this.pathSelection == "FDC (C007) to DP36 Putra Perdana") {
      $("#alert").hide();
      this.pathId = 5;

      // init date selection data
      this.dataService.getSensorList(this.pathId).subscribe(res => {
        this.initializeDate(res);
      });
    }
  }

  //init date list
  initializeDate(res) {
    this.dataDate = res.data;
    var size = Object.keys(this.dataDate).length; //getting size of the object

    /* This line of codes are mainly to ignore any date redundance */
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
  }

  //get latest alert
  getAlert(res) {
    this.dataPath = res.data;
    var size = Object.keys(this.dataPath).length;
    this.temp4 = this.dataPath[size - 1].sensor_list;
    var size = Object.keys(this.temp4).length;
    for (let i = 0; i < size; i++) {
      if (this.temp4[i].temperature >= 10) {
        this.coordArr.push([this.temp4[i].latitude, this.temp4[i].longitude]);
      }
    }
    if (this.coordArr == "") {
      this.alert = true;
    }
  }

  /* Function triggers after user select date */
  onDateChange(value) {
    //reinitialize variables to avoid any data redundance
    this.dateSelect = [];
    this.dataTimeArr = [];
    this.clear();
    //reset time selection
    $("#time_selection").val("");

    this.dateSelect = value;
    this.dataService.getTimeDate(value, this.pathId).subscribe(res => {
      this.dataTime = res.data;
      var size = Object.keys(this.dataTime).length;
      //list out time
      for (let i = 0; i < size; i++) {
        this.dataTimeArr.push(this.dataTime[i].str_time_updated);
      }
    });
  }

  /* Function triggers after user select time */
  onTimeChange(value) {
    this.show = false;
    if (this.pathId == 3 || this.pathId == 4) {
      this.checked = false;
      this.genAlert(this.dateSelect, value, this.pathId); //alert function
    } else {
      this.checked = false;
      this.genHeatmap(this.dateSelect, value, this.pathId); //heatmap function
    }
  }

  /* Function triggers after user checked show sensor checkbox */
  //Markers display
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
    $("#sensor_status").show(); //display checkbox
    this.statusHeatmap = !this.statusHeatmap;
    var valuedate = val1;
    var valuetime = val2;
    var valuepath = val3;

    //map re-initialize
    var tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    //Reset map by removing any heat layer
    if (
      $(".leaflet-overlay-pane")
        .children()
        .hasClass("leaflet-heatmap-layer")
    ) {
      this.map.removeLayer(this.heat);
    }

    //re initialize variables to avoid data redundance
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

    var colorGrad;

    this.dataService.getSensorList(valuepath).subscribe(
      res => {
        //set icon markers
        var greenIcon = L.icon({
          iconUrl: "../assets/images/greenIcon.svg",
          iconSize: [24, 24], // size of the icon
          iconAnchor: [10, 20] // point of the icon which will correspond to marker's location
          //popupAnchor: [12, 0]
        });
        //set icon markers
        var redIcon = L.icon({
          iconUrl: "../assets/images/redIcon.svg",
          iconSize: [24, 24], // size of the icon
          iconAnchor: [10, 20] // point of the icon which will correspond to marker's location
          //popupAnchor: [12, 0]
        });

        this.sensorList = res.data;
        var size = Object.keys(this.sensorList).length; //getting size of the object

        //initialize x-axis graph -> time
        for (var i = 0; i < size; i++) {
          if (this.sensorList[i].date_updated == valuedate) {
            time.push(this.sensorList[i].str_time_updated);
            temp5.push(this.sensorList[i]);
          }
        }

        //filter date and time
        for (var i = 0; i < size; i++) {
          if (
            this.sensorList[i].date_updated == valuedate &&
            this.sensorList[i].str_time_updated == valuetime
          ) {
            this.temp3.push(this.sensorList[i]);
          }
        }

        var g = this.temp3;
        var e = g[0].sensor_list;
        this.lat = g[0].sensor_list.map(e => e.latitude); //initialize latitude

        this.lng = g[0].sensor_list.map(e => e.longitude); //initialize longitude

        //initialize coordinates
        this.coordinates = g[0].sensor_list.map(e => {
          return [e.latitude, e.longitude];
        });

        this.addressPoints = e.map(function(x) {
          const pf = n => Number(parseFloat(n).toFixed(6));
          return [pf(x.latitude), pf(x.longitude), pf(x.temperature / 100)];
        });

        /* Marker Popup Content */
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
            .on("mousemove", function(e) {
              e.target.setIcon(redIcon);
            })
            .on("mouseout", function(e) {
              e.target.setIcon(greenIcon);
            })
            .bindPopup(html)
            .on("mousedown", onClick);
          this.markers.push(marker);
        }

        /* Generate path line */
        this.firstpolyline = new L.polyline(this.coordinates, {
          color: "red",
          weight: 7,
          opacity: 0.7,
          lineCap: "square",
          lineJoin: "round"
        });

        /* Function triggers after user click any markers */
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

          //Setting CSV file content
          const rows = [[date], [time], [temp]];
          let csvContent = "data:text/csv;charset=utf-8,";
          rows.forEach(function(rowArray) {
            let row = rowArray.join(",");
            csvContent += row + "\r\n";
          });

          //Appending CSV download link to the button
          var encodedUri = encodeURI(csvContent);
          var link = document.getElementById("a");
          link.setAttribute("href", encodedUri);
          link.setAttribute("download", "my_data.csv");
          link.setAttribute("type", "button");

          //Display chart and download buttons
          $("#section-chart").show();
          $("#btn").show();
          $("#a").show();

          //init chart
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
                text: "Temperature vs Time"
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
                      labelString: "Temperature (Degree C)"
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

        //setting pointer's position at every average temperature
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

        //append css
        $("#tempScale").css("margin-top", "15px");
        //display div
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
          "<span> " + (avgIntensity * 100).toFixed(1) + " degC</span>"
        );

        //add path line
        this.firstpolyline.addTo(this.map);
        //add markers
        this.featureGroup = L.featureGroup(this.markers).addTo(this.map);
        //zoom in map
        this.map.fitBounds(this.featureGroup.getBounds(), {
          padding: [50, 50]
        });

        $(".leaflet-interactive").css("stroke-opacity", "0");
        $(".leaflet-marker-pane").css("display", "none");
        //display heatmap
        this.heat = L.heatLayer(this.addressPoints, {
          radius: 40,
          gradient: {
            "0": colorGrad,
            "1": colorGrad
          }
        }).addTo(this.map);

        $(".leaflet-heatmap-layer").css("opacity", "0.8");

        $(".scroll-down-button").click(function() {
          console.log("scroll");
          $("html, body").animate(
            {
              scrollTop: $("#section-chart").offset().top
            },
            800
          );
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  genAlert(val1, val2, val3) {
    this.statusHeatmap = !this.statusHeatmap;
    var valuedate = val1;
    var valuetime = val2;
    var valuepath = val3;

    //re-initialize map
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
    this.firstpolyline = [];
    this.featureGroup = [];
    this.markers = [];

    this.dataService.getSensorList(valuepath).subscribe(res => {
      //set marker icons
      var greenIcon = L.icon({
        iconUrl: "../assets/images/greenIcon.svg",
        iconSize: [24, 24], // size of the icon
        iconAnchor: [10, 20] // point of the icon which will correspond to marker's location
        //popupAnchor: [12, 0]
      });
      //set marker icons
      var redIcon = L.icon({
        iconUrl: "../assets/images/redIcon.svg",
        iconSize: [24, 24], // size of the icon
        iconAnchor: [10, 20] // point of the icon which will correspond to marker's location
        //popupAnchor: [12, 0]
      });

      this.sensorList = res.data;
      var size = Object.keys(this.sensorList).length;

      //filter data with date and time selection
      for (var i = 0; i < size; i++) {
        if (
          this.sensorList[i].date_updated == valuedate &&
          this.sensorList[i].str_time_updated == valuetime
        ) {
          this.temp3.push(this.sensorList[i]);
        }
      }

      var g = this.temp3;
      var e = g[0].sensor_list;
      var size = Object.keys(e).length;

      //filter latitude and longitude if temperature above 10 degree
      for (var i = 0; i < size; i++) {
        if (e[i].temperature > 10) {
          this.lat.push(e[i].latitude);
          this.lng.push(e[i].longitude);
        }
      }

      //filter coordinates if temperature above 10 degree
      for (var i = 0; i < size; i++) {
        if (e[i].temperature > 10) {
          this.coordinates.push([e[i].latitude, e[i].longitude]);
        }
      }

      //Marker Popup Content
      var html = "";
      if (this.lat == "") {
        $("#sensor_status").hide();
        this.show = true;
      } else {
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

        //create path line
        this.firstpolyline = new L.polyline(this.coordinates, {
          color: "red",
          weight: 7,
          opacity: 0.7,
          lineCap: "square",
          lineJoin: "round"
        });

        //add path line
        this.firstpolyline.addTo(this.map);
        //add markers
        this.featureGroup = L.featureGroup(this.markers).addTo(this.map);
        //zoom in markers
        this.map.fitBounds(this.featureGroup.getBounds(), {
          padding: [50, 50]
        });
        $("#sensor_status").show();
        $(".leaflet-interactive").css("stroke-opacity", "0");
        $(".leaflet-marker-pane").css("display", "none");
      }
    });
  }

  /* Function triggers after user click button 'view' */
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
      //remove any layer on top of the map
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

      //Marker popup content
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
      //map re initialize
      L.tileLayer(
        "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }
      ).addTo(this.map);
      //Marker popup content
      var html =
        "<strong> Latitude:" +
        val1 +
        "</strong><br/><strong> Longitude:" +
        val2 +
        "</strong><br/><br/><br />";
      //create marker
      this.marker = L.marker([val1, val2], {
        icon: redIcon
      })
        .bindPopup(html)
        .addTo(this.map)
        .openPopup();
      this.i = true;
    }
  }

  /* Function triggers after user click button 'jpeg' */
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

  /* CLEAR FUNCTIONS */
  // Reset all variable
  // Reset everything
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
    this.checked = false;
    this.show = false;
  }
}
