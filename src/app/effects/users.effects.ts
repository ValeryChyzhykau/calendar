import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { UserService } from '../core/services/user.service';
import {
  LoadUsersSuccess,
  UsersActions
} from '../reducers/actions/user.actions';


@Injectable()
export class UsersEffects {
  @Effect()
  public loadUsers$: Observable<LoadUsersSuccess> = this.actions$.pipe(
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
  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {}
}
