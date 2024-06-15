import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { setTheme } from "../../redux/slices/themeslice";
const ThemeProvider = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme:dark)");

    function handleTheme() {
      console.log(mediaQuery);
      const theme = mediaQuery.matches ? "bg-black" : "";
      console.log(theme);
      dispatch(setTheme(theme));
    }
    mediaQuery.addEventListener("change", handleTheme);
    handleTheme();

    return () => {
      mediaQuery.removeEventListener("change", handleTheme);
    };
  }, [dispatch]);
};

export default ThemeProvider;
