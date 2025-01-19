import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Drgallery from "./Drgallery";
import Heading from "./Heading";
import { headList1 } from "../constants/titlefile";
import { Box } from "@mui/material";


// Define the fade-up animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 100 },  // Initial state: invisible and below the viewport
  visible: {
    opacity: 1,
    y: 0,  // Moves up to its original position
    transition: {
      duration: 0.8, // Duration of the animation
      ease: 'easeInOut', // Easing function
    },
  },
};

const fadeLeftVariants = {
  hidden: { opacity: 0, x: -100, y: 0 }, // Fade from left
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Clinicinfo = () => {

  return (
    <Box
    id="treatments"
    sx={{ py: 3, backgroundColor: "white" }}
>
 
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      id="aboutus"
      sx={{ py: 8 }}
    >


      <Grid item xs={12} md={6} sx={{ p: 1 }} alignItems="center"
        justifyContent="center">
        <motion.div
          variants={fadeLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Optionally only animate once
        >
          <Drgallery />
        </motion.div>
      </Grid>

      {/* Right Side (Text Content) */}
      <Grid item xs={12} md={6} textAlign="justify" sx={{ p: 1 }} alignItems="center"
        justifyContent="center">
        <motion.div
          className="textcontainer"
          variants={fadeUpVariants}
          initial="hidden"         // Start in the hidden state
          whileInView="visible"    // Animate to the visible state when in view
          viewport={{ once: true }} // Optionally only animate once
        >

          <Typography
            variant="h1"
            sx={{
              // fontSize: { xs: 27, md: 33 },
              fontWeight: "600",
borderLeft:'4px solid #01a6a2',
paddingLeft: '10px',
lineHeight:1.5


            }}
          >
            A Legacy of Trust and Care

          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { sm: 18, md: 20 },
              fontWeight: "400",
              color: 'primary.light',
              pb: 1,
              paddingLeft: '15px',

            }}
          >
            Serving our community since 2014 with pride.

          </Typography>

          <Typography

            style={{
              marginTop: 4,
              marginBottom: 0,
              marginRight: 2

            }}
          >
            Smile Solutions Advanced Dental Care and Implant Centre, a premier dental clinic in Borivali West, is dedicated to providing top-tier dental care tailored to meet the unique needs of each patient. Led by Dr. Heeral Chikhal, an MDS Prosthodontist and Implantologist, the clinic utilizes advanced technology and proven treatment protocols to ensure optimal outcomes. Dr. Chikhal brings over 13+ years of experience in restorative and cosmetic dentistry, making her a trusted choice for patients seeking comprehensive care.
            <br /><br />
            Joining her is Dr. Kalpesh Dey, an MDS Endodontist and Cosmetic Dentist, who specializes in root canal treatments and aesthetic enhancements. Together, they form a dynamic team that prioritizes patient comfort and satisfaction while delivering a wide range of services, from routine check-ups to complex dental implants. At Smile Solutions, you can expect a welcoming environment where your smile is the top priority. Experience the difference in dental care today!
          </Typography>
        </motion.div>

      </Grid>

    </Grid>
    </Box>
    
  );
};

export default Clinicinfo;
