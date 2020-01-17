import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectEmail } from 'src/app/reducers/user.selectors';
import { informationNumber } from '../../models/information-user.interface';
import { LoadUsers } from 'src/app/reducers/user.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public email$: Observable<string> = this.store$.pipe(select(selectEmail));

  constructor(
    private service: AuthService,
    private router: Router,
    private store$: Store<informationNumber>
  ) {}
  logout() {
    this.service.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.store$.dispatch(new LoadUsers());
  }
}
