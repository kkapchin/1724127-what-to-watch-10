import { browserHistory } from '../../services/browser-history';

export default function NoConnection(): JSX.Element {

  const refreshPage = () => {
    browserHistory.go(0);
  };

  return (
    <div className="sign-in user-page__content">
      <h1 className="not-found" >
        No internet connection
        <br />
        <small>Please check your connection and try again</small>
      </h1>
      <button
        onClick={refreshPage}
        className="not-found__btn"
      >
        <span>Retry</span>
      </button>
    </div>
  );
}
