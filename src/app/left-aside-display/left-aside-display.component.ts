import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Helpers } from '../helpers';
import { ScriptLoaderService } from '../_services/script-loader.service';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-page__container.m-body",
    templateUrl: "./left-aside-display.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class LeftAsideDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
