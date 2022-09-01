import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader/loader';
import PlayerButtons from '../../components/player-buttons/player-buttons';
import PlayerTimer from '../../components/player-timer/player-timer';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { browserHistory } from '../../services/browser-history';
import { fetchFilmAction } from '../../store/api-actions';
import { selectDataLoadingStatus, selectFilm } from '../../store/film-data/selectors';
import NotFound from '../not-found/not-found';

export default function Player(): JSX.Element {

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const isDataLoading = useAppSelector(selectDataLoadingStatus);
  const film = useAppSelector(selectFilm);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleExitButtonClick = () => {
    browserHistory.back();
  };

  const handlePlayerButtonsClick = () => {
    if(isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleFullscreenClick = () => {
    videoRef.current?.requestFullscreen();
  };

  useEffect(() => {
    dispatch(fetchFilmAction(id));
  }, [dispatch, id]);

  if(isDataLoading) {
    return <Loader />;
  }

  if(film === null) {
    return <NotFound />;
  }

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={film.videoLink}
        className="player__video"
        poster={film.backgroundImage}
      >
      </video>

      <button
        onClick={handleExitButtonClick}
        type="button"
        className="player__exit"
      >
        Exit
      </button>

      <div className="player__controls">
        <PlayerTimer
          isPlaying={isPlaying}
          filmDuration={film.runTime}
        />

        <PlayerButtons
          isPlaying={isPlaying}
          handlePlayerButtonsClick={handlePlayerButtonsClick}
          handleFullscreenClick={handleFullscreenClick}
        />
      </div>
    </div>
  );
}
