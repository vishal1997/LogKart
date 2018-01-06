import { Component } from '@angular/core';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  providers:[AppService],
  styleUrls: ['../header.component.css']
})
export class HeaderMenuComponent {

  constructor() {}
}
