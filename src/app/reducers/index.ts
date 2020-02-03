import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { stateTheme, StateTheme, themeNode } from './theme.reducer';
import {
  calendarInformation,
  calendarNode,
  ResponseFireBase
} from './user.reducer';

export interface State {
  [calendarNode]: ResponseFireBase;
  [themeNode]: StateTheme;
}

export const reducers: ActionReducerMap<State> = {
  [calendarNode]: calendarInformation,
  [themeNode]: stateTheme
};

export const metaReducers: Array<MetaReducer<State>> = !environment.production
  ? []
  : [];
