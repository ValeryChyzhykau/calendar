import { Action } from '@ngrx/store';

export enum UsersThemeActions {
  LoadValueSuccess = '[Users Theme] LoadValueSuccess',
  LoadValueFailed = '[Users ] LoadValueSuccess',
  LoadValue = '[Load Value] LoadValue'
}

export class LoadValueSuccess implements Action {
  public readonly type:  UsersThemeActions.LoadValueSuccess = UsersThemeActions.LoadValueSuccess;
}
export class LoadFailedSuccess implements Action {
  public readonly type: UsersThemeActions.LoadValueFailed = UsersThemeActions.LoadValueFailed;
}
export class LoadValue implements Action {
  public readonly type: UsersThemeActions.LoadValue = UsersThemeActions.LoadValue;
}

export type UserUnion = LoadValueSuccess | LoadFailedSuccess | LoadValue;
