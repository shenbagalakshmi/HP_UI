import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginSectionComponent } from './login-section/login-section.component';
import { FormsModule }   from '@angular/forms';
import { TrackHomeComponent } from './track-home/track-home.component';
import { AppRoutingModule } from './app-routing.module';

// import {HtModule} from "ht-angular-client";



@NgModule({
  declarations: [
    AppComponent,
    LoginSectionComponent,
    TrackHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // HtModule.forRoot({token: 'pk_test_a54fc32e7d3325e61bdde2be60f627c4ac7a977f', mapType: 'google'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
