import { MouseEventHandler } from 'react';

type FullscreenButtonProps = {
  handleFullscreenClick: MouseEventHandler<HTMLButtonElement>,
}

export default function FullscreenButton({handleFullscreenClick}: FullscreenButtonProps): JSX.Element {
  return (
    <button
      onClick={handleFullscreenClick}
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
