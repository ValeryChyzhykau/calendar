import { InformationNumber } from '@core/models/information-user.interface';
import { UsersActions, UserUnion } from './actions/user.actions';

export interface ResponseFireBase {
  users: InformationNumber[];
  isLoading: boolean;
  email: string;
}

export const calendarNode = 'calendar';
export const initialState: ResponseFireBase = {
  users: [],
  email: undefined,
  isLoading: false
};

export const calendarInformation = (
  state = initialState,
  action: UserUnion
): ResponseFireBase => {
  switch (action.type) {
    case UsersActions.LoadUsersSuccess:
      return {
        ...state,
        users: action.payload
      };
    case UsersActions.LoadUsers:
      return {
        ...state,
        isLoading: true
      };
    case UsersActions.EmailUser:
      return {
        ...state,
        email: action.payload
      };
    case UsersActions.LoadUsersFailed:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};
