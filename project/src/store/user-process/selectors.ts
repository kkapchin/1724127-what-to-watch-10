import { AuthorizationStatus, NameSpace } from '../../const';
import { StateType } from '../../types/state-type';
import { UserDataType } from '../../types/user-data-type';

export const getAuthorizationStatus = (state: StateType): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getUserData = (state: StateType): UserDataType | null => state[NameSpace.User].userData;
