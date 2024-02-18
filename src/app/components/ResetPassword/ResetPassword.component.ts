import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from 'src/app/Services/ForgotPassword.service';

@Component({
  selector: 'app-ResetPassword',
  templateUrl: './ResetPassword.component.html',
  styleUrls: ['./ResetPassword.component.css']
})
export class ResetPasswordComponent implements OnInit {

 isLoading: boolean = false;
  constructor(private _ForgotPassword: ForgotPasswordService, private _Route: Router) {}

  ngOnInit() {}

  resetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
  });

  onSubmit(resetPasswordForm: any) {
    console.log(resetPasswordForm);
    this.isLoading = true;
    if (resetPasswordForm.valid) {
      this._ForgotPassword.resetPassword(resetPasswordForm.value).subscribe({
        next: (response) => {
          this._Route.navigate(['sign-in']);
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
      });
    }
  }

}
