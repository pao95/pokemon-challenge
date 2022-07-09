import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import pokemon from "../../pokemon.svg";

interface HideOnScrollI {
  window?: () => Window;
  children: React.ReactElement;
}
const HideOnScroll = ({ children, window }: HideOnScrollI) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
const Navbar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <HideOnScroll>
        <AppBar component="nav">
          <Toolbar>
            <Box sx={{ flexGrow: 1, height: "50px" }}>
              <img
                src={pokemon}
                style={{ height: "70px", maxWidth: "100%", zIndex: "100" }}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }} />

            <Link
              to="/home"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Home
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
};

export default Navbar;
