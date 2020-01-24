import { informationNumber } from '@core/models/information-user.interface';
import { UserUnion, UsersActions } from './user.actions';

export interface ResponseFireBase {
  color: undefined;
  email: undefined;
  start: undefined;
  title: undefined;
  users?: informationNumber[];
}

export const calendarNode = 'calendar';
export const initialState: ResponseFireBase = {
  color: undefined,
  email: undefined,
  start: undefined,
  title: undefined,
};

export const calendarInformation = (
  state = initialState,
  action: UserUnion
) => {
  switch (action.type) {
    case UsersActions.GetUsers:
      return {
        ...state,
        users: action.payload
      };
    case UsersActions.EmailUser:
      return {
        ...state,
        email: action.payload
      };
      default:
         return state;
  }
};
