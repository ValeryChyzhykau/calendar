import { UsersThemeActions, UserUnion } from '../actions/theme.actions';

export interface StateTheme {
  theme: boolean;
  isLoading: boolean;
}

export const themeNode = 'stateTheme';

export const initialState: StateTheme = {
  theme: localStorage.getItem('theme') === 'true',
  isLoading: false
};

export const stateTheme = (
  state = initialState,
  action: UserUnion
): StateTheme => {
  switch (action.type) {
    case UsersThemeActions.LoadThemeSuccess:
      localStorage.setItem('theme', JSON.stringify(!state.theme));
      return {
        ...state,
        theme: !state.theme
      };
    case UsersThemeActions.LoadThemeFailed:
      return {
        ...state,
        isLoading: true
      };
    case UsersThemeActions.LoadTheme:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};
