import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { CheckAuthGuard } from '@core/guards/check-auth.guard';
import { AuthService } from '@core/services/auth.service';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

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
