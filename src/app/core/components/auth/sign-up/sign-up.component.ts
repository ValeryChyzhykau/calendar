import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public  signUpForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPhone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')]),
    userPassword:  new FormControl('', [Validators.required, Validators.minLength(6)]),
    userLogin: new FormControl('', Validators.required)
  });
  constructor(public dialogRef: MatDialogRef<SignUpComponent>, private service: AuthService, private router: Router) {}

  public signUp(): void {
    const {userEmail, userName, userLogin, userPassword, userPhone} =  this.signUpForm.value;
    this.service.signUp(userEmail, userPassword, userName, userLogin, userPhone)
      .then(() => this.router.navigate(['/home']))
      .then(() => this.dialogRef.close())
      .catch(error => alert( error.message));
  }
}
