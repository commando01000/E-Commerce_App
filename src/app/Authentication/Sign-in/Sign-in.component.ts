import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInService } from '../../Services/Sign-In.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthorizedUserDataService } from 'src/app/Services/AuthorizedUserData.service';
import { ForgotPasswordService } from 'src/app/Services/ForgotPassword.service';
import { CartService } from 'src/app/Services/Cart.service';
@Component({
  selector: 'app-Sign-in',
  templateUrl: './Sign-in.component.html',
  styleUrls: ['./Sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  isLoading: boolean = false;
  errorMsg!: string;
  constructor(
    private _SignIn: SignInService,
    private _ForgotPassword: ForgotPasswordService,
    private _Route: Router,
    private _AuthUser: AuthorizedUserDataService,
    private _cartService: CartService
  ) {}

  ngOnInit() {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
  });

  onSubmit(loginForm: any) {
    // console.log(loginForm);
    this.isLoading = true;
    if (loginForm.valid) {
      this._SignIn.validateUser(loginForm.value).subscribe({
        next: (response) => {
          // console.log(response.token);
          localStorage.setItem('token', response.token);
          this._AuthUser.freshToken.next(response.token);
          this._AuthUser.getUserData();
          this._Route.navigate(['home']);
          this.isLoading = false;
          this._ForgotPassword.isValidCode.next(false);
          this._ForgotPassword.RetypePassword.next(false);
        },
        error: (err) => {
          console.log(err);
          this.errorMsg = err.error.message;
          this.isLoading = false;
        },
        complete: () => {
          console.log('completed !');
          this.isLoading = false;
        },
      });
    }
  }
}
