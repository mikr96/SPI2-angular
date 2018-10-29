import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router, private customer: CustomerService) {
    //router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url)
  }

  ngOnInit() {

    // Toggle sidebar entrance
    $('#menu-toggle').click(function () {
      console.log('click');
      $('.side-menu').toggleClass('draw-in');
      $('.main-section').toggleClass('draw-in');
      $('.footer').toggleClass('draw-in');
      $('.side-menu ul li a span').toggleClass('hidden');
      $('.side-menu ul li a i').not($('.side-menu ul li:first-child a i')).toggleClass('hidden');
    });

    // Logout button on hover
    $('.side-menu ul li:last-child').mouseover(function () {
      $(this).css("cursor", "pointer");
    }).mouseout(function () {
      $(this).css("cursor", "default");
    });

    // Add menu list border when active
    $('.side-menu li:not(:first-child)').click(function () {
      if ($('.side-menu li a').hasClass('active')) {
        $('.side-menu li a').removeClass('active');
      }
      $('a', this).addClass('active');
    })



  }

  logout() {

    this.customer.deleteToken();
    this.router.navigate(['/login']);

  }

}