import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {ToastContainer} from 'react-toastify';
import App from './components/app/app';
import { store } from './store';
import { checkAuthAction, fetchFilmsAction, fetchPromoAction } from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(checkAuthAction());
store.dispatch(fetchPromoAction());
store.dispatch(fetchFilmsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
);
