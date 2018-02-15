import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.css']
})
export class LoginSectionComponent implements OnInit {


  uName:string="";
  uPswd:any="";
  submitted = false;homeNav

  onSubmit() { this.submitted = true; }

      navigateToNext(){
        this.router.navigate(['/homeNav']);
      }



  constructor(private router:Router) { }

  ngOnInit() {
  }

}
