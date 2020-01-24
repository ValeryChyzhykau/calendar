import { Action } from '@ngrx/store';
import { informationNumber } from '@core/models/information-user.interface';

export enum UsersActions {
  GetUsers = '[Users Page] GetUsers',
  EmailUser = '[Users Email] EmailUser',
  LoadUsers = '[Load Users] LoadUsers'
 }

export class GetUsers implements Action {
   readonly type = UsersActions.GetUsers;
   constructor(public payload: informationNumber[]) {}
 }

export class EmailUser implements Action {
  readonly type = UsersActions.EmailUser;

  constructor(public payload: string) {}
 }

export class LoadUsers implements Action {
  readonly type = UsersActions.LoadUsers;
 }

export type UserUnion = GetUsers | EmailUser | LoadUsers ;
