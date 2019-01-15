import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "src/app/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-sensor",
  templateUrl: "./add-sensor.component.html",
  styleUrls: ["./add-sensor.component.scss"]
})
export class AddSensorComponent implements OnInit {
  pathId: any;
  addForm: FormGroup;
  time: any;
  updated: any;
  A;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {}

  /* Runs on page initialize */
  ngOnInit() {
    /* Get Item from Storage */
    this.pathId = localStorage.getItem("editPathId");
    this.updated = localStorage.getItem("editSensorUpdated");

    this.updated = this.reformDateTime(this.updated);

    /* This form builder will generate json file format with input parameters */
    this.addForm = this.formBuilder.group({
      path_id: [this.pathId],
      latitude: ["", Validators.required],
      longitude: ["", Validators.required],
      temperature: ["", Validators.required],
      updated: [this.updated]
    });
  }

  /* Function triggers after user click button 'save' */
  onSubmit() {
    this.dataService.createSensor(this.addForm.value).subscribe(data => {
      this.router.navigate(["view-sensor"]); //Redirect page to View Sensor page
    });
  }

  /* This function will combine the date and time collected into a string */
  /* The string must be in form of "24/11/96 14:42:00" */
  /* Feel free to clean the codes */
  reformDateTime(val): String {
    var fields = val.split("-");
    var years = fields[0];
    var months = fields[1];
    var test = fields[2];
    var fields2 = test.split(" ");
    var days = fields2[0];
    var time = fields2[1];
    var date = days + "/" + months + "/" + years;
    var f = " ";
    val = date.concat(f, time);
    return val;
  }
}
