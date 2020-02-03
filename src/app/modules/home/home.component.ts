import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformationNumber } from '@core/models/information-user.interface';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { select, Store } from '@ngrx/store';
import { LoadValueSuccess } from '@src/app/reducers/actions/theme.actions';
import { LoadUsers } from '@src/app/reducers/actions/user.actions';
import { selectThemeValue } from '@src/app/reducers/selectors/theme.selectors';
import { selectCalendarEvents } from '@src/app/reducers/selectors/user.selectors';
import { StateTheme } from '@src/app/reducers/theme.reducer';
import { ResponseFireBase } from '@src/app/reducers/user.reducer';
import { Observable } from 'rxjs';
import { ModalAddHoursComponent } from './components/modal-add-hours/modal-add-hours.component';
import { OpenDataEditingDialogComponent } from './components/open-data-editing-dialog/open-data-editing-dialog.component';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public calendar$: Observable<InformationNumber[]> = this.store$.pipe(
    select(selectCalendarEvents)
  );
  public theme$: Observable<boolean> = this.themeStore$.pipe(
    select(selectThemeValue)
  );
  public calendarPlugins: object = [dayGridPlugin, interactionPlugin];
  private editDay: InformationNumber;
  constructor(
    private themeStore$: Store<StateTheme>,
    private dialog: MatDialog,
    private store$: Store<ResponseFireBase>
  ) {
    this.store$.dispatch(new LoadUsers());
  }

  public changeTheme(): void {
    this.themeStore$.dispatch(new LoadValueSuccess());
  }
  public openDialog(): void {
    this.dialog.open(ModalAddHoursComponent, {
      width: '75%',
      height: '50%'
    });
  }

  public eventClick(info: {
    event: {
      extendedProps: { key: string; email: string };
      title: number;
      start: string;
      backgroundColor: string;
    };
  }): void {
    const data: InformationNumber = {
      title: info.event.title,
      start: info.event.start,
      color: info.event.backgroundColor,
      $key: info.event.extendedProps.key,
      email: info.event.extendedProps.email
    };
    this.editDay = data;
    return this.OpenDataEditingDialog();
  }
  private OpenDataEditingDialog(): void {
    this.dialog.open(OpenDataEditingDialogComponent, {
      width: '75%',
      height: '50%',
      data: this.editDay
    });
  }
}
