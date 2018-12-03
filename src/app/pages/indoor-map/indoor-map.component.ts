import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/data.service";
import * as Plotly from "plotly.js/dist/plotly.js";
import { coerceNumberProperty } from "@angular/cdk/coercion";

declare let $;

@Component({
  selector: "app-indoor-map",
  templateUrl: "./indoor-map.component.html",
  styleUrls: ["./indoor-map.component.scss"]
})
export class IndoorMapComponent implements OnInit {
  HEATMAP_MAX: number = 40;
  HEATMAP_MIN: number = 12;
  coordinates: any = [];
  temp: any = [];
  coorx: any = [];
  coory: any = [];
  dates: any = [];
  cs: any;
  layout: any;
  kord: any;
  test: any;

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

  get tickInterval(): number | "auto" {
    return this.showTicks ? (this.autoTicks ? "auto" : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getDataIndoor().subscribe(data => {
      var size = Object.keys(data.data).length;
      console.log(size);
      this.max = size - 1;
      this.test = data.data[0].date_updated;
      data = data.data[0];
      this.coordinates = data.sensor_list;

      for (let i = 0; i <= 143; i++) {
        this.coorx.push(this.coordinates[i].x_pos);
        this.coory.push(this.coordinates[i].y_pos);
        this.temp.push(this.coordinates[i].temp);
      }

      this.cs = [
        [0, "rgba(255,255,255,0)"],
        [0.125, "rgb(0,60,170)"],
        [0.375, "rgb(5,255,255)"],
        [0.625, "rgb(255,255,0)"],
        [0.875, "rgb(250,0,0)"],
        [1, "rgb(128,0,0)"]
      ];

      this.kord = {
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
      Plotly.plot("map", [this.kord], this.layout);
    });
  }

  update(value) {
    this.data.getDataIndoor().subscribe(data => {
      var size = Object.keys(data).length;
      for (let i = 0; i <= size; i++) {
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

      this.kord = {
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
      Plotly.redraw("map", [this.kord], [0]);
    });
  }
}
