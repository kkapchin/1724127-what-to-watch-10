import { MouseEventHandler } from 'react';
import FullscreenButton from './fullscreen-button';
import PauseButton from './pause-button';
import PlayButton from './play-button';

type PlayerButtonsProps = {
  isPlaying: boolean,
  handlePlayerButtonsClick: MouseEventHandler<HTMLButtonElement>,
  handleFullscreenClick: MouseEventHandler<HTMLButtonElement>,
}

export default function PlayerButtons(
  {
    isPlaying,
    handlePlayerButtonsClick,
    handleFullscreenClick,
  }: PlayerButtonsProps): JSX.Element {
  return (
    <div className="player__controls-row">
      {isPlaying
        ? (
          <PauseButton
            onClick={handlePlayerButtonsClick}
          />
        )
        : (
          <PlayButton
            onClick={handlePlayerButtonsClick}
          />
        )}
      <div className="player__name">Transpotting</div>

      <FullscreenButton
        onClick={handleFullscreenClick}
      />
    </div>
  );
}
