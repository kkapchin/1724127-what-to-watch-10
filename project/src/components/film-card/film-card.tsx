import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLANK_FILM } from '../../const';
import { FilmType } from '../../types/film-type';
import VideoPlayer from '../video-player/video-player';

const DELAY = 1000;

type FilmCardProps = {
  film: FilmType,
  setActiveCard: (film: FilmType) => void,
  isActive: boolean,
}

export default function FilmCard({film, setActiveCard, isActive}: FilmCardProps): JSX.Element {

  const [timeoutId, setTimeoutId] = useState(Number);

  const {name, posterImage, id, previewVideoLink} = film;

  const handleMouseOver = () => {
    setTimeoutId(setTimeout(setActiveCard, DELAY, film));
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setActiveCard(BLANK_FILM);
  };

  const scrollUp = () => {
    window.scrollTo(0,0);
  };

  return (
    <article className="small-film-card catalog__films-card">
      <div
        className="small-film-card__image"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {isActive ? (
          <VideoPlayer
            src={previewVideoLink}
            poster={posterImage}
          />
        ) : (
          <img src={posterImage} alt={name} width="280" height="175" />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link
          to={`/films/${id}`}
          className="small-film-card__link"
          onClick={scrollUp}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
}
