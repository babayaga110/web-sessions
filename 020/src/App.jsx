import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import TopRated from "./components/Sections/TopRated";
import Upcoming from "./components/Sections/Upcoming";
import Popular from "./components/Sections/Popular";
import { Box } from "@mui/joy";
import axios from "axios";

function App() {
  React.useEffect(() => {
    const header = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_APP_BEARER}`,
      },
    };
    const fetchData = async () => {
      const url = `${
        import.meta.env.VITE_APP_BASE_URL
      }/genre/movie/list?language=en`;
      const response = await axios
        .get(url, Headers)
        .then(function (response) {
          window.localStorage.setItem(
            "genres",
            JSON.stringify(response?.data?.genres)
          );
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {});
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          my: 3,
          px: 3,
        }}
      >
        <TopRated />
        <Upcoming />
        <Popular />
      </Box>
    </>
  );
}

export default App;
