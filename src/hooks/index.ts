import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import { State, AppDispath } from '../types/state';

export const useAppDispatch = useDispatch<AppDispath>; // это HOC

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
