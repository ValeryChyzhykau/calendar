import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { CheckAuthGuard } from 'src/app/core/guards/check-auth.guard';
import { AuthService } from 'src/app/core/services/auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [CheckAuthGuard]}
];

@NgModule({
  declarations: [
    LoginComponent,
    NotFoundComponent,
    SignUpComponent
  ],
  entryComponents: [ SignUpComponent, NotFoundComponent ],
  imports: [ CommonModule, SharedModule, RouterModule.forChild(routes) ],
  providers: [AuthService]
})
export class AuthModule {}
