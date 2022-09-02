import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';

export default function NotFound(): JSX.Element {

  return (
    <div className="user-page">

      <Header isTitle />

      <div className="sign-in user-page__content">
        <h1 className="not-found" >
          404
          <br />
          <small>Page not found</small>
        </h1>
        <Link
          to={AppRoute.Main}
          className="not-found__btn"
        >
          Go to main page
        </Link>
      </div>

      <Footer />
    </div>
  );
}
