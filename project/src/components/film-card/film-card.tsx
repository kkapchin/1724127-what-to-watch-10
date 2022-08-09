import { Link } from 'react-router-dom';
import { Film } from '../../types/films';

type FilmCardProps = {
  film: Film,
  mouseOverHandler: (film: Film) => void,
}

export default function FilmCard({film, mouseOverHandler}: FilmCardProps): JSX.Element {
  const {name, posterImage, id} = film;
  return (
    <article className="small-film-card catalog__films-card">
      <div
        className="small-film-card__image"
        onMouseOver={() => {mouseOverHandler(film);}}
      >
        <img src={posterImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}
