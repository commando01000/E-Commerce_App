import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  constructor(private _http: HttpClient) {}
  forgotPassword(formData: any): Observable<any> {
    return this._http.post(
      'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
      formData
    );
  }
  verificationCode(formData: any): Observable<any> {
    return this._http.post(
      'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
      formData
    );
  }
  resetPassword(formData: any): Observable<any> {
    return this._http.put(
      'https://ecommerce.routemisr.com/api/v1/auth/resetPassword',
      formData
    );
  }
}
