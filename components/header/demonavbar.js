import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Grid, Hidden, Link, Container } from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { Link as ScrollLink } from "react-scroll";
import { StyledButton } from "../styled-button";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Navbar from "./navbar";
import Countup from "../home/Countup";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ResponsiveAppBar() {

    const contactno1 = "9820097046";


    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },

        animate: {
            x: 0,
            opacity: 1,
            transition: {

                duration: 1,
                staggerChildren: 0.1
            }
        },
        scrollbutton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }

    }

    return (

        <AppBar position="static"
         
        >
            <section style={{
                background: '#2f58b1', width: '100%', padding: 0, borderRadius: 0,
            }}>
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            "@media (min-width: 768px)": {
                                flexDirection: "row",
                            },
                        }}
                    >
                        <Hidden mdDown>
                            <Box
                                sx={{
                                    width: "100%",
                                    // maxHeight: 300,
                                    "@media (min-width: 768px)": {
                                        width: "70%",
                                    },
                                }}
                            >
                                <IconButton aria-label="phone" style={{ color: 'white' }}>
                                    {" "}
                                    <CallTwoToneIcon />
                                </IconButton>

                                <Link href={`tel:${contactno1}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white', marginRight: 10 }}>
                                        9820097046
                                    </a>
                                </Link>


                                {/* <Link  href={`tel:${contactno2}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                    9923708233

                                    </a>
                                </Link>{" "} */}
                                <IconButton aria-label="email" style={{ color: 'white' }}>
                                    <EmailTwoToneIcon />{" "}
                                </IconButton>
                                <Link
                                    href={`mailto:${'smilesolutions99@gmail.com'}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                        smilesolutions99@gmail.com
                                    </a>
                                </Link>
                            </Box>
                        </Hidden>
                        <Box
                            sx={{
                                width: "100%",
                                textAlign: {
                                    xs: "center",
                                    sm: "center",
                                    md: "right",
                                },
                                // textAlign: 'right',
                                "@media (min-width: 768px)": {
                                    width: "30%",
                                },
                            }}
                        >
                            <IconButton aria-label="facebook">
                                {" "}
                                <a
                                    href="https://www.facebook.com/smilesolutionsdental/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="facebook"
                                >
                                    <FacebookIcon sx={{ color: "white" }} />{" "}
                                </a>
                            </IconButton>

                            <IconButton aria-label="instagram">
                                <a
                                    href="https://www.instagram.com/smilesolution_15"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="instagram"
                                >
                                    <InstagramIcon
                                        sx={{ color: "white", Width: 30, Height: 30 }}
                                    ></InstagramIcon>
                                </a>
                            </IconButton>
                            <IconButton aria-label="youtube">
                                <a
                                    href="https://www.youtube.com/@SmileSolutionsBorivaliWest"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="youtube"
                                >
                                    <YouTubeIcon sx={{ color: "white" }}></YouTubeIcon>
                                </a>
                            </IconButton>
                            <IconButton aria-label="twitter">
                                <a
                                    href="https://x.com/SmileSolutionsB"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="twitter"
                                >
                                    <TwitterIcon sx={{ color: "white" }}></TwitterIcon>
                                </a>
                            </IconButton>
                            <IconButton aria-label="locationmapple">
                                <a
                                    href="https://www.mappls.com/lh3rnz"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="locationmapple"
                                >
                                    <LocationOnIcon sx={{ color: "white" }}></LocationOnIcon>
                                </a>
                            </IconButton>
                            <IconButton aria-label="justdial">
                                <a
                                    href="https://www.justdial.com/Mumbai/Smile-Solutions-Advanced-Dental-Care-And-Implant-Centre-Opp-Veer-Savarkar-Garden-Borivali-West/022PXX22-XX22-220610104828-V9E6_BZDET"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="justdial"
                                >
                                     <Image src="/images/jd.png" width={20} height={20} ></Image>
                                </a>
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
            </section>

            <section style={{
                padding: 3,
                background: 'rgba( 255, 255, 255, 1)',
                boxShadow: ' 0 10px 10px 1px #0000001f',
                backdropFilter: 'blur( 8px )',
                borderBottom: '1px solid #ffffff36',
                display: 'flex'
            }}>
                <Navbar />
            </section>
            
        </AppBar>
    );
}
export default ResponsiveAppBar;
