import Player from "../components/player";

const PlayService = () => {
  const list = [
    "https://youtu.be/xpDnVSmNFX0?feature=shared",
    "https://youtu.be/xpDnVSmNFX0?feature=shared",
    "https://youtu.be/xpDnVSmNFX0?feature=shared",
    "https://youtu.be/xpDnVSmNFX0?feature=shared",
    "https://youtu.be/xpDnVSmNFX0?feature=shared",
    "https://youtu.be/xpDnVSmNFX0?feature=shared",
  ];
  return (
    <div className="" style={{ width: "100dvw" }}>
      <ul
        className=" d-flex column-gap-4"
        style={{ overflow: "auto", scrollbarWidth: "none" }}
      >
        {list.map((items, index) => {
          return (
            <li key={index + items} className="list-unstyled ">
              <Player url={items} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlayService;
