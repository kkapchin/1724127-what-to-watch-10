import { Link } from 'react-router-dom';
import { DEFAULT_FILMS_COUNT } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { changeGenre } from '../../store/action';

type GenresItemProps = {
  genre: string,
  activeGenre: string,
  setFilmsCount: (filmsCount: number) => void,
}

export default function GenresItem({ genre, activeGenre, setFilmsCount }: GenresItemProps): JSX.Element {

  const dispatch = useAppDispatch();

  const handleItemClick = () => {
    dispatch(changeGenre(genre));
    setFilmsCount(DEFAULT_FILMS_COUNT);
  };

  return (
    <li className={`catalog__genres-item ${activeGenre === genre && 'catalog__genres-item--active'}`}>
      <Link
        to={''}
        className="catalog__genres-link"
        onClick={handleItemClick}
      >
        {genre}
      </Link>
    </li>
  );
}
