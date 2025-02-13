import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import StarIcon from "@mui/icons-material/Star"; // ✅ Import Star Icon

export default function Countup() {
  var Details = [
    { startnumber: "1000", numbers: "10600", title: "Happy Smiles" },
    { startnumber: "1", numbers: "13", title: "Experience Years" },
    { startnumber: "0", numbers: "5", title: "Google Ratings" },
  ];

  // Define the fade-up animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <Box>
      <motion.div
        className="textcontainer"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Grid container spacing={0} textAlign="center" sx={{ pt: 2, pb: 7, padding: 0 }}>
          {Details.map((item, i) => (
            <Grid item xs={6} sm={3} md={3} key={i}>
              <CountUp
                end={item.numbers}
                duration={5}
                start={item.startnumber}
                decimals={item.decimals ? item.decimals : 0}
                className="paras"
              />{" "}
              {/* ✅ Show Star Icon Only for Google Ratings */}
              {i === 2 ? (
                <StarIcon sx={{ color: "gold", fontSize: 24, }} />
              ) : (
                <span className="paras">+</span>
              )}

              <Typography
                variant="h6"
                sx={{ color: { xs: "white", sm: "primary.dark" }, cursor: "pointer", pb: 2 }}
              >
                {item.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}
