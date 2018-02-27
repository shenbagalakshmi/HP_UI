import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {LoginRequest} from '../_services/requests/login-request';
import { InviteServiceService } from '../_services/invite-service.service';
import { MemberInvite } from '../_services/requests/member-invite';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.css']
})
export class LoginSectionComponent implements OnInit {


  uName:string="";
  uPswd:any="";
  submitted = false;
  testURLLOgin="https://192.168.1.8:8080/persons/karthik.json" 
  loginReq:LoginRequest=new LoginRequest();
  responseinvite:MemberInvite;

  onSubmit() { this.submitted = true; }

      saveDetailAandNavigate(){
     
        // const objTest: MemberInvite = { } as MemberInvite;
        // this.inviteServcTest.getInviteDataTest()
        //   .subscribe(responseinvite => console.log(responseinvite));


        this.router.navigate(['/homeNav']);
      }



  constructor(private router:Router,private inviteServcTest:InviteServiceService) { }

  ngOnInit() {
  }

}
