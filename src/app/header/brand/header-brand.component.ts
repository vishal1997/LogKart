import { Component, OnInit  } from '@angular/core';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'header-brand',
  templateUrl: './header-brand.component.html',
  providers:[AppService],
  styleUrls: ['../header.component.css']
})
export class HeaderBrandComponent{

  constructor() {}

}



