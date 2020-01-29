import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { InformationNumber } from '@core/models/information-user.interface';
import { LoadUsers } from '@app/reducers/user.actions';
import { selectEmail } from '@src/app/reducers/user.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public email$: Observable<string> = this.store$.pipe(select(selectEmail));

  constructor(
    private service: AuthService,
    private router: Router,
    private store$: Store<InformationNumber>
  ) {}
  public logout() {
    try {
      this.service.logout();
      this.router.navigate(['/login']);
    } catch (err) {
      // tslint:disable-next-line:no-unused-expression
      (err: {message: string}) => alert(err.message);
    }
  }
  ngOnInit() {
    this.store$.dispatch(new LoadUsers());
  }
}
