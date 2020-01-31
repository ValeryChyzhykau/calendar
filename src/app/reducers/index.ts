import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import {
  calendarInformation,
  calendarNode,
  ResponseFireBase
} from './user.reducer';
import { themeNode, stateTheme, StateTheme } from './theme.reducer';

export interface State {
  [calendarNode]: ResponseFireBase;
  [themeNode]: StateTheme;
}

export const reducers: ActionReducerMap<State> = {
  [calendarNode]: calendarInformation,
  [themeNode]: stateTheme
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
