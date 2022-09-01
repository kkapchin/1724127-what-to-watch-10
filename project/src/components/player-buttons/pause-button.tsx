import { MouseEventHandler } from 'react';

type PauseButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>,
}

export default function PauseButton({onClick}: PauseButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      type="button"
      className="player__play"
    >
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use xlinkHref="#pause"></use>
      </svg>
      <span>Pause</span>
    </button>
  );
}
