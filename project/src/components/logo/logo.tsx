import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  isFooter?: boolean,
}

export default function Logo({ isFooter }: LogoProps): JSX.Element {
  const handleClick = () => {
    window.scrollTo(0,0);
  };

  return (
    <div className="logo">
      <Link
        to={AppRoute.Main}
        className={`logo__link ${isFooter && 'logo__link--light'}`}
        onClick={handleClick}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
