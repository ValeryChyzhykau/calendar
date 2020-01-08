import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService) { }
  myForm: FormGroup = new FormGroup({
    userEmail: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    userPassword: new FormControl('', Validators.required)
  });
  submit(): any {
    return this.service.login(this.myForm.controls.userEmail.value, this.myForm.controls.userPassword.value);
  }
  ngOnInit() {
  }

}
