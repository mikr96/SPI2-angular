import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { DataService } from "src/app/data.service";
import { PagesService } from "../pages.service";

@Component({
  selector: "app-view-table",
  templateUrl: "./view-table.component.html",
  styleUrls: ["./view-table.component.scss"]
})
export class ViewTableComponent implements OnInit {
  dummy: any;
  currentUrl: string;
  data$: Object;

  constructor(
    private dataService: DataService,
    private data: PagesService,
    private router: Router
  ) {
    router.events.subscribe((_: NavigationEnd) => (this.currentUrl = _.url));
  }

  ngOnInit() {
    this.data.getPath().subscribe(data => (this.data$ = data));
  }
}
