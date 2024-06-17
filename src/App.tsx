import "./App.css";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import Navigationbar from "./components/navigationbar";
import ThemeProvider from "./util/windows/theme";

import { useSelector } from "react-redux";
import { RootState } from "./redux/store/store";
import Banner from "./components/banner";
import Pagerouter from "./components/pagerouter";
import VideoList from "./components/videolist";
import { Outlet } from "react-router-dom";

function App() {
  ThemeProvider();
  const Context = useSelector((state: RootState) => {
    return state;
  });
  return (
    <div
      className={`${Context.ThemeContext.theme}`}
      style={{ width: "100%", height: "100%" }}
    >
      <Navigationbar />
      <div className=" d-flex">
        <Pagerouter />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
