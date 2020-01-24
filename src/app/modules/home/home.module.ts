import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { ModalAddHoursComponent } from './components/modal-add-hours/modal-add-hours.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/modal-add-hours/header/header/header.component';
import { FooterComponent } from './components/modal-add-hours/footer/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, ModalAddHoursComponent, HeaderComponent, FooterComponent , NotFoundComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    CoreModule,
    FullCalendarModule,
    SharedModule,
    RouterModule
  ],
  entryComponents: [ModalAddHoursComponent],
})
export class HomeModule { }
