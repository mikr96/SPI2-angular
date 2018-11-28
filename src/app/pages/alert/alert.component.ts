import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";

declare var $: any;

interface Alert {
  id: number;
  deviceType: string;
  mapType: string;
  name: string;
  lat: number;
  lng: number;
  result: string;
  lastUpdate: any;
  acknowledge: string;
}

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
  alerts: Alert[];
  done: boolean = false;

  constructor(private http: Http) {
    this.http.get("assets/alert.json").subscribe(data => {
      this.alerts = data.json();
    });
  }

  ngOnInit() {}

  acknowledge(alert) {
    const found = this.alerts.find(data => data == alert);
    found.acknowledge = "PIC";
  }
}
