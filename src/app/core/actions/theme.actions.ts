import { Action } from '@ngrx/store';

export enum UsersThemeActions {
  LoadThemeSuccess = '[Theme] LoadThemeSuccess',
  LoadThemeFailed = '[Theme ] LoadThemeFailed',
  LoadTheme = '[Theme] LoadTheme'
}

export class LoadThemeSuccess implements Action {
  public readonly type:  UsersThemeActions.LoadThemeSuccess = UsersThemeActions.LoadThemeSuccess;
}
export class LoadThemeFailed implements Action {
  public readonly type: UsersThemeActions.LoadThemeFailed = UsersThemeActions.LoadThemeFailed;
}
export class LoadTheme implements Action {
  public readonly type: UsersThemeActions.LoadTheme = UsersThemeActions.LoadTheme;
}

export type UserUnion = LoadThemeSuccess | LoadThemeFailed | LoadTheme;
