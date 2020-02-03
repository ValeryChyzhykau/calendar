import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { select, Store } from '@ngrx/store';
import { LoadUsers } from '@src/app/reducers/actions/user.actions';
import { selectEmail } from '@src/app/reducers/selectors/user.selectors';
import { ResponseFireBase } from '@src/app/reducers/user.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() public headerTheme: boolean;
  public email$: Observable<string> = this.store$.pipe(select(selectEmail));

  constructor(
    private service: AuthService,
    private router: Router,
    private store$: Store<ResponseFireBase>
  ) {}
  public logout(): void {
    try {
      this.service.logout();
      this.router.navigate(['/login']);
    }  catch (err) {
      alert(err);
    }
  }
  public ngOnInit(): void {
    this.store$.dispatch(new LoadUsers());
  }
}
