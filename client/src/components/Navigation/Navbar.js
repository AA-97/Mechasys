import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// Material UI
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Mechasys
          </Typography>
          <Link to="/" className={classes.navLink}>
            <Typography variant="h6">Home</Typography>
          </Link>
          <Link to="/contactUs" className={classes.navLink}>
            <Typography variant="h6">Contact us</Typography>
          </Link>
          <Link to="/about" className={classes.navLink}>
            <Typography variant="h6">About</Typography>
          </Link>
          <Link to="/nameList" className={classes.navLink}>
            <Typography variant="h6">Name List</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/" className={classes.menuLink}>
          <MenuItem onClick={handleClose} className={classes.menuItem}>
            Home
          </MenuItem>
        </Link>
        <Link to="/contactUs" className={classes.menuLink}>
          <MenuItem onClick={handleClose} className={classes.menuItem}>
            Contact us
          </MenuItem>
        </Link>
        <Link to="/about" className={classes.menuLink}>
          <MenuItem onClick={handleClose} className={classes.menuItem}>
            About
          </MenuItem>
        </Link>
        <Link to="/nameList" className={classes.menuLink}>
          <MenuItem onClick={handleClose} className={classes.menuItem}>
            Name List
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  appBar: {
    width: "100%",
    background: "#191970",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    width: "20%",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  title: {
    width: "20%",
    textAlign: "left",
    fontSize: "20",
    fontStyle: "italic",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menuLink: {
    textDecoration: "none",
    color: "#000",
  },
  menuItem: {
    [theme.breakpoints.up("md")]: {
      width: "25vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "40vw",
    },
  },
}));

export default Navbar;
