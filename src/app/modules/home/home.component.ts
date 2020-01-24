import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { informationNumber } from '@core/models/information-user.interface';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCalendarEvents } from '@app/reducers/user.selectors';
import { LoadUsers } from '@app/reducers/user.actions';
import { ResponseFireBase } from '@app/reducers/user.reducer';
import { ModalAddHoursComponent } from './components/modal-add-hours/modal-add-hours.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public calendar$: Observable<ResponseFireBase> = this.store$.pipe(select(selectCalendarEvents));
  public calendarPlugins = [dayGridPlugin, interactionPlugin];
  public calendarEvents: informationNumber[] = [];
  constructor(public user: UserService, public dialog: MatDialog, private store$: Store<informationNumber>) {}
  public  open_dialog(): void {
     this.dialog.open(ModalAddHoursComponent, {
      width: '75%',
      height: '50%'
    });
  }
  public ngOnInit() {
    this.calendar$.subscribe((res: ResponseFireBase) =>  this.calendarEvents = res.users);
    this.store$.dispatch(new LoadUsers());
  }
}
