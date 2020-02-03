import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@core/components/home/components/header/header/header.component';
import { ModalAddHoursComponent } from '@core/components/home/components/modal-add-hours/modal-add-hours.component';
import { NotFoundComponent } from '@core/components/home/components/not-found/not-found.component';
import { OpenDataEditingDialogComponent } from '@core/components/home/components/open-data-editing-dialog/open-data-editing-dialog.component';
import { HomeComponent } from '@core/components/home/home.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CoreModule } from '@src/app/modules/core.module';
import { SharedModule } from '@src/app/modules/shared.module';

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
