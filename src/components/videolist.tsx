import { useEffect, useState } from "react";
import MoviesFetch from "../assets/axios/moviesfetch";
import "../style/navbar.css";
const VideoList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const dataFetch = await MoviesFetch();
      console.log(dataFetch);
      setData(dataFetch);
    };
    fetch();
  }, []);

  return (
    <div className="col-12 col-md-9">
      <ul className=" p-0 m-0 d-flex flex-wrap justify-content-center gap-2">
        {data.map((item) => {
          return (
            <li className=" video-list list-unstyled">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                width={200}
              />
            </li>
          );
        })}
        {data.map((item) => {
          return (
            <li className=" video-list list-unstyled">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                width={200}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VideoList;
