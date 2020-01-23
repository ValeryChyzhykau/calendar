import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { UserService } from './core/services/user.service';
import { UsersActions, GetUsers, EmailUser } from './reducers/user.actions';
import { mergeMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { AuthService } from './core/services/auth.service';


@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private userService: UserService, private authService: AuthService) {}
  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(UsersActions.LoadUsers ),
    mergeMap(() =>
      this.userService
        .get_hours()
        .valueChanges()
        .pipe(map(data => new GetUsers(data)))
    )
  );
  @Effect()
  loadEmail$ = this.actions$.pipe(
    ofType(UsersActions.LoadUsers ),
    mergeMap(() =>
      this.authService.auth_user()
        .pipe(map(data => new EmailUser(data.email)))
    )
  );
}
