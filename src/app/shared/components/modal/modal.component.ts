import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  myForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPhone: new FormControl('', Validators.pattern('[0-9]{9}')),
    userPassword:  new FormControl('', [Validators.required, Validators.minLength(6)]),
    userLogin: new FormControl('', Validators.required)
  });

  signUp() {
    const userEmail = this.myForm.controls.userEmail.value;
    const userName = this.myForm.controls.userName.value;
    const userLogin = this.myForm.controls.userLogin.value;
    const userPassword = this.myForm.controls.userPassword.value;
    const userPhone = this.myForm.controls.userPhone.value;
    this.service.signUp(userEmail, userPassword, userName, userLogin, userPhone)
      .then(() => this.router.navigate(['/home']))
      .then(() => this.dialogRef.close())
      .catch(error => alert( error.message));
  }
  constructor(public dialogRef: MatDialogRef<ModalComponent>, private service: AuthService, private router: Router) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
