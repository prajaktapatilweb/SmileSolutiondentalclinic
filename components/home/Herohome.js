import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Grid, Hidden, Link, Container } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { StyledButton } from "../styled-button";
import Countup from "../home/Countup";

const MotionTypography = motion(Typography);

function Herohome() {
  

  const containerVariants = {
    initial: { opacity: 0, x: -500 },
    animate: { opacity: 1, x: 0, transition: { duration: 1, staggerChildren: 0.3 } },
  };

  const textVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <Box
     
      sx={{
        backgroundImage: {
          xs: `linear-gradient(rgba(1, 1, 1, 0.4), rgba(1, 1, 1, 0.4)), url("/images/clinic/clinic2.jpg")`,
          sm: `linear-gradient(rgba(1, 1, 1, 0.2), rgba(256, 256, 256, 0.2)), url("/images/headerback4.jpg")`,
          md: `url('/images/headerback4.jpg')`,
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        py:9,
       
      }}
    >
    
     

      {/* Hero Content */}
      <Box>
        <Grid container>
          <Grid
            item xs={12} md={7}
            sx={{
              backgroundColor: { xs: 'rgba(0, 0, 0, 0.4)', sm: 'white' },
              borderTopRightRadius: { xs: 2, sm: 50 },
              borderBottomRightRadius: { xs: 2, sm: 48 },
            //   mx: { xs: 0, sm: 5 },
              px: { xs: 2, sm: 4, md: 7 },
              py: { xs: 2, sm: 0 },
              mt: { xs: 0, sm: -1, md: 7 },
            }}
          >
            <motion.div
              initial="initial"
              animate="animate"
              variants={containerVariants}
            >
              <MotionTypography
  variants={textVariants}
  sx={{
    fontFamily: "Inter, sans-serif",
    fontWeight: '800',
    fontSize: { xs: '36px', sm: '50px' }, // Responsive font size
    letterSpacing: 1.5,
    lineHeight: 1.2,
    color: { xs: '#ffffff', sm: "black" },
    marginBottom: 1,
    mt:5
  }}
>
 Transforming Smiles Every Day


</MotionTypography>

              <Hidden smDown>
                <motion.h3
                  variants={textVariants}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: '400',
                    color: 'black',
                    fontSize: '20px'
                  }}
                >
                Top-Rated Dentist in Borivali West
                </motion.h3>
              </Hidden>

              <Countup />

              <Box sx={{ "& button": { mt: 3, mb: 7 } }}>
                <ScrollLink to="contactform" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton
                    color="white"
                    size="large"
                    variant="outlined"
                    sx={{
                      mb: { xs: 3, sm: 0 },
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
          <Grid item xs={12} md={5}></Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Herohome;
