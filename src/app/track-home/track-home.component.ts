import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-track-home',
  templateUrl: './track-home.component.html',
  styleUrls: ['./track-home.component.css']
})
export class TrackHomeComponent implements OnInit {


   perentPrgs:number= 34;
  //  hypertrackString:string="https://dashboard.hypertrack.com/widget/map/users?key=pk_test_a54fc32e7d3325e61bdde2be60f627c4ac7a977f";
  constructor(private router:Router) { }

  ngOnInit() {
  }


  showLocation(){
    // window.location.href="https://dashboard.hypertrack.com/widget/map/users?key=pk_test_a54fc32e7d3325e61bdde2be60f627c4ac7a977f";

    this.router.navigate(['/userMgmt']);
  }
}
