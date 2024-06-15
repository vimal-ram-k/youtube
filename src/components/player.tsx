import ReactPlayer from "react-player";

type PlayerProps = {
  url: string;
};
const Player = (props: PlayerProps) => {
  return <ReactPlayer url={props.url} width={400} height={200} />;
};

export default Player;
