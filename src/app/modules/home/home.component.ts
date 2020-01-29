import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { InformationNumber } from '@core/models/information-user.interface';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCalendarEvents } from '@app/reducers/user.selectors';
import { LoadUsers } from '@app/reducers/user.actions';
import { ModalAddHoursComponent } from './components/modal-add-hours/modal-add-hours.component';
import { OpenDataEditingDialogComponent } from './components/open-data-editing-dialog/open-data-editing-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public calendar$: Observable<InformationNumber[]> = this.store$.pipe(
    select(selectCalendarEvents)
  );
  public calendarPlugins = [dayGridPlugin, interactionPlugin];
  public calendarEvents: InformationNumber[] = [];
  private editDay: InformationNumber;
  constructor(
    public user: UserService,
    public dialog: MatDialog,
    private store$: Store<InformationNumber>
  ) {}

  public openDialog(): void {
    this.dialog.open(ModalAddHoursComponent, {
      width: '75%',
      height: '50%'
    });
  }
   ngOnInit() {
    console.log(this.store$);
    this.store$.dispatch(new LoadUsers());
    console.log(this.calendar$);
    this.calendar$.subscribe((res: InformationNumber[]) => {
      this.calendarEvents = res;
      console.log(res);
    });
  }

  public eventClick(info: {
    event: {
      extendedProps: { key: string; email: string };
      title: number;
      start: string;
      backgroundColor: string;
    };
  }) {
    const data = {
      title: info.event.title,
      start: info.event.start,
      color: info.event.backgroundColor,
      $key: info.event.extendedProps.key,
      email: info.event.extendedProps.email
    };
    this.editDay = data;
    console.log(this.editDay);
    console.log(data);
    return this.OpenDataEditingDialog();
  }
  private OpenDataEditingDialog() {
    this.dialog.open(OpenDataEditingDialogComponent, {
      width: '75%',
      height: '50%',
      data: this.editDay
    });
  }
}


