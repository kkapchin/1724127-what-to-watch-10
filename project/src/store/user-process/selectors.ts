import { AuthorizationStatus, NameSpace } from '../../const';
import { StateType } from '../../types/state-type';
import { UserDataType } from '../../types/user-data-type';

export const selectAuthorizationStatus = (state: StateType): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const selectUserData = (state: StateType): UserDataType | null => state[NameSpace.User].userData;
