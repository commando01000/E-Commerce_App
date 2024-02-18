import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ForgotPassword',
  templateUrl: './ForgotPassword.component.html',
  styleUrls: ['./ForgotPassword.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  ForgotPasswordform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  sendCode(code: any) {
    console.log(code);
  }
}
