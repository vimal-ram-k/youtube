import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

type listType = {
  name: string;
  darkicon: string;
  lighticon: string;
};

const Listviwer = (props: listType) => {
  const theme = useSelector((state: RootState) => {
    return state.ThemeContext.theme;
  });
  return (
    <Link
      to={
        props.name === "Home"
          ? "/"
          : props.name === "Subcriptions"
          ? `/feed/subcriptions`
          : `/${props.name.toLocaleLowerCase()}`
      }
      className=" text-decoration-none"
      style={{ color: theme === "bg-black" ? "white" : "black" }}
    >
      <li className=" d-flex align-items-center column-gap-3 py-2">
        <img
          src={theme === "bg-black" ? props.lighticon : props.darkicon}
          width={25}
          alt=""
        />
        <h1
          className="m-0 fw-light "
          style={{
            fontSize: "0.8rem",
          }}
        >
          {props.name}
        </h1>
      </li>
    </Link>
  );
};

export default Listviwer;
