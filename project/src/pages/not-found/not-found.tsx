import { Link } from 'react-router-dom';

export default function NotFound(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href={'/'} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <h1 style={{textAlign: 'center', lineHeight: 1.5}}>
          404
          <br />
          <small>Page not found</small>
        </h1>
        <Link className="sign-in__btn" to="/" style={{ textDecoration: 'none' }}>
          Go to main page
        </Link>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href={'/'} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
