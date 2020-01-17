import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddHoursComponent } from '../../../components/modal-add-hours/modal-add-hours.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { informationNumber } from 'src/app/core/models/information-user.interface';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCalendarEvents } from 'src/app/reducers/user.selectors';
import { LoadUsers } from 'src/app/reducers/user.actions';
import { ResponseFireBase } from 'src/app/reducers/user.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public calendar$: Observable<ResponseFireBase> = this.store$.pipe(select(selectCalendarEvents));
  constructor(public user: UserService, public dialog: MatDialog, private store$: Store<informationNumber>) {}
  public calendarPlugins = [dayGridPlugin, interactionPlugin];
  public calendarEvents: informationNumber[] = [];
  openDialog(): void {
     this.dialog.open(ModalAddHoursComponent, {
      width: '75%',
      height: '50%'
    });
  }
  ngOnInit() {
    this.calendar$.subscribe((res: ResponseFireBase) =>  this.calendarEvents = res.users );
    this.store$.dispatch(new LoadUsers());
  }
}
