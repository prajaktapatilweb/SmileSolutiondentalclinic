import React, { useState } from "react";

import { KeyboardArrowDown } from "@mui/icons-material";
import {
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
    useMediaQuery,
    Container,
    Menu,
    MenuItem,
    Button,
    Box,
    Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    { linkID: "/#home", label: "Home" },
    { linkID: "/#aboutus", label: "About Us" },
    {
        linkID: "/#treatments",
        label: "Treatments",
        subGroup: [
              { label: "Dental Implants", linkID: "/services/dental-implants-in-borivali-west" },
            { label: "Root Canal", linkID: "/services/root-canal-treatment-in-borivali-west" },
            { label: "Dental Veneers", linkID: "/services/dental-veneers-in-borivali-west" },
            { label: "Braces & Aligners", linkID: "/services/braces-and-aligners-in-borivali-west" },
            { label: "Pediatric Dentist", linkID: "/services/pediatric-dentist-in-borivali-west" },
            { label: "Teeth Whitening", linkID: "/services/teeth-whitening-in-borivali-west" },
            { label: "Full Mouth Rehabilitation", linkID: "/services/full-mouth-rehabilitation-in-borivali-west"},
        ],
    },
    { linkID: "/#Doctors", label: "Doctors" },
    { linkID: "/#gallery", label: "Gallery" },
    { linkID: "/#testimonials", label: "Testimonials" },
    { linkID: "/blog", label: "Blog" },
    { linkID: "/#contactform", label: "Contact" },
];

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return React.cloneElement(children, {
        style: {
            transform: trigger ? "translateY(-100%)" : "translateY(0)",
            transition: "transform 0.3s",
        },
    });
}

export default function Navbar(props) {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

    const toggleDrawer = (open) => () => {
        setOpenDrawer(open);
    };

    const handleSubMenuClick = () => {
        setOpenSubMenu(!openSubMenu);
    };

    const handleCloseNavMenu = () => {
        setOpenDrawer(false);
        setAnchorElNav(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const renderMenu = (
        <List>
            {navItems.map((item) => (
                <React.Fragment key={item.label}>
                   {item?.subGroup ? (
  <>
    <ListItem
      button
      onClick={handleSubMenuClick}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 600,
        color: 'black',
      }}
    >
      <ListItemText
        primary={item.label}
        primaryTypographyProps={{
          fontSize: '1rem',
          fontWeight: 'bold',
          letterSpacing : '.1rem',
        }}
      />
      <KeyboardArrowDown
        style={{
          transition: "transform 0.3s",
          transform: openSubMenu ? "rotate(180deg)" : "rotate(0deg)",
        }}
      />
    </ListItem>

    <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {item?.subGroup.map((item2) => (
          <Link
            key={item2.label}
            href={item2.linkID}
            onClick={handleCloseNavMenu}
            style={{ textDecoration: "none", color: "inherit", width: "100%" }}
          >
            <ListItem
              button
              sx={{
                pl: 6,
                py: 1,
                fontSize: "0.95rem",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              <ListItemText primary={item2.label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Collapse>
  </>
) : (
  <Link
    href={item.linkID}
    style={{
      fontWeight: 800,
      letterSpacing: ".1rem",
      color: "black",
      textDecoration: "none",
      textAlign: "center",
      width: "100%",
    }}
  >
    <ListItem button>
      <ListItemText
        primary={item.label}
        primaryTypographyProps={{
          fontSize: '1rem',
          fontWeight: 'bold',
        }}
      />
    </ListItem>
  </Link>
)}

                </React.Fragment>
            ))}
        </List>
    );

    return (
        <>
            <HideOnScroll {...props}>
                <Container>
                    <Toolbar>
                        {!isLargeScreen && (
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                                <MenuIcon style={{ color: "black" }} />
                            </IconButton>
                        )}
                        <Box sx={{ flexGrow: 1, textAlign: { xs: "right", sm: "right", md: "left", lg: "left" } }}>
                            <a href="/">
                                <Image src="/images/logosmile1.png" width={130} height={80} style={{ filter: "drop-shadow(0px 1px 0px lightgrey)", cursor: "pointer" }} />
                            </a>
                        </Box>
                        {isLargeScreen && (
                            <Box sx={{ flexGrow: 0 }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    {navItems.map((page) => (
                                        <React.Fragment key={page.label}>
                                            {page?.subGroup ? (
                                                <Box sx={{ flexGrow: 0 }}>
                                                    <Button
                                                        onClick={handleOpenUserMenu}
                                                        sx={{ my: 2, color: "#28282B", display: "flex", alignItems: "center", textTransform: "initial", fontSize: "16px", letterSpacing: 1 }}
                                                    >
                                                        {page.label}
                                                        <KeyboardArrowDown fontSize="small" />
                                                    </Button>
                                                    <Menu
                                                        sx={{ mt: "45px" }}
                                                        id="menu-appbar"
                                                        anchorEl={anchorElUser}
                                                        anchorOrigin={{
                                                            vertical: "top",
                                                            horizontal: "right",
                                                        }}
                                                        keepMounted
                                                        transformOrigin={{
                                                            vertical: "top",
                                                            horizontal: "right",
                                                        }}
                                                        open={Boolean(anchorElUser)}
                                                        onClose={handleCloseUserMenu}
                                                    >
                                                        {page?.subGroup.map((setting) => (
                                                            <Link key={setting.label} href={setting.linkID} style={{ textDecoration: "none", color: "inherit" }}>
                                                                <MenuItem onClick={handleCloseUserMenu}>
                                                                    <span style={{ textAlign: "center" }}>{setting.label}</span>
                                                                </MenuItem>
                                                            </Link>
                                                        ))}
                                                    </Menu>
                                                </Box>
                                            ) : (
                                                <Link href={page.linkID} style={{ textDecoration: "none" }}>
                                                    <Button
                                                        key={page.label}
                                                        onClick={handleCloseNavMenu}
                                                        sx={{ color: "#28282B", display: "block", textTransform: "initial", fontSize: "16px", letterSpacing: 1 }}
                                                    >
                                                        {page.label}
                                                    </Button>
                                                </Link>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </Box>
                            </Box>
                        )}

                    </Toolbar>
                </Container>
            </HideOnScroll>

            {!isLargeScreen && (
                <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
                    {renderMenu}
                </Drawer>
            )}
        </>
    );
}
