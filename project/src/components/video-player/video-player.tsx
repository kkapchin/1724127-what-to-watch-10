type VideoPlayerProps = {
  src: string,
  poster: string,
}

export default function VideoPlayer({src, poster}: VideoPlayerProps): JSX.Element {
  return (
    <video src={src} poster={poster} autoPlay width="280" height="175" muted />
  );
}
