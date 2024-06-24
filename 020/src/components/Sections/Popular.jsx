import { Box, Typography } from "@mui/joy";
import * as React from "react";
import CardTop from "../Cards/CardTop";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";

export default function Popular() {
  const [popularMovies, setPopularMovies] = React.useState([]);

  React.useEffect(()=>{
    const fetchPopularMovies = async () => {
      const header = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_APP_BEARER}`
        }
      };
      
      const url = `${import.meta.env.VITE_APP_BASE_URL}/movie/popular?language=en-US&page=1`
      const response = await axios.get(url, header)
      .then(function (response) {
        setPopularMovies(response?.data?.results);
        console.log(response?.data?.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });    
    }

    fetchPopularMovies();

  },[])

  return (
    <Box>
      <Typography level="h3" color="inherit" gutterBottom>
        Popular Movies
      </Typography>
      <Swiper
        navigation={false}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        style={{ width: "100%", py: 2 }}
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
        {popularMovies?.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              padding: "20px 30px",
            }}
          >
            <CardTop movie={item} index={index}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
