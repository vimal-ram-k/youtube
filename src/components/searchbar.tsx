import { useSelector } from "react-redux";
import search_dark from "../assets/navbar/search_dark.svg";
import search_light from "../assets/navbar/search_light.svg";
import mic_dark from "../assets/navbar/mic-dark.png";
import mic_light from "../assets/navbar/mic-light.png";

import { RootState } from "../redux/store/store";
import { useEffect, useRef } from "react";

function Searchbar() {
  const searchiconRef = useRef<HTMLImageElement | null>(null);
  const Theme = useSelector((state: RootState) => {
    return state.ThemeContext.theme;
  });

  const showSearchIcon = () => {
    if (searchiconRef.current) {
      searchiconRef.current.classList.remove("d-none");
      searchiconRef.current.classList.add("d-block");
    }

    const search_out_line = document.getElementById("searchbar-outline");
    if (search_out_line) {
      search_out_line.style.outline = "0.5px solid skyblue";
    }
  };

  const hideSearchIcon = () => {
    if (searchiconRef.current) {
      searchiconRef.current.classList.remove("d-block");
      searchiconRef.current.classList.add("d-none");
    }

    const search_out_line = document.getElementById("searchbar-outline");
    if (search_out_line) {
      search_out_line.style.outline = "";
    }
  };

  useEffect(() => {
    const searchbar = document.getElementById("searchbar");

    searchbar?.addEventListener("focusin", showSearchIcon);
    searchbar?.addEventListener("focusout", hideSearchIcon);
  });
  return (
    <div
      className=" d-md-flex d-none justify-content-between "
      style={{ width: "45dvw" }}
    >
      <div
        className=" d-flex align-items-center px-3 py-1  w-100"
        id="searchbar-outline"
        style={{
          border: "0.5px solid gray",
          borderRadius: "25px 0px 0px 25px ",
        }}
      >
        <img
          className=" d-none"
          src={Theme === "bg-black" ? search_light : search_dark}
          ref={searchiconRef}
          width={20}
          alt=""
        />
        <input
          type="text"
          placeholder="Search"
          id="searchbar"
          className=" px-1 bg-transparent border-0"
          style={{
            outline: "0px",
            color: Theme === "bg-black" ? "white" : "black",
          }}
        />
      </div>
      <div
        className="bg-secondary d-flex justify-content-center align-items-center "
        style={{ borderRadius: "0px 20px 20px 0px", width: "60px" }}
      >
        <img
          src={Theme === "bg-black" ? search_light : search_dark}
          width={25}
          alt=""
        />
      </div>

      <div
        className=" d-flex justify-content-center align-items-center bg-secondary"
        style={{
          width: "50px",
          borderRadius: "50%",
          margin: "0px 0px 0px 20px",
        }}
      >
        <img
          src={Theme === "bg-black" ? mic_light : mic_dark}
          width={25}
          alt=""
        />
      </div>
    </div>
  );
}

export default Searchbar;
