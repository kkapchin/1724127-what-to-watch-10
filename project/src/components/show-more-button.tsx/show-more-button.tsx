import { FILMS_COUNT_PER_STEP } from '../../const';

type ShowMoreButtonProps = {
  setFilmsCount: (filmsCount: number) => void,
  filmsCount: number,
}

export default function ShowMoreButton({ setFilmsCount, filmsCount }: ShowMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => setFilmsCount(filmsCount + FILMS_COUNT_PER_STEP)}
      >
        Show more
      </button>
    </div>
  );
}
