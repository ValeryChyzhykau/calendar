import { InformationNumber } from '@core/interfaces/information-user.interface';
import { Action } from '@ngrx/store';

export enum UsersActions {
  LoadUsersSuccess = '[Users] LoadUsersSuccess',
  EmailUser = '[Users] EmailUser',
  LoadUsers = '[Users] LoadUsers',
  LoadUsersFailed = '[Users] LoadUsersFailed'
}

export class LoadUsersSuccess implements Action {
  public readonly type: UsersActions.LoadUsersSuccess = UsersActions.LoadUsersSuccess;
  constructor(public payload: InformationNumber[]) {}
}

export class EmailUser implements Action {
  public readonly type: UsersActions.EmailUser = UsersActions.EmailUser;

  constructor(public payload: string) {}
}
export class LoadUsersFailed implements Action {
  public readonly type: UsersActions.LoadUsersFailed = UsersActions.LoadUsersFailed;
}
export class LoadUsers implements Action {
  public readonly type: UsersActions.LoadUsers = UsersActions.LoadUsers;
}

export type UserUnion =
  | LoadUsersSuccess
  | EmailUser
  | LoadUsersFailed
  | LoadUsers;
