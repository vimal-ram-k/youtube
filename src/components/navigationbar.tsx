import { useSelector } from "react-redux";
import Navbar from "./navbar";
import Searchbar from "./searchbar";
import { useEffect, useState } from "react";
import { RootState } from "../redux/store/store";

function Navigationbar() {
  const theme = useSelector((state: RootState) => {
    return state.ThemeContext.theme;
  });
  const [searchbarActive, setSearchbarActive] = useState<boolean>(false);
  function showSearchBar() {
    setSearchbarActive((prev) => !prev);
  }
  useEffect(() => {
    const searchbar = document.getElementById("search");

    searchbar?.addEventListener("click", showSearchBar);

    return () => {
      searchbar?.removeEventListener("click", showSearchBar);
    };
  }, [searchbarActive]);

  return (
    <div
      className=""
      style={{
        top: "0",
        height: "60px",
        position: "sticky",
        backgroundColor: theme === "bg-black" ? "black" : "white",
        zIndex: 1000,
      }}
    >
      {searchbarActive ? (
        <Searchbar display="d-flex" width="85dvw" callback={showSearchBar} />
      ) : (
        <Navbar />
      )}
    </div>
  );
}

export default Navigationbar;
