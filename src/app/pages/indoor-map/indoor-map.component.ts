import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { PagesService } from "../pages.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-indoor-map",
  templateUrl: "./indoor-map.component.html",
  styleUrls: ["./indoor-map.component.scss"]
})
export class IndoorMapComponent implements OnInit {
  //csvUrl = "src/assets/data.json";
  graph: any;
  HEATMAP_MAX: number = 40;
  HEATMAP_MIN: number = 12;
  x: any = [];
  y: any = [];
  // value: any = [];
  cood: any = [];
  temp$: Object;
  tempData: any = [];
  temp: any = [];
  test: any = [];
  coorx: any = [];
  coory: any = [];

  constructor(private data: PagesService) { }

  ngOnInit() {
    // this.temp$ = this.data.getTemp();
    // console.log(this.temp$);
    // this.temp = this.showData();
    // console.log(this.temp);
    this.data.getTemp().then(data => {
      //console.log(data.data);
      this.tempData = data.data;
      var e = this.tempData;
      this.temp$ = e.map(function (x) {
        const pf = n => Number(parseFloat(n).toFixed(6));
        return pf(x.temp);
      });

      this.dataTransfer(this.temp$);
      console.log(this.temp);
      console.log(this.coorx);
      console.log(this.coory);
      //debugger;
      // this.graph = {
      //   data: [
      //     {
      //       z: [[8, 3, 24.930437]],
      //       type: "heatmap",
      //       colorscale: "Jet",
      //       zsmooth: "best",
      //       zmin: this.HEATMAP_MIN,
      //       zmax: this.HEATMAP_MAX,
      //       visible: true,
      //       opacity: 0.9
      //     }
      //   ]
      // };

      var colorscaleValue = [
        [0, '#3D9970'],
        [1, '#001f3f']
      ];

      this.graph = {
        data: [{
          x: this.coorx,
          y: this.coory,
          z: this.temp,
          zmin: this.HEATMAP_MIN,
          zmax: this.HEATMAP_MAX,
          type: 'heatmap',
          colorscale: "Jet",
          showscale: true,
          opacity: 0.9
        }]
      }

    });

    // this.data.getTemp().then(data => {
    //   //console.log(data.data);
    //   this.tempData = data.data;
    //   var e = this.tempData;
    //   this.temp = e.map(function(x) {
    //     const pf = n => Number(parseFloat(n).toFixed(6));
    //     return pf(x.temp);
    //   });
    //   this.dataTransfer(this.temp);
    // });
  }

  // showData(): any {
  //   this.data.getTemp().then(data => {
  //     //console.log(data.data);
  //     this.tempData = data.data;
  //     var e = this.tempData;
  //     this.temp = e.map(function(x) {
  //       const pf = n => Number(parseFloat(n).toFixed(6));
  //       return pf(x.temp);
  //     });
  //     this.dataTransfer(this.temp);
  //     return this.temp;
  //   });
  // }

  dataTransfer(value) {


    var z = 0;
    for (this.x = 0; this.x < 12; this.x++) {
      for (this.y = 0; this.y < 12; this.y++) {
        //console.log(value[1]);
        //this.test = [this.x, this.y, value[z]];
        // this.temp[z] = this.test;
        //if (z < 142) {
        //debugger;

        this.coorx.push(this.x);
        this.coory.push(this.y);
        this.temp.push(value[z]);
        z++;
        //}
        // this.temp.map(function(){



        // });
        //console.log(value[0]);
      }
    }
    return this.temp, this.coorx, this.coory;
  }

  // showGraph(e) {
  //   console.log(e);
  //   this.graph = {
  //     data: [
  //       {
  //         z: [[e]],
  //         type: "heatmap",
  //         colorscale: "Jet",
  //         zsmooth: "best",
  //         zmin: this.HEATMAP_MIN,
  //         zmax: this.HEATMAP_MAX,
  //         visible: true,
  //         opacity: 0.9
  //       }
  //     ]
  //   };
  // }
}
