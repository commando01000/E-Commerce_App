import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-Sign-up',
  templateUrl: './Sign-up.component.html',
  styleUrls: ['./Sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    rePassword: new FormControl(null),
    phone: new FormControl(null),
  });
  onSubmit(form:FormGroup) {
    console.log(form);
  }
}
