import "./App.css";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import Navigationbar from "./components/navigationbar";
import ThemeProvider from "./util/windows/theme";

import { useSelector } from "react-redux";
import { RootState } from "./redux/store/store";
import Enablehistory from "./components/enablehistory";
function App() {
  ThemeProvider();
  const Context = useSelector((state: RootState) => {
    return state;
  });
  return (
    <div
      className={`${Context.ThemeContext.theme}`}
      style={{ width: "100dvw", height: "100dvh" }}
    >
      <Navigationbar />
      {!Context.HistoryState.history && <Enablehistory />}
    </div>
  );
}

export default App;
