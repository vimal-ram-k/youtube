import axios from "axios";
const MoviesFetch = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGFlMTZkOTg1NDhhNmIyNzIxMjcwZTY4Mjc2YzliMiIsInN1YiI6IjY2NTU3ODMwMzJjNGIwNTM1NWEzNjdjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.It8r846KB1l6kzeC9pmlRx3EHukekIRmEAt8h2hSb4A",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data.results;
    })
    .catch(function (error) {
      console.error(error);
      return [];
    });
};

export default MoviesFetch;
export type returnresule = ReturnType<typeof MoviesFetch>;
