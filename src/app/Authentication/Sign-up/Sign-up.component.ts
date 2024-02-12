import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Sign-up',
  templateUrl: './Sign-up.component.html',
  styleUrls: ['./Sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
    rePassword: new FormControl(null,[
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
    phone: new FormControl(null,[Validators.required,Validators.pattern("^01[0125][0-9]{8}$")]),
  });
  onSubmit(form: FormGroup) {
    console.log(form);
  }
}
