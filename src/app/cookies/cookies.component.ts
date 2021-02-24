import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

declare var $: any;


@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  acceptedCookies = "";

  constructor(private cookieService: CookieService) {

  }

  acceptCookies() {
    this.cookieService.set('cookies', 'false');
    this.acceptedCookies = this.cookieService.get('cookies');
  }

  showCookieMessage() {
    $('#cookieModal').modal('show');

  }

  ngOnInit() {
    this.acceptedCookies = this.cookieService.get('cookies');

    if (this.acceptedCookies == "false") {
      $('#cookieModal').modal('hide');
    }
    else { $('#cookieModal').modal('show'); }
  }

}
