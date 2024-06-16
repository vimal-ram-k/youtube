import menu from "../assets/navbar/menu-light.svg";
import menu_light from "../assets/navbar/menu-bar-light.svg";
import youtube from "../assets/navbar/youtube-logo.svg";
import mic_dark from "../assets/navbar/mic-dark.png";
import mic_light from "../assets/navbar/mic-light.png";
import search_light from "../assets/navbar/search_light.svg";
import search_dark from "../assets/navbar/search_dark.svg";
import camera_light from "../assets/navbar/camera-light.png";
import camera_dark from "../assets/navbar/camera-dark.png";
import notification_light from "../assets/navbar/notification-light.png";
import notification_dark from "../assets/navbar/notification-dark.png";
import user_dark from "../assets/navbar/user-profile-dark.png";
import user_light from "../assets/navbar/user-profile-light.png";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import Searchbar from "./searchbar";

function Navigationbar() {
  const theme = useSelector((state: RootState) => {
    return state.ThemeContext.theme;
  });

  const menu_list = [
    {
      name: "search",
      darkicon: search_dark,
      lighticon: search_light,
    },
    {
      name: "mic",
      darkicon: mic_dark,
      lighticon: mic_light,
    },
    {
      name: "camera",
      darkicon: camera_dark,
      lighticon: camera_light,
    },
    {
      name: "notification",
      darkicon: notification_dark,
      lighticon: notification_light,
    },
    {
      name: "user",
      darkicon: user_dark,
      lighticon: user_light,
    },
  ];
  return (
    <div
      className=" d-flex align-items-center justify-content-between px-4"
      style={{
        height: "50px",
        color: theme === "bg-black" ? "#ffff" : "#0000",
      }}
    >
      <div className=" d-flex align-items-center">
        <div>
          <img
            src={theme === "bg-black" ? menu_light : menu}
            width={25}
            alt=""
          />
        </div>
        <div className=" ms-4 d-flex align-items-center position-relative">
          <img src={youtube} width={35} alt="" />
          <h1
            className="m-0 p-0"
            style={{
              fontSize: "1rem",
              color: theme === "bg-black" ? "#ffff" : "black",
            }}
          >
            Youtube
          </h1>
          <sup
            className=" position-absolute"
            style={{
              color: "gray",
              fontWeight: "normal",
              fontSize: "0.8rem",
              top: "13px",
              right: "-15px",
            }}
          >
            IN
          </sup>
        </div>
      </div>
      <Searchbar />
      <div>
        <ul className=" d-flex align-items-center p-0 m-0 column-gap-4 me-3">
          {menu_list.map((item, index) => {
            return (
              <li
                key={item.name + index}
                className={
                  item.name === "notification"
                    ? "position-relative list-unstyled"
                    : "list-unstyled" && item.name === "search"
                    ? "d-md-none list-unstyled"
                    : "d-block list-unstyled" && item.name === "mic"
                    ? "d-md-none list-unstyled"
                    : "d-block list-unstyled"
                }
              >
                <img
                  src={theme === "bg-black" ? item.lighticon : item.darkicon}
                  width={20}
                  alt=""
                />
                {item.name === "notification" && (
                  <h1
                    className=" position-absolute text-center rounded-5"
                    style={{
                      top: "-5px",
                      right: "-5px",
                      fontSize: "0.75rem",
                      color: "white",
                      width: "15px",
                      height: "15px",
                      backgroundColor: "red",
                    }}
                  >
                    9
                  </h1>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navigationbar;
