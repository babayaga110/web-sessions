import * as React from "react";
import Favorite from "@mui/icons-material/Favorite";
import CreateNewFolder from "@mui/icons-material/CreateNewFolder";
import {
  AspectRatio,
  Avatar,
  Box,
  Card,
  CardCover,
  Chip,
  IconButton,
  Typography,
  Link,
  Button,
} from "@mui/joy";
import { Movie, Star } from "@mui/icons-material";

export default function CardTop({ movie, index }) {
  const genres = JSON.parse(window.localStorage.getItem("genres"));
  const genre = genres?.filter((genre) => movie?.genre_ids.includes(genre.id));

  return (
    <Card
      variant="plain"
      sx={{
        p: 0,
        border: 0,
        backgroundColor: "unset",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <AspectRatio
          ratio="3/2"
          sx={{
            borderRadius: "10px",
          }}
        >
          <figure>
            <img
              src={`${import.meta.env.VITE_APP_IMAGE_URL}w300${
                movie?.backdrop_path
              }`}
              loading="lazy"
              alt="Yosemite by Casey Horner"
            />
          </figure>
        </AspectRatio>
        <CardCover>
          <div>
            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 1.5,
                flexGrow: 1,
                alignSelf: "flex-end",
              }}
            >
              {genre?.map((genre) => (
                <Chip
                  key={genre.id}
                  size="sm"
                  sx={{
                    bgcolor: "rgba(0 0 0 / 0.3)",
                    color: "#fff",
                    p: "0.25rem .75rem",
                  }}
                >
                  {genre.name}
                </Chip>
              ))}
            </Box>
          </div>
        </CardCover>
        <Typography
          level="title-lg"
          sx={{
            fontSize: "8rem",
            color: "#fff",
            position: "absolute",
            top: "50%",
            left: "-30px",
            transform: "translateY(-50%)",
          }}
        >
          {index + 1}
        </Typography>
      </Box>
      <Box
        sx={{
          color: "#fff",
        }}
      >
        <Typography level="title-lg" color="inherit" gutterBottom>
          {movie?.title}
        </Typography>
        <Typography
          startDecorator={
            <Star
              sx={{
                color: "#FFCD19",
              }}
              fontSize="inherit"
            />
          }
          color="inherit"
          level="title-md"
        >
          {movie?.vote_average}
        </Typography>
      </Box>
    </Card>
  );
}
