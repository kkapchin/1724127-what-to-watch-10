import {Middleware} from 'redux';
import { browserHistory } from '../../services/browser-history';
import { rootReducer } from '../root-reducer';

type ReducerType = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, ReducerType> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'what-to-watch/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
