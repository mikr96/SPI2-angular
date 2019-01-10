import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "src/app/data.service";
import { first } from "rxjs/operators";
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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.pathId = localStorage.getItem("editPathId");
    this.updated = localStorage.getItem("editSensorUpdated");

    this.updated = this.reformDateTime(this.updated);

    this.addForm = this.formBuilder.group({
      path_id: [this.pathId],
      latitude: ["", Validators.required],
      longitude: ["", Validators.required],
      temperature: ["", Validators.required],
      updated: [this.updated]
    });
    console.log(this.addForm.value);
  }

  onSubmit() {
    this.dataService.createSensor(this.addForm.value).subscribe(data => {
      console.log(this.addForm.value);
      this.router.navigate(["view-sensor"]);
    });
  }

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
