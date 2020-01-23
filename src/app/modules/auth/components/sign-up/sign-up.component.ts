import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

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

  public sign_up() {
    const {userEmail, userName, userLogin, userPassword, userPhone} =  this.signUpForm.value;
    this.service.sign_up(userEmail, userPassword, userName, userLogin, userPhone)
      .then(() => this.router.navigate(['/home']))
      .then(() => this.dialogRef.close())
      .catch(error => alert( error.message));
  }
  constructor(public dialogRef: MatDialogRef<SignUpComponent>, private service: AuthService, private router: Router) {}
}
