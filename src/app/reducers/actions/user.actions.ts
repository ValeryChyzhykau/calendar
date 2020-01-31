import { Action } from '@ngrx/store';
import { InformationNumber } from '@core/models/information-user.interface';

export enum UsersActions {
  LoadUsersSuccess = '[Users Page] LoadUsersSuccess',
  EmailUser = '[Users Email] EmailUser',
  LoadUsers = '[Load Users] LoadUsers',
  LoadUsersFailed = '[Users] LoadUsersFailed'
}

export class LoadUsersSuccess implements Action {
  readonly type = UsersActions.LoadUsersSuccess;
  constructor(public payload: InformationNumber[]) {}
}

export class EmailUser implements Action {
  readonly type = UsersActions.EmailUser;

  constructor(public payload: string) {}
}
export class LoadUsersFailed implements Action {
  readonly type = UsersActions.LoadUsersFailed;
}
export class LoadUsers implements Action {
  readonly type = UsersActions.LoadUsers;
}

export type UserUnion =
  | LoadUsersSuccess
  | EmailUser
  | LoadUsersFailed
  | LoadUsers;
