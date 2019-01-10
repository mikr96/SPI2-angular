import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/data.service";
import { Sensor } from "../sensor.model";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-view-sensor",
  templateUrl: "./view-sensor.component.html",
  styleUrls: ["./view-sensor.component.scss"]
})
export class ViewSensorComponent implements OnInit {
  editForm: FormGroup;
  pathId: any;
  pathName: any;
  sensorId: any;
  dateSelect: any = [];
  timeSelect: any = [];
  sensors: Sensor[];

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.pathId = localStorage.getItem("editPathId");
    this.pathName = localStorage.getItem("editPathName");
    this.dateSelect = localStorage.getItem("editDateSelect");
    this.timeSelect = localStorage.getItem("editTimeSelect");

    this.dataService.getSensorList(this.pathId).subscribe(data => {
      var sensors = data.data;
      var size = Object.keys(sensors).length;
      for (let i = 0; i < size; i++) {
        if (
          this.dateSelect == sensors[i].date_updated &&
          this.timeSelect == sensors[i].str_time_updated
        ) {
          this.sensors = sensors[i].sensor_list;
        }
      }
    });
  }

  deleteSensor(sensors: Sensor): void {
    localStorage.removeItem("editSensorId");
    localStorage.setItem("editSensorId", sensors.id);
    this.editForm = this.formBuilder.group({
      sensor_id: [localStorage.getItem("editSensorId")]
    });
    this.dataService.deleteSensor(this.editForm.value).subscribe(data => {
      this.sensors = this.sensors.filter(u => u !== sensors);
    });
  }

  editSensor(sensor: Sensor): void {
    localStorage.setItem("editPathId", this.pathId.toString());
    localStorage.removeItem("editSensorId");
    localStorage.setItem("editSensorId", sensor.id);
    localStorage.removeItem("editSensorLatitude");
    localStorage.setItem("editSensorLatitude", sensor.latitude);
    localStorage.removeItem("editSensorLongitude");
    localStorage.setItem("editSensorLongitude", sensor.longitude);
    localStorage.removeItem("editSensorTemperature");
    localStorage.setItem("editSensorTemperature", sensor.temperature);
    localStorage.removeItem("editSensorUpdated");
    localStorage.setItem("editSensorUpdated", sensor.updated);
    this.router.navigate(["edit-sensor"]);
  }

  addSensor(sensor: Sensor): void {
    localStorage.setItem("editPathId", this.pathId);
    localStorage.removeItem("editSensorUpdated");
    localStorage.setItem("editSensorUpdated", sensor.updated);
    this.router.navigate(["add-sensor"]);
  }

  goBack() {
    this.router.navigate(["sensor-management"]);
  }
}
