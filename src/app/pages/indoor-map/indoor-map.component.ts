//In delivering the indoor map component, Plotly library have been used to create the graph for heat distribution along with a dynamic slider that triggers heat visualization

import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/data.service";
import * as Plotly from "src/assets/libs/plotly.js/dist/plotly.min.js"; //Plotly library
import { coerceNumberProperty } from "@angular/cdk/coercion"; //Slider property

@Component({
  selector: "app-indoor-map",
  templateUrl: "./indoor-map.component.html",
  styleUrls: ["./indoor-map.component.scss"]
})
export class IndoorMapComponent implements OnInit {
  HEATMAP_MAX: number = 40; //initializing max heat scale
  HEATMAP_MIN: number = 12; //initializing min heat scale

  /* CREATE VARIABLES */
  coordinates: any = []; //
  coorx: any = []; //X-axis coordinates
  coory: any = []; //Y-axis coordinates
  temp: any = []; //Z-axis coordinates
  dates: any = []; //dates for each slider interval
  cs: any; //Heat colour scheme
  layout: any; //Graph layout variable
  graph: any; //Graph data
  test: any;

  /* SLIDER PROPERTIES */
  autoTicks = false;
  disabled = false;
  invert = false;
  max: any;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  /* Getting input for slider */
  get tickInterval(): number | "auto" {
    return this.showTicks ? (this.autoTicks ? "auto" : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;

  constructor(private data: DataService) {}

  /* Runs When Page Initialize */
  ngOnInit() {
    this.data.getDataIndoor().subscribe(data => {
      this.max = Object.keys(data.data).length; //sets max interval
      this.test = data.data[0].date_updated; //display dates
      data = data.data[0];
      this.coordinates = data.sensor_list; //setting the coordinates at the right path in the API
      //console.log(this.coordinates) for more understanding

      for (let i = 0; i <= 143; i++) {
        this.coorx.push(this.coordinates[i].x_pos); //pushing the x-axis data from the coordinates into the coorx
        this.coory.push(this.coordinates[i].y_pos); //pushing the y-axis data from the coordinates into the coory
        this.temp.push(this.coordinates[i].temp); //pushing the Z-axis data from the coordinates into the temp
      }

      /* Initializing Colour Scale */
      this.cs = [
        [0, "rgba(255,255,255,0)"],
        [0.125, "rgb(0,60,170)"],
        [0.375, "rgb(5,255,255)"],
        [0.625, "rgb(255,255,0)"],
        [0.875, "rgb(250,0,0)"],
        [1, "rgb(128,0,0)"]
      ];

      /* Creating graph */
      this.graph = {
        x: this.coorx,
        y: this.coory,
        z: this.temp,
        zmin: this.HEATMAP_MIN,
        zmax: this.HEATMAP_MAX,
        zsmooth: "fast",
        type: "heatmap",
        colorscale: this.cs,
        showscale: true,
        opacity: 0.9
      };

      /* Creating layout */
      this.layout = {
        height: 800,
        images: [
          {
            source: "https://image.ibb.co/hSTLrV/server-room-layout-spi2.jpg",
            sizing: "stretch",
            layer: "below",
            xref: "x",
            yref: "y",
            x: -1.5,
            y: 13.3,
            sizex: 13.5,
            sizey: 14
          }
        ],
        xaxis: {
          range: [-1.5, 12],
          visible: false
        },
        yaxis: {
          range: [-1.5, 13.5],
          visible: false,
          scaleanchor: "x",
          scaleratio: 1
        },
        titlefont: { size: 35 },
        margin: { l: 10, r: 10, b: 10 }
      };

      /* Graph plotted */
      Plotly.plot("map", [this.graph], this.layout);
    });
  }

  /* This function only triggers when slider's value changed */
  /* It is mainly on re-draw the graph with a different time value */

  update(value) {
    this.data.getDataIndoor().subscribe(data => {
      var size = Object.keys(data.data).length;
      for (let i = 0; i < size; i++) {
        this.dates[i] = data.data[i].date_updated;
      }
      this.test = this.dates[value];

      data = data.data[value];
      this.coordinates = data.sensor_list;
      for (let i = 0; i <= 143; i++) {
        this.coorx.push(this.coordinates[i].x_pos);
        this.coory.push(this.coordinates[i].y_pos);
        this.temp.push(this.coordinates[i].temp);
      }

      this.graph = {
        x: this.coorx,
        y: this.coory,
        z: this.temp,
        zmin: this.HEATMAP_MIN,
        zmax: this.HEATMAP_MAX,
        zsmooth: "fast",
        type: "heatmap",
        colorscale: this.cs,
        showscale: true,
        opacity: 0.9
      };
      Plotly.redraw("map", [this.graph], [0]);
    });
  }
}
