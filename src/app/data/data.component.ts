import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

declare var $: any;

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  sensorList: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getSensorList().subscribe(res => {
      this.sensorList = res.data;
      console.log(res);
    }, err => {
      console.log(err);
    });

  }

}