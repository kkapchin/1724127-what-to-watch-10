import { MouseEventHandler } from 'react';

type PlayButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>,
}

export default function PlayButton({onClick}: PlayButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      type="button"
      className="player__play"
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}
