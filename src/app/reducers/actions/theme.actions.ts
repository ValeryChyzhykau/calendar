import { Action } from '@ngrx/store';

export enum UsersThemeActions {
  LoadValueSuccess = '[Users Theme] LoadValueSuccess',
  LoadValueFailed = '[Users ] LoadValueSuccess',
  LoadValue = '[Load Value] LoadValue'
}

export class LoadValueSuccess implements Action {
  readonly type = UsersThemeActions.LoadValueSuccess;
}
export class LoadFailedSuccess implements Action {
  readonly type = UsersThemeActions.LoadValueFailed;
}
export class LoadValue implements Action {
  readonly type = UsersThemeActions.LoadValue;
}

export type UserUnion = LoadValueSuccess | LoadFailedSuccess | LoadValue;
