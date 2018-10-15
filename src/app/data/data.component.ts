import { Component, OnInit } from '@angular/core';
import {DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  data$ : Object

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(
      data => this.data$ = data
    )
  }

}
