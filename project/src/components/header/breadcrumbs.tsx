import { Link } from 'react-router-dom';

type BreadcrumbsProps = {
  id: number,
  name: string,
}

export default function Breadcrumbs({ id, name }: BreadcrumbsProps): JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link to={`/films/${id}/review`} className="breadcrumbs__link">Add review</Link>
        </li>
      </ul>
    </nav>
  );
}
