import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Drgallery from "./Drgallery";
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
        py: 10,
        backgroundColor:'white',
      }}
    >
        <Grid
          container
          spacing={0}
        >
        {/* Left Side - Gallery */}
                 {/* Left Side - Gallery */}
                 <Grid
            item
            xs={12}
            md={6}
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
          sx={{ px: { xs: 3, sm: 3, md: 2 } ,mt:{xs:3,sm:4,md:1}}}
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

            <Typography sx={{ mt: 2, color: "#333"}}>
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

              <br/> <br/>
              <span sx={{lineHeight:1.6 }}>
<b>Pain-Free Dentistry:</b> We offer gentle, stress-free treatments designed for all ages, ensuring a comfortable experience.<br/>
<b>Convenient Hours:</b>  Extended and weekend appointments.<br/>
<b>Family-Friendly:</b>  We provide a full range of dental services suitable for every family member, from children to seniors.<br/>
<b>Transparent Costs: </b> Enjoy clear cost estimates with no hidden fees, allowing you to plan your dental care without surprises.<br/>
<b>Eco-Friendly Practices:</b>Our commitment to sustainability includes digital records and recyclable materials, promoting a healthier planet.
<br/>
<b>Custom Smiles:</b> We specialize in customized cosmetic services that enhance your unique smile, delivering stunning results tailored to your preferences.<br/>
</span>
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Clinicinfo;
