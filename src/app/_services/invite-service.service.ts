import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from './http-error-handler.service';
import { MemberInvite } from './requests/member-invite';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable()
export class InviteServiceService {

  private handleError: HandleError;
  memb:any

  constructor(private http: HttpClient,private httpErrorHandler:HttpErrorHandlerService) { 
    this.handleError = httpErrorHandler.createHandleError('InviteService');
  }

  // sendInviteDataTest (testObj: MemberInvite): Observable<MemberInvite> {
  //   return this.http.post<MemberInvite>('http://192.168.1.8:8080/persons/karthik.json', testObj, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('sendInviteTest', testObj))
  //     );
  // }

  getInviteDataTest(): Observable<MemberInvite> {
    return this.http.get<MemberInvite>('http://192.168.1.8:8080/persons/karthik.json')
      .pipe(
        catchError(this.handleError('getdataInvite', this.memb))
      );
  }
}
