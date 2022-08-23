import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './not-found.css';

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
        <Link className="not-found__btn" to="/">
          Go to main page
        </Link>
      </div>

      <Footer />
    </div>
  );
}
