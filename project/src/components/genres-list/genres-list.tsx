import { useAppSelector } from '../../hooks/use-app-selector';
import { selectGenre } from '../../store/film-data/selectors';
import GenresItem from './genres-item';

type GenresListProps = {
  setFilmsCount: (filmsCount: number) => void,
  genresList: string[],
}

export default function GenresList({ setFilmsCount, genresList }: GenresListProps) {

  const activeGenre = useAppSelector(selectGenre);

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre) => (
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
