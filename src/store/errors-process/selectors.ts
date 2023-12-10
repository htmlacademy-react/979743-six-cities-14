import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getServerError = (state: State): string | null => state[NameSpace.Error].serverError;
