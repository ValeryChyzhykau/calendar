import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/home/components/not-found/not-found.component';


const routes: Routes = [
  { path: '' , redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './modules/auth.module#AuthModule' },
  { path: 'login', loadChildren: './modules/auth.module#AuthModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
