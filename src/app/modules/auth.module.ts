import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@core/components/auth/login/login.component';
import { SignUpComponent } from '@core/components/auth/sign-up/sign-up.component';
import { HomeComponent } from '@core/components/home/home.component';
import { AuthGuard } from '@core/guards/auth.guard';
import { CheckAuthGuard } from '@core/guards/check-auth.guard';
import { AuthService } from '@core/services/auth.service';
import { SharedModule } from '@src/app/modules/shared.module';

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
