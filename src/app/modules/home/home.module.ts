import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { ModalAddHoursComponent } from './components/modal-add-hours/modal-add-hours.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { OpenDataEditingDialogComponent } from './components/open-data-editing-dialog/open-data-editing-dialog.component';

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
