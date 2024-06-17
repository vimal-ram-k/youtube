import home_light from "../assets/sidebar/home-light.svg";
import home_dark from "../assets/sidebar/home-dark.svg";
import short_light from "../assets/sidebar/shorts-light.svg";
import short_dark from "../assets/sidebar/shorts-dark.svg";
import subcribe_dark from "../assets/sidebar/subcribe-dark.svg";
import subcribe_light from "../assets/sidebar/subcribe-light.svg";
import channel_dark from "../assets/sidebar/channel-dark.png";
import channel_light from "../assets/sidebar/channel-dark.png";
import history_dark from "../assets/sidebar/history-dark.png";
import history_light from "../assets/sidebar/history-light.png";
import playlist_dark from "../assets/sidebar/playlist-dark.png";
import playlist_light from "../assets/sidebar/playlist-light.png";
import your_video_dark from "../assets/sidebar/yourvideo-dark.png";
import your_video_light from "../assets/sidebar/yourvideo-light.png";
import watch_later_dark from "../assets/sidebar/clock-dark.png";
import watch_later_light from "../assets/sidebar/clock-light.png";
import like_dark from "../assets/sidebar/like-dark.png";
import like_light from "../assets/sidebar/like-light.png";
import arrow_dark from "../assets/sidebar/right-arrow-dark.png";
import arrow_light from "../assets/sidebar/right-arrow-light.png";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import Listviwer from "./listviwer";

function Pagerouter() {
  const theme = useSelector((state: RootState) => {
    return state.ThemeContext.theme;
  });
  const sidebar_list = [
    {
      name: "Home",
      darkicon: home_dark,
      lighticon: home_light,
    },
    {
      name: "Shorts",
      darkicon: short_dark,
      lighticon: short_light,
    },
    {
      name: "Subcriptions",
      darkicon: subcribe_dark,
      lighticon: subcribe_light,
    },
  ];

  const sidebar_list2 = [
    {
      name: "Your channel",
      darkicon: channel_dark,
      lighticon: channel_light,
    },
    {
      name: "History",
      darkicon: history_dark,
      lighticon: history_light,
    },

    {
      name: "Playlist",
      darkicon: playlist_dark,
      lighticon: playlist_light,
    },
    {
      name: "Your videos",
      darkicon: your_video_dark,
      lighticon: your_video_light,
    },
    {
      name: "Watch later",
      darkicon: watch_later_dark,
      lighticon: watch_later_light,
    },
    {
      name: "Likes",
      darkicon: like_dark,
      lighticon: like_light,
    },
  ];
  return (
    <div
      className="my-3 mx-4 d-none d-md-block col-1 col-lg-2 position-sticky"
      style={{
        color: theme === "bg-black" ? "white" : "black",
        top: "100px",
        height: "100vh",
        maxHeight: "calc(100vh - 100px)",
      }}
      id="scroller"
    >
      <ul className="p-0">
        {sidebar_list.map((item, index) => {
          return (
            <Listviwer
              name={item.name}
              darkicon={item.darkicon}
              lighticon={item.lighticon}
            />
          );
        })}
      </ul>
      <div className=" d-none d-lg-flex align-items-center column-gap-3 my-3 ">
        <h1
          className=" m-0 fw-medium"
          style={{
            fontSize: "1rem",
          }}
        >
          You
        </h1>
        <img
          src={theme === "bg-black" ? arrow_light : arrow_dark}
          width={20}
          alt=""
        />
      </div>
      <div>
        <ul className="p-0 d-none d-lg-block">
          {sidebar_list2.map((item, index) => {
            return (
              <Listviwer
                name={item.name}
                darkicon={item.darkicon}
                lighticon={item.lighticon}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Pagerouter;
