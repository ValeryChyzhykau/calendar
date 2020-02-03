import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import {
  EmailUser, UsersActions
} from '../actions/user.actions';
import { AuthService } from '../services/auth.service';

@Injectable()
export class EmailEffects {
  @Effect()
 public loadEmail$: Observable<EmailUser> = this.actions$.pipe(
    ofType(UsersActions.LoadUsers ),
    mergeMap(() =>
      this.authService.authUser()
        .pipe(map(data => new EmailUser(data.email)))
    )
  );
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}
