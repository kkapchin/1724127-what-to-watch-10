import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { changeGenre, filterFilms } from '../../store/action';

type GenresItemProps = {
  genre: string,
  activeGenre: string,
}

export default function GenresItem({ genre, activeGenre }: GenresItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleItemClick = () => {
    dispatch(changeGenre(genre));
    dispatch(filterFilms(genre));
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
