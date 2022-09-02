import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectReviews } from '../../store/film-data/selectors';
import { FilmType } from '../../types/film-type';
import Details from './details';
import Overview from './overview';
import Reviews from './reviews';

const TABS = [
  'Overview',
  'Details',
  'Reviews',
];

const DEFAULT_TAB = TABS[0];

type TabsProps = {
  film: FilmType | null,
}

export default function Tabs({ film }: TabsProps): JSX.Element {

  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);
  const reviews = useAppSelector(selectReviews);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {TABS.map((tab) => (
            <li
              key={tab}
              className={`film-nav__item ${activeTab === tab && 'film-nav__item--active'}`}
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
      {film && (
        <Fragment>
          {activeTab === Tab.Overview && <Overview film={film} />}
          {activeTab === Tab.Details && <Details film={film} />}
          {activeTab === Tab.Reviews && <Reviews reviews={reviews} />}
        </Fragment>
      )}
    </div>
  );
}
