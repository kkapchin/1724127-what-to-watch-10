import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLANK_FILM } from '../../const';
import { Movie } from '../../types/movie';
import VideoPlayer from '../video-player/video-player';

const DELAY = 1000;

type FilmCardProps = {
  film: Movie,
  setActiveCard: (film: Movie) => void,
}

export default function FilmCard({film, setActiveCard}: FilmCardProps): JSX.Element {
  const {name, posterImage, id, previewVideoLink} = film;

  const handleMouseOver = () => {
    setActiveCard(film);
    setTimeout(setIsPlaying, DELAY, true);
  };

  const handleMouseLeave = () => {
    setActiveCard(BLANK_FILM);
    setTimeout(setIsPlaying, DELAY, false);
  };

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article className="small-film-card catalog__films-card">
      <div
        className="small-film-card__image"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {isPlaying
          ? <VideoPlayer src={previewVideoLink} poster={posterImage} />
          : <img src={posterImage} alt={name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link
          to={`/films/${id}`}
          className="small-film-card__link"
          onClick={() => window.scrollTo(0,0)}
        >{name}
        </Link>
      </h3>
    </article>
  );
}
