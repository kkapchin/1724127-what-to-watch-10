import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../const';
import { reviews } from '../../mocks/reviews';
import { Movie } from '../../types/movie';
import Details from './details';
import Overview from './overview';
import Reviews from './reviews';

type TabsProps = {
  film: Movie,
}
export default function Tabs({ film }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(Tab.Overview);
  const getReviews = () => reviews;

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(Tab).map((tab) => (
            <li
              key={tab}
              className={`film-nav__item ${activeTab === tab ? 'film-nav__item--active' : ''}`}
            >
              <Link
                to={''}
                className="film-nav__link"
                onClick={() => setActiveTab(tab)}
              >{tab}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {activeTab === Tab.Overview ? <Overview film={film} /> : ''}
      {activeTab === Tab.Details ? <Details film={film} /> : ''}
      {activeTab === Tab.Reviews ? <Reviews reviews={getReviews()} /> : ''}
    </div>
  );
}
