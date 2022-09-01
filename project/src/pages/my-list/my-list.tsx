import { useEffect } from 'react';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Title from '../../components/header/title';
import Loader from '../../components/loader/loader';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { fetchFavoritesAction } from '../../store/api-actions';
import { selectFavoriteFilms, selectIsDataLoading } from '../../store/film-data/selectors';

export default function MyList(): JSX.Element {

  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(selectFavoriteFilms);
  const isDataLoading = useAppSelector(selectIsDataLoading);

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  if(isDataLoading) {
    return <Loader />;
  }

  return (
    <div className="user-page">

      <Header
        isTitle
        title={
          <Title isMyList favoriteFilmsCount={favoriteFilms.length} />
        }
      />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
}
