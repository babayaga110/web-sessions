import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import TopRate from "./components/Sections/TopRate";
import axios from "axios";
import Upcoming from "./components/Sections/Upcoming";

function App() {
  React.useEffect(() => {
    const url = `${
      import.meta.env.VITE_APP_API_URL
    }genre/movie/list?language=en`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_APP_BEARER}`,
      },
    };
    const fetchData = async () => {
      await axios
        .get(url, options)
        .then(function (response) {
          window.localStorage.setItem("genres", JSON.stringify(response?.data?.genres));
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <TopRate />
      <Upcoming />
    </>
  );
}

export default App;
