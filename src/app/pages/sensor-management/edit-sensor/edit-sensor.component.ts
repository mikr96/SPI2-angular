import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "src/app/data.service";

declare var $: any;

@Component({
  selector: "app-edit-sensor",
  templateUrl: "./edit-sensor.component.html",
  styleUrls: ["./edit-sensor.component.scss"]
})
export class EditSensorComponent implements OnInit {
  editForm: FormGroup;
  pathId: String;
  sensorId: any;
  lat: String;
  lng: String;
  temp: String;
  updated: String;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {}

  /* Runs on page initialize */
  ngOnInit() {
    /* Get Item from Storage */
    this.pathId = localStorage.getItem("editPathId");
    this.sensorId = localStorage.getItem("editSensorId");
    this.lat = localStorage.getItem("editSensorLatitude");
    this.lng = localStorage.getItem("editSensorLongitude");
    this.temp = localStorage.getItem("editSensorTemperature");
    this.updated = localStorage.getItem("editSensorUpdated");

    let lat;
    let lng;
    let temp;

    /* Just in case if user did not update the parameter, then the program will save the previous parameter  */
    var input = (<HTMLInputElement>document.getElementById("latitude")).value;
    if (input == "") {
      lat = this.lat;
    } else {
      lat = input;
    }

    var input = (<HTMLInputElement>document.getElementById("longitude")).value;
    if (input == "") {
      lng = this.lng;
    } else {
      lng = input;
    }

    var input = (<HTMLInputElement>document.getElementById("temperature"))
      .value;
    if (input == "") {
      temp = this.temp;
    } else {
      temp = input;
    }

    /* This line of codes will combine the date and time collected into a string */
    /* The string must be in form of "24/11/96 14:42:00" */
    /* Feel free to clean the codes */
    var fields = this.updated.split("-");
    var years = fields[0];
    var months = fields[1];
    var test = fields[2];
    var fields2 = test.split(" ");
    var days = fields2[0];
    var time = fields2[1];
    var date = days + "/" + months + "/" + years;
    var f = " ";
    this.updated = date.concat(f, time);

    /* FormBuilder is a tool where it help us delivering a json file format */
    /* path_id, path_name, path_desc are formcontrolname */
    /* It help us group the parameters and you can see the result by adding a new line, console.log(this.editForm.value) */
    this.editForm = this.formBuilder.group({
      sensor_id: [Number(parseInt(this.sensorId))],
      path_id: [this.pathId],
      latitude: [Number(parseFloat(lat)), Validators.required],
      longitude: [Number(parseFloat(lng)), Validators.required],
      temperature: [Number(parseFloat(temp)), Validators.required],
      updated: [this.updated]
    });
  }

  /* Function triggers, after user click button 'update' */
  onSubmit() {
    this.dataService.updateSensor(this.editForm.value).subscribe(data => {
      this.router.navigate(["view-sensor"]); //redirect page to View Sensor Page
    });
  }
}
