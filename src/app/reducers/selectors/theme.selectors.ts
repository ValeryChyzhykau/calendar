import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StateTheme, themeNode } from '../theme.reducer';

export const selectThemeFeature = createFeatureSelector<StateTheme>(themeNode);

export const selectThemeValue = createSelector(
  selectThemeFeature,
  (state: StateTheme): boolean => state.theme
);
