import { Container, Typography } from "@mui/joy";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import axios from "axios";
import CardUpcomings from "../Cards/CardUpcomings";

export default function Upcoming() {
    const [upcomingMovies, setUpcomingMovies] = React.useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_BEARER}`,
    },
  };

  React.useEffect(() => {
    const url = `${import.meta.env.VITE_APP_API_URL}movie/upcoming?language=en-US&page=1`;
    const fetchData = async () => {
      await axios.get(url, options)
      .then(function (response) {
        setUpcomingMovies(response?.data?.results);
        console.log(response?.data?.results);
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
    <Container
      maxWidth="xl"
      sx={{
        mt: 5,
      }}
    >
      <Typography level="h3" color="inherit" gutterBottom>
        Upcoming Movies
      </Typography>
      <Swiper
        navigation={false}
        pagination={{
          dynamicBullets: true,
        }}
        // modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        style={{ width: "100%", py: 2,  }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {upcomingMovies?.map((item, i) => (
          <SwiperSlide
            key={i + 1}
            style={{
                paddingTop:"20px",
                paddingBottom:"20px"
            }}
          >
            <CardUpcomings index={i} movie={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
