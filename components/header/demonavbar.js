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

        <AppBar
            position="static"
            sx={{
                backgroundImage: { xs: `linear-gradient(rgba(1, 1, 1, 0.4), rgba(1, 1, 1, 0.4)), url("/images/clinic/clinic2.jpg")`, sm: `linear-gradient(rgba(1, 1, 1, 0.2), rgba(256, 256, 256, 0.2)), url("/images/headerback4.jpg")`, md: ` url('/images/headerback4.jpg')` },
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: 'center',

            }}
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
            <Box sx={{ my: { xs: 0, sm: 7, md: 7 } }}>
                {/* <Container> */}
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    textAlign="left"

                >
                    <Grid
                        item
                        xs={12}
                        md={7}
                        sx={{
                            backgroundColor: { xs: 'rgba(0, 0, 0, 0.4)', sm: 'white' }, // Black color with 50% transparency
                            borderTopRightRadius: { xs: 2, sm: 50, md: 50 },
                            borderBottomRightRadius: { xs: 2, sm: 50, md: 50 },
                            mx: { xs: 0, sm: 5, md: 0 },
                            px: { xs: 2, sm: 4, md: 7 },
                            py: { xs: 2, sm: 0 },
                            mt: { xs: 0, sm: -1, md: 6 },
                        }}
                    >
                        <motion.div className="textcontainer" variants={textVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <Box sx={{
                                position: "relative",
                                fontSize: { xs: '24px', sm: '29px', md: '33px' },
                                letterSpacing: 1.5,

                                color: { xs: '#ffffff', sm: "black" },
                                lineHeight: 1.2,
                                mb: -2,
                                // '-webkit-text-stroke': '1px #28282B',


                            }}>
                                <motion.h2 variants={textVariants} style={{ fontFamily: "Inter, sans-serif", fontWeight: '800', }} >
                                    Transforming Smiles Every Day
                                </motion.h2>

                            </Box>
                            <Hidden smDown>
                            <motion.h3 variants={textVariants} style={{ fontFamily: "Inter, sans-serif", fontWeight: '400',color:'black',fontSize:'20px' }} >
                            Top-Rated Dental Clinic in Borivali West
                                </motion.h3>
                                </Hidden>
                            <Countup />
                            <Box sx={{ "& button": { mt: 3, mb: 7, } }}>
                                <ScrollLink
                                    to="contactform"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={350}
                                >
                                    <StyledButton
                                        color="white"
                                        size="large"
                                        variant="outlined"
                                        sx={{
                                            mb: { xs: 3, sm: 0, md: 0 },
                                            fontSize: 22,
                                            mx: 2,
                                            borderRadius: 2,
                                            backgroundColor: 'primary.light',
                                            fontWeight: 600,
                                            color: "white",
                                        }}
                                    >
                                        Enquire Now
                                    </StyledButton>
                                </ScrollLink>
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={5}>
                    </Grid>
                </Grid>
                {/* </Container> */}
            </Box>
        </AppBar>
    );
}
export default ResponsiveAppBar;
