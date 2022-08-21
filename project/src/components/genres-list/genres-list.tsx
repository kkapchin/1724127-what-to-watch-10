import { GENRES } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import GenresItem from './genres-item';

type GenresListProps = {
  setFilmsCount: (filmsCount: number) => void,
}

export default function GenresList({ setFilmsCount }: GenresListProps) {
  const activeGenre = useAppSelector((state) => state.genre);

  return (
    <ul className="catalog__genres-list">
      {GENRES.map((genre) => (
        <GenresItem
          key={genre}
          genre={genre}
          activeGenre={activeGenre}
          setFilmsCount={setFilmsCount}
        />
      ))}
    </ul>
  );
}
