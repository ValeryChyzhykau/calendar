import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { ModalAddHoursComponent } from './components/modal-add-hours/modal-add-hours.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/modal-add-hours/header/header/header.component';
import { FooterComponent } from './components/modal-add-hours/footer/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [HomeComponent, ModalAddHoursComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    CoreModule,
    FullCalendarModule,
    SharedModule,
  ],
  entryComponents: [ModalAddHoursComponent],
})
export class HomeModule { }
