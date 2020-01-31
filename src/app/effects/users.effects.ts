import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { UserService } from '../core/services/user.service';
import {
  UsersActions,
  LoadUsersSuccess
} from '../reducers/actions/user.actions';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {}
  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(UsersActions.LoadUsers),
    switchMap(() =>
      this.userService
        .getHours()
        .pipe(
          map(data => {
            const result = data.map(a => {
              const key = a.payload.key;
              const userData = a.payload.val();
              return { key, ...userData };
            });
            return new LoadUsersSuccess(result);
          })
        )
    )
  );
}
