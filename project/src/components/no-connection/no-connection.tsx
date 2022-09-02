import { Fragment } from 'react';
import { browserHistory } from '../../services/browser-history';
import Footer from '../footer/footer';
import Header from '../header/header';

export default function NoConnection(): JSX.Element {

  const refreshPage = () => {
    browserHistory.go(0);
  };

  return (
    <Fragment>
      <section className="film-card">
        <div className="film-card__bg">
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <div className="sign-in user-page__content">
            <h1 className="not-found" >
              No internet connection
              <br />
              <small>Please check your connection and try again</small>
            </h1>
            <button
              onClick={refreshPage}
              className="not-found__btn"
            >
              <span>Retry</span>
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
}
