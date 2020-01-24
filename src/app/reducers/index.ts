import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { calendarInformation, calendarNode } from './user.reducer';
import { informationNumber } from '@core/models/information-user.interface';

export interface State {
    [calendarNode]: informationNumber;
}

export const reducers: ActionReducerMap<State> = {
    [calendarNode]: calendarInformation
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
