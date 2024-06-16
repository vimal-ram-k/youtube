import { useSelector } from "react-redux";
import search_dark from "../assets/navbar/search_dark.svg";
import search_light from "../assets/navbar/search_light.svg";
import mic_dark from "../assets/navbar/mic-dark.png";
import mic_light from "../assets/navbar/mic-light.png";
import left_arrow_dark from "../assets/sidebar/left-arrow-dark.svg";
import left_arrow_light from "../assets/sidebar/left-arrow-light.svg";

import { RootState } from "../redux/store/store";
import { memo, useEffect, useRef } from "react";

type Props = {
  display: "d-flex" | "d-none";
  width: "45dvw" | "80dvw";
  callback?: () => void;
};

function Searchbar(props: Props) {
  const searchiconRef = useRef<HTMLImageElement | null>(null);
  const inpuRef = useRef<HTMLInputElement | null>(null);
  const Theme = useSelector((state: RootState) => {
    return state.ThemeContext.theme;
  });

  const showSearchIcon = () => {
    if (searchiconRef.current) {
      searchiconRef.current.classList.remove("d-none");
      searchiconRef.current.classList.add("d-block");
      inpuRef.current?.select();
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
    const searchbar = document.getElementById("searchbar-outline");
    const searchbarAutoHide = document.getElementById("search-bar-auto-hide");

    searchbar?.addEventListener("click", showSearchIcon);
    searchbar?.addEventListener("focusout", hideSearchIcon);

    window.innerWidth;

    return () => {
      searchbar?.removeEventListener("focusin", showSearchIcon);
      searchbar?.removeEventListener("focusout", hideSearchIcon);
    };
  });

  return (
    <div
      className={`d-md-flex ${props.display}  justify-content-lg-between justify-content-between `}
      style={{ width: props.width, margin: "10px auto" }}
      id="search-bar-auto-hide"
    >
      <img
        className=" d-lg-none"
        onClick={props.callback}
        style={{ transform: "translateX(-30px)" }}
        src={Theme === "bg-black" ? left_arrow_light : left_arrow_dark}
        width={20}
        alt=""
      />
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
          ref={inpuRef}
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
        className="d-flex justify-content-center align-items-center "
        style={{
          border: "0.5px solid gray",
          borderRadius: "0px 20px 20px 0px",
          width: "70px",
          backgroundColor: Theme === "bg-black" ? "#383838" : "	#F0F0F0",
        }}
      >
        <img
          src={Theme === "bg-black" ? search_light : search_dark}
          width={25}
          alt=""
        />
      </div>

      <div
        className=" d-flex justify-content-center align-items-center"
        style={{
          width: "45px",
          borderRadius: "50%",
          margin: "0px 0px 0px 20px",
          backgroundColor: Theme === "bg-black" ? "#383838" : "	#F0F0F0",
        }}
      >
        <img
          src={Theme === "bg-black" ? mic_light : mic_dark}
          width={20}
          alt=""
        />
      </div>
    </div>
  );
}

export default memo(Searchbar);
