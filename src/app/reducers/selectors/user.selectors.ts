import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InformationNumber } from '../../core/models/information-user.interface';
import { calendarNode, ResponseFireBase } from '../user.reducer';

export const selectCalendarFeature = createFeatureSelector<ResponseFireBase>(
  calendarNode
);

export const selectCalendarEvents = createSelector(
  selectCalendarFeature,
  (state: ResponseFireBase): InformationNumber[] => state.users
);

export const selectEmail = createSelector(
  selectCalendarFeature,
  (state: ResponseFireBase): string => {
    return state.email;
  }
);
