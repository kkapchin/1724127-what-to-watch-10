import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { StateType } from '../types/state-type';

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
