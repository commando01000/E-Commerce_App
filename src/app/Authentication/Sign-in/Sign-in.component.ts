import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInService } from '../../Services/Sign-In.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Sign-in',
  templateUrl: './Sign-in.component.html',
  styleUrls: ['./Sign-in.component.css'],
})
export class SignInComponent implements OnInit {

  isLoading: boolean = false;

  constructor(private _SignIn:SignInService, private _Route:Router) {}

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
    console.log(loginForm);
    this.isLoading = true;
    if (loginForm.valid) {
      this._SignIn.validateUser(loginForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this._Route.navigate(['home']);
          this.isLoading = false;
        },
        error: (err) => {
          console.log(err.errors.message);
          this.isLoading = false;
        },
        complete: () => {
          console.log('completed !');
          this.isLoading = false;
        },
      })
    }
  }
}
