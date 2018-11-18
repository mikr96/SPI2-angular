import { Component, OnInit } from "@angular/core";
import { PagesService } from "../pages.service";
import * as Plotly from "plotly.js/dist/plotly.js";

@Component({
  selector: "app-indoor-map",
  templateUrl: "./indoor-map.component.html",
  styleUrls: ["./indoor-map.component.scss"]
})
export class IndoorMapComponent implements OnInit {
  graph: any;
  HEATMAP_MAX: number = 40;
  HEATMAP_MIN: number = 12;
  x: any = [];
  y: any = [];
  cood: any = [];
  temp$: Object;
  tempData: any = [];
  temp: any = [];
  test: any = [];
  coorx: any = [];
  coory: any = [];

  constructor(private data: PagesService) {}

  ngOnInit() {
    this.data.getTemp().then(data => {
      this.tempData = data.data;
      var e = this.tempData;
      this.temp$ = e.map(function(x) {
        const pf = n => Number(parseFloat(n).toFixed(6));
        return pf(x.temp);
      });

      this.dataTransfer(this.temp$);

      var cs = [
        [0, "rgba(255,255,255,0)"],
        [0.125, "rgb(0,60,170)"],
        [0.375, "rgb(5,255,255)"],
        [0.625, "rgb(255,255,0)"],
        [0.875, "rgb(250,0,0)"],
        [1, "rgb(128,0,0)"]
      ];

      var data: any = {
        x: this.coorx,
        y: this.coory,
        z: this.temp,
        zmin: this.HEATMAP_MIN,
        zmax: this.HEATMAP_MAX,
        zsmooth: "fast",
        type: "heatmap",
        colorscale: cs,
        showscale: true,
        opacity: 0.9
      };

      var layout: any = {
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
        margin: { l: 10, r: 10, b: 10 },
        sliders: [
          {
            pad: { t: 30 },
            steps: [
              {
                label: "January",
                method: "restyle",
                args: ["line.color", "red"]
              },
              {
                label: "February",
                method: "restyle",
                args: ["line.color", "green"]
              },
              {
                label: "March",
                method: "restyle",
                args: ["line.color", "blue"]
              }
            ]
          }
        ]
      };
      Plotly.newPlot("map", [data], layout);
    });
  }

  dataTransfer(value) {
    var z = 0;
    for (this.x = 0; this.x < 12; this.x++) {
      for (this.y = 0; this.y < 12; this.y++) {
        // debugger;

        this.coorx.push(this.x);
        this.coory.push(this.y);
        this.temp.push(value[z]);
        z++;
        // }
      }
    }
    return this.temp, this.coorx, this.coory;
  }
}
