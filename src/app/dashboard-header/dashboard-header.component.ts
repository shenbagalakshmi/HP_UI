import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, NavigationStart, NavigationEnd,NavigationError } from '@angular/router';



declare let mLayout: any;
@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit,AfterViewInit {

  constructor(private router:Router) { }

  ngOnInit() {
    // 
  }
  ngAfterViewInit(){
    mLayout.initHeader();
  }



  goToLive(){
    this.router.navigate(['/mapmodule']);
  }


  showLive(){
    document.getElementById("dashboardDiv").style.display="none"
    document.getElementById("liveLocationDiv").style.display="block";
    document.getElementById("teamLocationDiv").style.display="none";
  }

  showDashboard(){
    document.getElementById("dashboardDiv").style.display="block"
    document.getElementById("liveLocationDiv").style.display="none";
    document.getElementById("teamLocationDiv").style.display="none";
  }
 
}
