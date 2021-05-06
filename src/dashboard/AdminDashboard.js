import React, { useState } from "react";
import clsx from "clsx";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import MailIcon from "@material-ui/icons/Mail";
import AddStudent from "./AddUserForms/AddStudent";
import AddAdmin from "./AddUserForms/AddAdmin";
import AddTeacher from "./AddUserForms/AddTeacher";
import Table from "./Table";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import StorefrontIcon from "@material-ui/icons/Storefront";
import TableChartOutlinedIcon from "@material-ui/icons/TableChartOutlined";
import PieChartIcon from "@material-ui/icons/PieChart";
import FormatAlignCenterOutlinedIcon from "@material-ui/icons/FormatAlignCenterOutlined";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SearchIcon from "@material-ui/icons/Search";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import ReactFullscreen from "react-easyfullscreen";

import "./Dashboard.css";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 25,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function AdminDashboard() {
  const [screen, setScreen] = useState(false);
  const [search, setSearch] = useState(false);
  const Screen = () => {
    setScreen(!screen);
  };
  const Search = () => {
    setSearch(!search);
  };
  const classes = useStyles();
  const theme = useTheme();
  const [Icon, setIcon] = useState(false);

  const FullScreenClick = () => {
    setIcon(!Icon);
  };

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  // const [state, setState] = useState();
  const [active, setActive] = React.useState("ShowUsersTable");
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // setState({ ...state, [anchor]: open });
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <Link to="/adminlogin" style={{ textDecoration: "none" }}>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <ReactFullscreen>
      {({ onExit, onRequest }) => (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <img
                src="Images/logo.png"
                alt="Kids Galaxy"
                style={{ height: "auto", width: "180px" }}
              />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>

              <div className="appBar__links">
                {!search && (
                  <SearchIcon
                    color="#fff"
                    fontSize="medium"
                    onClick={Search}
                    style={{ cursor: "pointer" }}
                  />
                )}
                {search && (
                  <div className="search">
                    <input
                      type="text"
                      className="form-control border-0 shadow-none"
                      placeholder="Search here"
                    />
                    <button
                      type="button"
                      className="close"
                      aria-label="Close"
                      onClick={() => setSearch(false)}
                    >
                      <span aria-hidden="true">x</span>
                    </button>
                  </div>
                )}
                {!screen && (
                  <FullscreenIcon
                    className="screen"
                    color="#fff"
                    style={{ cursor: "pointer" }}
                    fontSize="medium"
                    onClick={() => {
                      onRequest();
                      Screen();
                    }}
                  />
                )}
                {screen && (
                  <FullscreenExitIcon
                    onClick={() => {
                      onExit();
                      Screen();
                    }}
                    className="screen"
                    color="#fff"
                    style={{ cursor: "pointer" }}
                    fontSize="medium"
                  />
                )}
              </div>

              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton> */}
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <img
                    src="Images/profile.jpg"
                    className="appbar__profile"
                    alt="My Profile"
                  />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>

          {renderMobileMenu}
          {renderMenu}

          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem>
                <ListItemIcon>
                  <StorefrontIcon style={{ color: "#e91e63" }} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
                <ArrowForwardIosIcon
                  style={{
                    color: "#9e9e9e",
                    fontSize: "medium",
                    marginTop: "-2px",
                  }}
                  fontSize="small"
                />
              </ListItem>
            </List>
            <List>
              <ListItem button onClick={() => setActive("ShowUsersTable")}>
                <ListItemIcon>
                  <PermIdentityIcon style={{ color: "#3f51b5" }} />
                </ListItemIcon>
                <ListItemText primary="Users" />
                <ArrowForwardIosIcon
                  style={{
                    color: "#9e9e9e",
                    fontSize: "medium",
                    marginTop: "-2px",
                  }}
                  fontSize="small"
                />
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon>
                  <FormatAlignCenterOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Forms" />
                <ArrowForwardIosIcon
                  style={{
                    color: "#9e9e9e",
                    fontSize: "medium",
                    marginTop: "-2px",
                  }}
                  fontSize="small"
                />
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon>
                  <TableChartOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Tables" />
                <ArrowForwardIosIcon
                  style={{
                    color: "#9e9e9e",
                    fontSize: "medium",
                    marginTop: "-2px",
                  }}
                  fontSize="small"
                />
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PieChartIcon />
                </ListItemIcon>
                <ListItemText primary="Charts" />
                <ArrowForwardIosIcon
                  style={{
                    color: "#9e9e9e",
                    fontSize: "medium",
                    marginTop: "-2px",
                  }}
                  fontSize="small"
                />
              </ListItem>
            </List>
            {/* <Divider /> */}
            {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AddCircleOutlineOutlinedIcon />}
              onClick={() => setActive("AddStudent")}
            >
              Student
            </Button>

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AddCircleOutlineOutlinedIcon />}
              onClick={() => setActive("AddTeacher")}
            >
              Teacher
            </Button>

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AddCircleOutlineOutlinedIcon />}
              onClick={() => setActive("AddAdmin")}
            >
              Admin
            </Button>

            {active === "ShowUsersTable" && <Table />}
            {active === "AddStudent" && <AddStudent />}
            {active === "AddTeacher" && <AddTeacher />}
            {active === "AddAdmin" && <AddAdmin />}
          </main>
        </div>
      )}
    </ReactFullscreen>
  );
}
