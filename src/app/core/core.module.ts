import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { MaterialAppModule } from '../ng-material.module';


@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    MaterialAppModule
  ],
  providers: [],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule { }
