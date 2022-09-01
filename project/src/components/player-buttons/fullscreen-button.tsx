import { MouseEventHandler } from 'react';

type FullscreenButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>,
}

export default function FullscreenButton({onClick}: FullscreenButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      type="button"
      className="player__full-screen"
    >
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  );
}
