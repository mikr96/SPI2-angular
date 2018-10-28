import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss']
})
export class ViewTableComponent implements OnInit {

  dummy: any;


  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.dummyTest().subscribe(res => {
      this.dummy = res;
      console.log(res);
    });



  }

}
