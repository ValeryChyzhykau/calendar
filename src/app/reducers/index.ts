import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { calendarInformation, calendarNode, ResponseFireBase } from './user.reducer';

export interface State {
    [calendarNode]: ResponseFireBase;
}

export const reducers: ActionReducerMap<State> = {
    [calendarNode]: calendarInformation
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
