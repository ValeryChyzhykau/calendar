import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {
  UsersActions, EmailUser
} from '../reducers/actions/user.actions';
import { mergeMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { AuthService } from '../core/services/auth.service';

@Injectable()
export class EmailEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
  @Effect()
  loadEmail$ = this.actions$.pipe(
    ofType(UsersActions.LoadUsers ),
    mergeMap(() =>
      this.authService.authUser()
        .pipe(map(data => new EmailUser(data.email)))
    )
  );
}
