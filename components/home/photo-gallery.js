import React from "react";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import Container from "@mui/material/Container";
import { useTheme, styled } from "@mui/material/styles";
import {  useMediaQuery } from "@mui/material";
import PhotoCardItem from "../course/photo-card-item";
import { motion} from "framer-motion";
import Heading from "./Heading";
import { headList4 } from "../constants/titlefile";


const StyledDots = styled("ul")(({ theme }) => ({
  "&.slick-dots": {
    position: "relative",
    left: 0,
    paddingLeft: theme.spacing(1),
    textAlign: "center",
    marginBottom:35,
   
    "& li": {
      marginRight: theme.spacing(1),
    
      "&.slick-active>div": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));
const Photogallery = () => {
  const { breakpoints } = useTheme();
   // Breakpoints for screen sizes
   const matchMobileView = useMediaQuery(breakpoints.down("sm"));  // xs or smaller
   const matchSmallView = useMediaQuery(breakpoints.between("sm", "md"));  // between sm and md
   const matchMediumView = useMediaQuery(breakpoints.up("md"));  // md and above
  // const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const sliderConfig = {
    infinite: true,
    autoplay: true,
    arrows:false,
    adaptiveheight: false,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : matchSmallView ? 2 : 3, // 1 slide for xs, 2 for sm, 3 for md+
    // slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box
        sx={{
          height: 20,
          width: 20,
          backgroundColor: "divider",
          display: "flex",
          borderRadius: 4,
         
      
        }}
      />
    ),
  };

   // Define the fade-up animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 120 },  // Initial state: invisible and below the viewport
  visible: { 
    opacity: 1, 
    y: 0,  // Moves up to its original position
    transition: {
      duration: 0.9, // Duration of the animation
      ease: 'easeInOut', // Easing function
    },
  },
};
  return (
    <motion.div
    className="textcontainer"
    variants={fadeUpVariants}
    initial="hidden"         // Start in the hidden state
    whileInView="visible"    // Animate to the visible state when in view
    viewport={{ once: true }} // Optionally only animate once
  >
    <section id="gallery">




  {/* Photo Gallery Content */}
  <Box sx={{ paddingTop: "70px" }}>
    <Container maxWidth="lg">
   <Heading data={headList4}/>
     
      {/* Slider */}
      <Slider {...sliderConfig}>
        {[...Array(13)].map((_, i) => (
          <PhotoCardItem key={i} item={i + 1} />
        ))}
      </Slider>
    </Container>
  </Box>
</section>

    </motion.div>
  );
};
export default Photogallery;
