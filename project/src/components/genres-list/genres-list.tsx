import { useAppSelector } from '../../hooks/use-app-selector';
import GenresItem from './genres-item';

type GenresListProps = {
  setFilmsCount: (filmsCount: number) => void,
  genreList: string[],
}

export default function GenresList({ setFilmsCount, genreList }: GenresListProps) {
  const activeGenre = useAppSelector((state) => state.genre);

  return (
    <ul className="catalog__genres-list">
      {genreList.map((genre) => (
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
