type VideoPlayerProps = {
  src: string,
}

export default function VideoPlayer({src}: VideoPlayerProps): JSX.Element {
  return (
    <video
      src={src}
      autoPlay
      width="280"
      height="175"
      muted
    />
  );
}
