import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { menuItems } from "../../../router/navigation";
import { logOut } from "../../../../firebaseConfig";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const drawerWidth = 200;

function Navbar(props) {
  const navigate = useNavigate();
  const { logOutContext, user } = useContext(AuthContext);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logOut();
    logOutContext();
    navigate("/login");
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar />

      <List>
        {menuItems.map(({ id, path, title, Icon }) => {
          return (
            <Link key={id} to={path}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Icon sx={{ color: "whitesmoke" }} />
                  </ListItemIcon>
                  <ListItemText primary={title} sx={{ color: "whitesmoke" }} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}

        {user.rol === import.meta.env.VITE_ROL_ADMIN && (
          <Link to="dashboard">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary="Dashboard"
                  sx={{ color: "whitesmoke" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        )}

        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon sx={{ color: "whitesmoke" }} />
            </ListItemIcon>
            <ListItemText
              primary={"Cerrar sesion"}
              sx={{ color: "whitesmoke" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
        }}
      >
        <Toolbar
          sx={{ gap: "20px", display: "flex", justifyContent: "space-between" }}
        >
          <Link to="/" style={{ color: "whitesmoke" }}>
            Bazar-deco
          </Link>
          <IconButton
            color="secondary.primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon color="secondary.primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav" aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor={"right"}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1976d2",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
          width: "100%",
          minHeight: "100vh",
          padding: "0",
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}

export default Navbar;
