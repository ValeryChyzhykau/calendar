import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    public dialog: MatDialog,
    private service: AuthService,
    private router: Router
  ) {}
  public loginForm: FormGroup = new FormGroup({
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  public async submit() {
    try {
      await this.service.login(
        this.loginForm.controls.userEmail.value,
        this.loginForm.controls.userPassword.value
      );
      this.router.navigate(['/home']);
    } catch (err) {
      alert(err);
    }
  }
  public open_dialog(): void {
    this.dialog.open(SignUpComponent, {
      width: '350px',
      height: '500px'
    });
  }
}
