import { useEffect, useState } from 'react';

const MIN_TO_SEC = 60;

type PlayerTimerProps = {
  isPlaying: boolean,
  filmDuration: number,
}

export default function PlayerTimer({isPlaying, filmDuration}: PlayerTimerProps): JSX.Element {

  const [timer, setTimer] = useState(filmDuration * MIN_TO_SEC);

  const totalDuration = filmDuration * MIN_TO_SEC;
  const togglerValue = (100 - (timer / totalDuration) * 100);

  const showTimeLeft = () => {
    const secondsCount = Math.floor((timer) % MIN_TO_SEC);
    const minutesCount = Math.floor((timer / MIN_TO_SEC) % MIN_TO_SEC);
    const hoursCount = Math.floor((timer / MIN_TO_SEC / MIN_TO_SEC) % MIN_TO_SEC);

    const displayedSecondsCount = secondsCount < 10 ? `0${secondsCount}` : secondsCount;
    const displayedMinutesCount = minutesCount < 10 ? `0${minutesCount}` : minutesCount;
    const displayedHoursCount = hoursCount < 10 ? `0${hoursCount}` : hoursCount;

    return !hoursCount
      ? `- ${displayedMinutesCount}:${displayedSecondsCount}`
      : `- ${displayedHoursCount}:${displayedMinutesCount}:${displayedSecondsCount}`;
  };

  useEffect(() => {
    if (isPlaying) {
      setTimeout(setTimer, 10, timer - 0.01);
    }
  }, [isPlaying, timer]);

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress
          className="player__progress"
          value={togglerValue}
          max="100"
        >
        </progress>
        <div
          className="player__toggler"
          style={{left: `${togglerValue}%`}}
        >
          Toggler
        </div>
      </div>
      <div className="player__time-value">{showTimeLeft()}</div>
    </div>
  );
}
