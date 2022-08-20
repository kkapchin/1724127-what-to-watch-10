import { useDispatch } from 'react-redux';
import { AppDispatchType } from '../types/app-dispatch-type';

export const useAppDispatch: () => AppDispatchType = useDispatch;
