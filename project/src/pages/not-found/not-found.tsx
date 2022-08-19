import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

export default function NotFound(): JSX.Element {
  return (
    <div className="user-page">

      <Header isTitle />

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

      <Footer />
    </div>
  );
}
