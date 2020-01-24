import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectEmail } from '@app/reducers/user.selectors';
import { informationNumber } from '@core/models/information-user.interface';
import { LoadUsers } from '@app/reducers/user.actions';

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
    private store$: Store<informationNumber>
  ) {}
  public  logout() {
    this.service.logout();
    this.router.navigate(['/login']);
  }
  public ngOnInit() {
    this.store$.dispatch(new LoadUsers());
  }
}
