import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  credentials: any = {};
  out: any;

  constructor(private api: DataService, private customer: CustomerService, private router: Router) {
  }

  ngOnInit() {
    this.credentials = {
      username: '', password: ''
    }
  }

  tryLoginOip() {

    this.api.loginOip(this.credentials)
      .subscribe(res => {

        this.out = res;
        console.log(this.out.result);

        if (this.out.result == 'AUTH_SUCCESS') {

          this.customer.setToken('token');
          this.router.navigateByUrl('');

        } else {
          //alert('error');
          $('.err-msg').html('');
          $('.err-msg').append('<p class="text-center" style="color: red;">Authentication Failed</p>');
        }

      });
  }

}