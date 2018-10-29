import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#example').DataTable({
      "pagingType": "full_numbers",
      "scrollX": true
    });

    $('#example').find('button').click(function () {
      console.log($(this).after());
      $(this).next().remove();
      $('<p>By ABC</p>').insertAfter($(this));
    });

  }
}
