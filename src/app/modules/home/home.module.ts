import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@core/core.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './components/header/header/header.component';
import { ModalAddHoursComponent } from './components/modal-add-hours/modal-add-hours.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OpenDataEditingDialogComponent } from './components/open-data-editing-dialog/open-data-editing-dialog.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    ModalAddHoursComponent,
    HeaderComponent,
    NotFoundComponent,
    OpenDataEditingDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    CoreModule,
    FullCalendarModule,
    SharedModule,
    RouterModule
  ],
  entryComponents: [ModalAddHoursComponent, OpenDataEditingDialogComponent]
})
export class HomeModule {}
