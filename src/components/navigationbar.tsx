import Navbar from "./navbar";
import Searchbar from "./searchbar";
import { useEffect, useState } from "react";

function Navigationbar() {
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

  return searchbarActive ? (
    <Searchbar display="d-flex" width="80dvw" callback={showSearchBar} />
  ) : (
    <Navbar />
  );
}

export default Navigationbar;
