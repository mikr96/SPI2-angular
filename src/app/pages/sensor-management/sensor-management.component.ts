import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/data.service";
import { Sensor } from "./Sensor.model";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-sensor-management",
  templateUrl: "./sensor-management.component.html",
  styleUrls: ["./sensor-management.component.scss"]
})
export class SensorManagementComponent implements OnInit {
  editForm: FormGroup;
  pathId: any;
  pathName: any;
  sensorId: any;
  dataDate: any = [];
  dataDateArr: any = [];
  dateSelect: any = [];
  timeSelect: any = [];
  dataTimeArr: any = [];
  dataDateTime: any = [];
  sensors: Sensor[];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.pathId = localStorage.getItem("editPathId");
    this.pathName = localStorage.getItem("editPathName");

    this.dataService.getSensorList(this.pathId).subscribe(res => {
      this.initializeDate(res);
    });
  }

  initializeDate(res) {
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
    console.log(this.dataDateArr);
  }

  onDateChange(value) {
    this.dateSelect = [];
    this.dataTimeArr = [];

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
    this.timeSelect = value;
  }

  goToViewTable() {
    localStorage.removeItem("editPathName");
    localStorage.setItem("editPathName", this.pathName);
    localStorage.removeItem("editPathId");
    localStorage.setItem("editPathId", this.pathId);
    localStorage.removeItem("editDateSelect");
    localStorage.setItem("editDateSelect", this.dateSelect);
    localStorage.removeItem("editTimeSelect");
    localStorage.setItem("editTimeSelect", this.timeSelect);
    this.router.navigate(["view-sensor"]);
  }

  goBack() {
    this.router.navigate(["path-management"]);
  }
}
