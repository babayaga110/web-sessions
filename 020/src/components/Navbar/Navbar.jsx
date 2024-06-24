import * as React from "react";
import { Avatar, Box, Input, List, ListItem, ListItemButton } from "@mui/joy";
import { Dashboard, Notifications, Search } from "@mui/icons-material";
export default function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <List
        role="menubar"
        orientation="horizontal"
        sx={{
          "--List-radius": "8px",
          "--List-padding": "4px",
          "--List-gap": "8px",
          "--ListItem-gap": "0px",
          maxWidth: "fit-content",
        }}
      >
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            sx={{
              color: "#fff",
            }}
            component="a"
            href="#navigation-menu"
          >
            Movies
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            sx={{
              color: "#fff",
            }}
            component="a"
            href="#navigation-menu"
          >
            Series
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            sx={{
              color: "#fff",
            }}
            component="a"
            href="#navigation-menu"
          >
            Animation
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            sx={{
              color: "#fff",
            }}
            component="a"
            href="#navigation-menu"
          >
            Genres
          </ListItemButton>
        </ListItem>
      </List>

      <Input
        startDecorator={<Search color="inherit" />}
        placeholder="Search…"
        variant="outlined"
        sx={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#0B0B0B",
          color : "#fff",
          border:0
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          color: "#fff"
        }}
      >
        <Notifications color="inherit"/>
        <Dashboard color="inherit"/>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" size="sm" />
      </Box>
    </Box>
  );
}
