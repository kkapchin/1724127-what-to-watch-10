import { GENRES } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import GenresItem from './genres-item';

export default function GenresList() {
  const activeGenre = useAppSelector((state) => state.genre);

  return (
    <ul className="catalog__genres-list">
      {GENRES
        .map((genre) => (
          <GenresItem
            key={GENRES.indexOf(genre)}
            genre={genre}
            activeGenre={activeGenre}
          />)
        )}
    </ul>
  );
}
