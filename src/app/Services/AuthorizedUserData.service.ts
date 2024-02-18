import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedUserDataService {
  userData = new BehaviorSubject(null);
  constructor(private _Route: Router) {
    if (localStorage.getItem('token')) {
      this.getUserData();
      console.log(this.userData);
    }
  }
  getUserData(): any {
    let encodedToken: any = localStorage.getItem('token');
    let decodedToken: any = jwtDecode(encodedToken);
    this.userData.next(decodedToken);
    // console.log(this.userData);
  }
  removeUserData() {
    localStorage.removeItem('token');
    this.userData.next(null);
    this._Route.navigate(['sign-in']);
  }
}
