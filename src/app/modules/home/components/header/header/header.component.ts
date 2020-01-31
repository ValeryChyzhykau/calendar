import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { LoadUsers } from '@src/app/reducers/actions/user.actions';
import { selectEmail } from '@src/app/reducers/selectors/user.selectors';
import { Input} from '@angular/core';
import { ResponseFireBase } from '@src/app/reducers/user.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() headerTheme: boolean;
  public email$: Observable<string> = this.store$.pipe(select(selectEmail));

  constructor(
    private service: AuthService,
    private router: Router,
    private store$: Store<ResponseFireBase>
  ) {}
  public logout() {
    try {
      this.service.logout();
      this.router.navigate(['/login']);
    } catch (err) {
      // tslint:disable-next-line:no-unused-expression
      (err: { message: string }) => alert(err.message);
    }
  }
  ngOnInit() {
    this.store$.dispatch(new LoadUsers());
  }
}
