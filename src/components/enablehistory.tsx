import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store/store";

function Enablehistory() {
  const Theme = useSelector((state: RootState) => {
    return state.ThemeContext.theme;
  });
  return (
    <div
      className={Theme === "bg-black" ? "text-white" : "text-black"}
      style={{
        width: "400px",
        margin: "40px auto",
        padding: " 30px 5px",
        backgroundColor: `${Theme === "bg-black" ? "#2F2F2F" : "white"}`,
        borderRadius: "10px",
        textAlign: "center",
        border: "0.1px solid gray",
      }}
    >
      <h1 className=" my-2 fw-bold" style={{ fontSize: "1.2rem" }}>
        Your watch history is off
      </h1>
      <p className=" my-3" style={{ fontSize: "0.8rem" }}>
        You can change your setting at any time to get the latest videos
        tailored to you. <Link to="/">Learn more</Link>
      </p>
      <button
        className=" rounded-5 border-0 py-1 fw-medium"
        style={{
          width: "90%",
          backgroundColor: `${Theme === "bg-black" ? "gray" : "#D3D3D3"}`,
        }}
      >
        Update setting
      </button>
    </div>
  );
}

export default Enablehistory;
