import { Component, OnInit } from "@angular/core";
import { PagesService } from "../pages.service";

declare var $: any;

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
  data$: Object;

  constructor(private data: PagesService) {}

  ngOnInit() {
    // $('#example').DataTable({
    //   "pagingType": "full_numbers",
    //   "scrollX": true
    // });

    // $('#example').find('button').click(function () {
    //   console.log($(this).after());
    //   $(this).next().remove();
    //   $('<p>By ABC</p>').insertAfter($(this));
    // });
    this.data.getAlert().subscribe(data => (this.data$ = data));
  }
}
