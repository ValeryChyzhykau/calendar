import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { ModalAddHoursComponent } from './components/modal-add-hours/modal-add-hours.component';
import { MaterialAppModule } from 'src/app/ng-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [HomeComponent, ModalAddHoursComponent],
  imports: [
    CommonModule,
    CoreModule,
    MaterialAppModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  entryComponents: [ModalAddHoursComponent],
})
export class HomeModule { }
