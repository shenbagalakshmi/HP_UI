import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';


declare let mLayout: any;
@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {
    // 
  }
  ngAfterViewInit(){
    mLayout.initHeader();
  }
 
}
