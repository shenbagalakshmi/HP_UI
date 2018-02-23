import { Component, OnInit,ViewEncapsulation } from '@angular/core';


declare let mLayout: any;
@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    mLayout.initHeader();
  }
 
}
