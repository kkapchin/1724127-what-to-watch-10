import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Title from '../../components/header/title';
import { FilmType } from '../../types/film-type';

type MyListProps = {
  films: FilmType[]
}

export default function MyList({films}: MyListProps): JSX.Element {
  const favoriteFilms = films.filter((film) => film.isFavorite);
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

        <FilmList films={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
}
