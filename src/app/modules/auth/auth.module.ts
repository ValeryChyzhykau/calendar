import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '@shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { CheckAuthGuard } from '@core/guards/check-auth.guard';
import { AuthService } from '@core/services/auth.service';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [CheckAuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  entryComponents: [SignUpComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [AuthService]
})
export class AuthModule {}
