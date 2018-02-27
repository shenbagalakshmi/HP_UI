import { Component, OnInit,ViewEncapsulation,AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { ScriptLoaderService } from '../_services/script-loader.service';
import {Helpers} from '../helpers';


declare let mApp: any;
declare let mUtil: any;
declare let mLayout:any;
@Component({
  selector: 'app-track-home',
  templateUrl: './track-home.component.html',
  styleUrls: ['./track-home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TrackHomeComponent implements OnInit,AfterViewInit {


   perentPrgs:number= 34;
   globalBodyClass = 'm-page--loading-non-block m-page--fluid m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';

  //  hypertrackString:string="https://dashboard.hypertrack.com/widget/map/users?key=pk_test_a54fc32e7d3325e61bdde2be60f627c4ac7a977f";
  constructor(private router:Router,private _script:ScriptLoaderService) { }

  ngOnInit() {

    // mLayout.initHeader();

    this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js', 'assets/demo/demo10/base/scripts.bundle.js'], true)
    .then(result => {
        Helpers.setLoading(false);
        // optional js to be loaded once
        // this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js'], true);
    });

    this.router.events.subscribe((route) => {
      if (route instanceof NavigationStart) {
          (<any>mLayout).closeMobileAsideMenuOffcanvas();
          (<any>mLayout).closeMobileHorMenuOffcanvas();
          (<any>mApp).scrollTop();
          Helpers.setLoading(true);
          // hide visible popover
          (<any>$('[data-toggle="m-popover"]')).popover('hide');
      }
      if (route instanceof NavigationEnd) {
          // init required js
          (<any>mApp).init();
          (<any>mUtil).init();
          Helpers.setLoading(false);
          // content m-wrapper animation
          let animation = 'm-animate-fade-in-up';
          $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
              $('.m-wrapper').removeClass(animation);
          }).removeClass(animation).addClass(animation);
      }
  });

   
  }

  showLocation(){
    // window.location.href="https://dashboard.hypertrack.com/widget/map/users?key=pk_test_a54fc32e7d3325e61bdde2be60f627c4ac7a977f";

    this.router.navigate(['/userMgmt']);
  }


  addClassNvTrigger(){
    document.getElementById("aNav").classList.add("nav-is-visible");
  }


  removeNav(){
    if(document.getElementById("aNav").classList.contains("nav-is-visible")){
      document.getElementById("aNav").classList.remove("nav-is-visible")
    }

  }

  ngAfterViewInit(){

  }
}
