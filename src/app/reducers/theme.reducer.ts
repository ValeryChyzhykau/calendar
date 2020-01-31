import { UserUnion, UsersThemeActions } from './actions/theme.actions';

export interface StateTheme {
  theme: boolean;
  isLoading: boolean;
}

export const themeNode = 'stateTheme';

export const initialState: StateTheme = {
  theme: localStorage.getItem('theme') === 'false',
  isLoading: false
};

export const stateTheme = (
  state = initialState,
  action: UserUnion
): StateTheme => {
  switch (action.type) {
    case UsersThemeActions.LoadValueSuccess:
      localStorage.setItem('theme', JSON.stringify(state.theme));
      return {
        ...state,
        theme: !state.theme
      };
    case UsersThemeActions.LoadValueFailed:
      return {
        ...state,
        isLoading: true
      };
    case UsersThemeActions.LoadValue:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};
