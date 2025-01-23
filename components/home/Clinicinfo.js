import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Drgallery from "./Drgallery";
import Heading from "./Heading";
import { headList1 } from "../constants/titlefile";
import { Box } from "@mui/material";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const fadeLeftVariants = {
  hidden: { opacity: 0, x: -100, y: 0 },
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
      id="aboutus"
      sx={{
        py: 5,
        backgroundColor:'white',
      }}
    >
      <Grid container spacing={0} alignItems="center" justifyContent="center">
        {/* Left Side - Gallery */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ py: 3 }}
          alignItems="center"
          justifyContent="center"
        >
          <motion.div
            variants={fadeLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Drgallery />
          </motion.div>
        </Grid>

        {/* Right Side - Text Content */}
        <Grid
          item
          xs={12}
          md={6}
          textAlign="justify"
          sx={{ px: { xs: 3, sm: 3, md: 5 } }}
          alignItems="center"
          justifyContent="center"
        >
          <motion.div
            className="textcontainer"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 600,
                borderLeft: "4px solid #01a6a2",
                paddingLeft: "10px",
                lineHeight: 1.5,
                color: "#2f58b1",
                textShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              A Legacy of Trust and Care
            </Typography>

            <Typography
              component="h1"
              sx={{
                fontSize: { sm: 18, md: 20 },
                fontWeight: 400,
                color: "primary.light",
                pb: 1,
                paddingLeft: "15px",
              }}
            >
              Serving our community since 2014 with pride.
            </Typography>

            <Typography sx={{ mt: 2, color: "#333" }}>
              Smile Solutions Advanced Dental Care and Implant Centre, a premier
              dental clinic in Borivali West, is dedicated to providing top-tier
              dental care tailored to meet the unique needs of each patient.
              Led by Dr. Heeral Chikhal, an MDS Prosthodontist and
              Implantologist, the clinic utilizes advanced technology and proven
              treatment protocols to ensure optimal outcomes.
              <br />
              <br />
              Joining her is Dr. Kalpesh Dey, an MDS Endodontist and Cosmetic
              Dentist, who specializes in root canal treatments and aesthetic
              enhancements. Together, they form a dynamic team that prioritizes
              patient comfort and satisfaction while delivering a wide range of
              services, from routine check-ups to complex dental implants. At
              Smile Solutions, you can expect a welcoming environment where
              your smile is the top priority. Experience the difference in
              dental care today!
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Clinicinfo;
