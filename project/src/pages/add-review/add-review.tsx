import { useParams } from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import Breadcrumbs from '../../components/header/breadcrumbs';
import Header from '../../components/header/header';
import { FilmType } from '../../types/film-type';
import NotFound from '../not-found/not-found';

type AddReviewProps = {
  films: FilmType[]
}

export default function AddReview({films}: AddReviewProps): JSX.Element {
  const { id } = useParams();
  const film = films.filter((movie) => movie.id === Number(id))[0];

  if(film === undefined) {
    return <NotFound />;
  }

  const {
    backgroundImage,
    name,
    posterImage,
  } = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header breadcrumbs={<Breadcrumbs id={film.id} name={name} />} />

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );
}
