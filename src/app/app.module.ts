import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginSectionComponent } from './login-section/login-section.component';
import { FormsModule }   from '@angular/forms';
import { TrackHomeComponent } from './track-home/track-home.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';

import { ScriptLoaderService } from "./_services/script-loader.service";
import { QuickSidebarComponent } from './quick-sidebar/quick-sidebar.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { FooterComponent } from './footer/footer.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { LeftAsideDisplayComponent } from './left-aside-display/left-aside-display.component';

// import {HtModule} from "ht-angular-client";

import { HttpClientModule } from '@angular/common/http';

//services

import {InviteServiceService} from './_services/invite-service.service';
import {HttpErrorHandlerService} from './_services/http-error-handler.service';
import {MessagesService} from './_services/messages.service';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginSectionComponent,
    TrackHomeComponent,
    DashboardHeaderComponent,
    QuickSidebarComponent,
    ScrollTopComponent,
    TooltipsComponent,
    FooterComponent,
    AsideNavComponent,
    LeftAsideDisplayComponent,
    DashboardDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    // HtModule.forRoot({token: 'pk_test_a54fc32e7d3325e61bdde2be60f627c4ac7a977f', mapType: 'google'}),
  ],
  providers: [ScriptLoaderService,InviteServiceService,HttpErrorHandlerService,MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
