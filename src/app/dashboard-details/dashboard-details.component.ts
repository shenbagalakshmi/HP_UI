import { Component, OnInit } from '@angular/core';

import { ScriptLoaderService } from '../_services/script-loader.service';
import {Helpers} from '../helpers';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.css']
})
export class DashboardDetailsComponent implements OnInit,AfterViewInit {

  targetRs:number=2154000;
  constructor(private _script:ScriptLoaderService) { }

  ngOnInit() {

    
  }
  ngAfterViewInit() {
    this._script.loadScripts('app-track-home',
        ['assets/externalJS/dashboard.js']);

    Helpers.bodyClass('m-page--wide m-header--fixed m-header--fixed-mobile m-footer--push m-aside--offcanvas-default');

}

}
