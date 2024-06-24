import * as React from "react";
import { Card, CardContent, CardCover, Typography } from "@mui/joy";
import moment from "moment";
import { Movie } from "@mui/icons-material";

export default function CardUpcomings({ movie, index }) {
  return (
    <Card
      sx={{
        minHeight: "220px",
        border: 0,
        overflow: "hidden",
        backgroundColor: "unset",
      }}
    >
      <CardCover>
        <img
          src={`${import.meta.env.VITE_APP_IMAGE_URL}/w300${
            movie?.backdrop_path
          }`}
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography level="title-lg" textColor="#fff">
          {movie?.title}
        </Typography>
        <Typography textColor="neutral.300" startDecorator={<Movie />}>
          {moment(movie?.release_date).format("ll")}
        </Typography>
      </CardContent>
    </Card>
  );
}
