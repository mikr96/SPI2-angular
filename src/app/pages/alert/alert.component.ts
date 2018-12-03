import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";

interface Alert {
  id: number;
  deviceType: string;
  mapType: string;
  name: string;
  lat: number;
  lng: number;
  result: string;
  lastUpdate: any;
  acknowledge?: string;
}

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
  cbj2: Alert[];
  c026: Alert[];
  merged: Alert[] = [];

  constructor(private http: Http) {
    this.http.get("assets/cbj2_test.json").subscribe(data => {
      data.json().forEach(val => this.merged.push(val));
    });

    this.http.get("assets/c026_test.json").subscribe(data => {
      data.json().forEach(val => this.merged.push(val));
    });
  }

  ngOnInit() {}

  acknowledge(data) {
    const found = this.merged.find(item => item == data);
    found.acknowledge = "PIC";
  }
}
