import { createFeatureSelector, createSelector } from '@ngrx/store';
import { calendarNode, ResponseFireBase } from './user.reducer';
import { informationNumber } from '@core/models/information-user.interface';

export const selectCalendarFeature = createFeatureSelector<informationNumber>(calendarNode);


export const selectCalendarEvents = createSelector(
    selectCalendarFeature,
    (state: ResponseFireBase) => state
);

export const selectEmail = createSelector(
    selectCalendarFeature,
    (state: informationNumber): string => state.email
);
