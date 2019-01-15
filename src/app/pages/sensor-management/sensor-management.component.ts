import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/data.service";
import { Sensor } from "./Sensor.model";
import { Router } from "@angular/router";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-sensor-management",
  templateUrl: "./sensor-management.component.html",
  styleUrls: ["./sensor-management.component.scss"]
})
export class SensorManagementComponent implements OnInit {
  /* Variable declaration */
  editForm: FormGroup;
  pathId: any;
  pathName: any;
  sensorId: any;
  sensors: Sensor[];
  dataDate: any = []; //Store object date
  dataDateArr: any = []; //Store date in array
  dateSelect: any = []; //Store user date selection
  timeSelect: any = []; //Store user time selection
  dataTimeArr: any = []; //Store time in array
  dataTime: any = []; //Store object time

  constructor(private dataService: DataService, private router: Router) {}

  /* Runs on page initialize */
  ngOnInit() {
    /* Get Item from Storage */
    this.pathId = localStorage.getItem("editPathId");
    this.pathName = localStorage.getItem("editPathName");

    this.dataService.getSensorList(this.pathId).subscribe(res => {
      this.initializeDate(res);
    });
  }

  /* Initializing date into variable dataDateArr */
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
  }

  /* Function triggers after user select date */
  onDateChange(value) {
    this.dateSelect = [];
    this.dataTimeArr = [];

    this.dateSelect = value;
    this.dataService.getTimeDate(value, this.pathId).subscribe(res => {
      this.dataTime = res.data;
      var size = Object.keys(this.dataTime).length;
      for (let i = 0; i < size; i++) {
        this.dataTimeArr.push(this.dataTime[i].str_time_updated);
      }
    });
  }

  /* Function triggers after user select time */
  onTimeChange(value) {
    this.timeSelect = value; //store value time into a variable, so that it can be reusable for other functions or components
  }

  /* Functions trigger after user click button 'search' */
  goToViewTable() {
    localStorage.removeItem("editPathName"); //Create storage editpathname
    localStorage.setItem("editPathName", this.pathName); //Set storage editpathname
    localStorage.removeItem("editPathId"); //Create storage editpathid
    localStorage.setItem("editPathId", this.pathId); //Set storage editpathid
    localStorage.removeItem("editDateSelect"); //Create storage editDateSelect
    localStorage.setItem("editDateSelect", this.dateSelect); //Set storage editDateSelect
    localStorage.removeItem("editTimeSelect"); //Create storage editTimeSelect
    localStorage.setItem("editTimeSelect", this.timeSelect); //Set storage editTimeSelect
    this.router.navigate(["view-sensor"]); //Redirect page to View Sensor page
  }

  /* Functions trigger after user click button 'go back' */
  goBack() {
    this.router.navigate(["path-management"]); //Redirect page to Path Management page
  }
}
