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
  status: boolean = false;
  heat: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.map = L.map('map').setView([2.920282, 101.641747], 12);
    var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

  }

  genHeatmap() {

    this.status = !this.status;

    console.log(this.status);

    var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    if (this.status) {

      this.dataService.getSensorList().subscribe(res => {
        this.sensorList = res.data;

        var e = this.sensorList;
        console.log(e);

        this.addressPoints = e.map(function (x) {

          const pf = (n) => Number(parseFloat(n).toFixed(6));
          return [pf(x.latitude), pf(x.longitude), pf(x.temperature / 5)];

        });
        console.log(this.addressPoints);
        this.heat = L.heatLayer(this.addressPoints, { radius: 25 }).addTo(this.map);

      }, err => {
        console.log(err);
      });

    } else {
      this.map.removeLayer(this.heat);
    }

  }

}
