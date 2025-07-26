import Head from "next/head";
import Navbar from "/components/header/navbar";
import Footer from "/components/footer/footer";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // ✅ Added missing import

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  Fade,
  Stack,
} from "@mui/material";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function DentalVeneers() {
  const ref2 = useRef(null);
  const inView2 = useInView(ref2, { once: true });

  return (
    <>
      <Head>
        <title>Dental Veneers in Borivali West | Veneers Near Me</title>
        <meta
          name="description"
          content="Transform your smile with dental veneers in Borivali West at Smile Solutions. Dr. Heeral Chikhal, your Porcelain Veneers Doctor, offers expert veneers treatment and transparent pricing."
        />
        <link rel="canonical" href="https://www.smilesolutionsclinic.com/services/dental-veneers-in-borivali-west"/>
      </Head>
      <Navbar />

      <Box
        sx={{
          position: "relative",
          py: 12,
          textAlign: "center",
          color: "white",
          backgroundImage: "url('/images/treatments/dental_veneers.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Fade in timeout={800}>
            <Box>
              <Typography
                variant="h3"
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontSize: { xs: "2rem", md: "3.5rem" },
                  color: "white",
                  textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                }}
              >
                Dental Veneers in Borivali West
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#f1f1f1",
                  fontStyle: "italic",
                  fontWeight: 300,
                  letterSpacing: "0.5px",
                  textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
                }}
              >
                Get the perfect smile with natural-looking veneers that last.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      <Container sx={{ py: 6 }}>
       
        <Typography variant="h6" paragraph>
         Are you dreaming of a perfect smile? Whether you're dealing with discoloration, chipped teeth, gaps, or slight misalignment, dental veneers in Borivali West can be the ideal cosmetic solution. At Smile Solutions, we specialize in designing natural-looking, custom veneers that enhance your smile and boost your confidence. Led by Dr. Heeral Chikhal (MDS – Prosthodontist & Implantologist) and overseen by Dr. Kalpesh Dey (MDS – Endodontist & Cosmetic Dentist), our clinic is committed to delivering exceptional aesthetic results with precision and care.
        </Typography>
  <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          What Are Dental Veneers?
         </Typography> 
             <Typography variant="h6" paragraph>
         Veneers are thin, custom-made shells designed to cover the front surface of your teeth, instantly improving their appearance. They are meticulously crafted to blend seamlessly with your natural teeth, correcting various imperfections and creating a harmonious, symmetrical smile. Veneers are a popular choice for a smile makeover, offering a durable and aesthetically pleasing solution.
</Typography>
        <Divider sx={{ my: 6 }} />

        <Fade in timeout={1000}>
          <Box>
            <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom mt={4}>
             Benefits of Choosing Veneers in Borivali West
            </Typography>
              <Typography variant="h6" paragraph>
            Opting for dental veneers in Borivali West at Smile Solutions provides numerous advantages for your smile and confidence:
           </Typography>
            <Grid container spacing={3} mt={1}>
              {[
                <span><b>Instant Smile Transformation:</b>  Corrects chips, cracks, gaps, stains, and minor misalignments for an immediate aesthetic upgrade."</span>,
                <span><b>Natural Appearance:</b>  Custom-made to match your existing teeth's color, shape, and size, ensuring a realistic and beautiful result."</span>,
                <span><b>Stain Resistance: </b> <b>Especially Porcelain Veneers in Borivali West</b> are highly resistant to staining from coffee, tea, and tobacco.</span>,
                <span><b>Durability:</b>  Veneers, particularly porcelain, are strong and can last for many years with proper care."</span>,
                <span><b>Minimally Invasive:</b> In many cases, only a small amount of enamel removal is needed."</span>,
                <span><b>Confidence Boost:</b>Achieve a confident, dazzling smile that enhances your overall appearance."</span>,
              ].map((benefit, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Typography variant="h6" display="flex" alignItems="top" gap={1}>
                    <CheckCircleIcon color="primary"  />
                    {benefit}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>

        <Divider sx={{ my: 6 }} />

<Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
  Types of Dental Veneers Available
</Typography>
 <Typography variant="h6" paragraph>
At Smile Solutions, we offer different types of veneers in Borivali West to suit various needs and budgets:
</Typography>

<Grid container spacing={4} mt={1}>
  {[
    {
      title: "Porcelain Veneers in Borivali West:",
      bullets: [
"Considered the gold standard in cosmetic dentistry.",
"Made from high-quality, durable ceramic in a dental lab.",
"Offer superior aesthetics, mimicking the translucency of natural tooth enamel.",
"Highly stain-resistant and long-lasting (typically 10-15+ years).",
<span>Ideal for significant aesthetic changes. We offer <b>Custom Ceramic Veneers in Borivali West</b> for a perfect fit.</span>,

      ],
    },
    {
      title: "Composite Veneers in Borivali West:",
      bullets: [
"Made from a tooth-colored resin material applied directly to the tooth.",
<span>More <b>affordable dental veneers in Borivali West</b> compared to porcelain.</span>,
<span>Can often be completed in a single visit <b>(Dental veneer treatment in Borivali West).</b></span>,
"Good for minor corrections and can be easily repaired. Less durable than porcelain (typically 4-8 years) and may be more prone to staining over time.",

      ],
    },
  ].map((item, i) => (
    <Grid item xs={12} sm={6} key={i}>
      <Paper
        elevation={4}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 3,
          backgroundColor: "rgba(240, 248, 255, 0.5)",
          backdropFilter: "blur(4px)",
          borderRadius: 2,
          transition: "transform 0.3s ease, boxShadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <div>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {item.title}
          </Typography>
          <ul style={{ paddingLeft: 0, marginTop: "0.5rem" }}>
            {item.bullets.map((point, idx) => (
              <li
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "6px",
                  listStyleType: "none",
                }}
              >
                <span
                  style={{
                    color: "#05a5a2",
                    fontWeight: "bold",
                    marginRight: "8px",
                  }}
                >
                  •
                </span>
                <span style={{ color: "#000" }}>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Paper>
    </Grid>
  ))}
</Grid>
 <Typography variant="h6" paragraph sx={{mt:3}}>
Our cosmetic dental team, including Dr. Heeral & Dr. Kalpesh, will discuss the pros and cons of each type to help you make an informed decision for your dental veneer treatment in Borivali West.
</Typography>
        <Divider sx={{ my: 6 }} />

        <Box ref={ref2}>
          {inView2 && (
            <Fade in={inView2} timeout={1000}>
              <Box>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color="primary"
                  gutterBottom
                >
                  The Dental Veneers Treatment Process at Smile Solutions

                </Typography>
                <Typography variant="h6"  gutterBottom>
                Our process for Dental Porcelain Veneers Treatment in Borivali West is meticulous and patient-focused:
</Typography>
                <Stack spacing={4} mt={4}>
                  {[
                    {
                      title: "1. Consultation & Smile Design",
                      desc: <span>Your journey begins with a comprehensive consultation with <b>Dr. Heeral Chikhal</b>, our cosmetic dentist. We discuss your aesthetic goals and perform a thorough examination, often utilizing Digital Smile Design (DSD) to help you visualize your new smile before treatment begins. This is where we plan your <b>Full mouth veneers in Borivali West</b> or even just a <b>1 tooth veneer</b> or <b>2 front teeth veneers.</b></span>,
                    },
                    {
                      title: "2. Tooth Preparation",
                      desc: "A minimal amount of enamel (less than 1mm, similar to a fingernail's thickness) is carefully removed from the front surface of the tooth to allow for veneer placement. For some cases, no-prep veneers may be an option.",
                    },
                    {
                      title: "3. Impressions",
                      desc: <span>Accurate impressions of your teeth are taken and sent to a specialized dental lab where your custom <b>Custom Ceramic Veneers in Borivali West</b> are fabricated. Temporary veneers may be placed in the interim.</span>,
                    },
                    {
                      title: "4. Bonding",
                      desc: "Once your permanent veneers arrive, we try them on to ensure a perfect fit and aesthetic. The veneers are then permanently bonded to your teeth using a strong dental adhesive.",
                    },
                    {
                      title: "5. Final Adjustments",
                      desc: "Dr. Heeral will make any final adjustments to ensure your bite is comfortable and your smile is perfect.",
                    },
                  ].map((step, i) => (
                    <Paper
                      key={i}
                      elevation={3}
                      sx={{
                        p: 4,
                        display: "flex",
                        gap: 2,
                        alignItems: "flex-start",
                        backgroundColor: "rgba(240,248,255,0.5)",
                        backdropFilter: "blur(4px)",
                        border: "2px solid rgba(0,123,255,0.15)",
                        borderRadius: 2, // ✅ Corrected: apply borderRadius normally
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                          backdropFilter: "blur(4px)", // ✅ Optional here — you can remove this if it's already applied
                        },
                      }}                      
                    >
                      <ArrowForwardIosIcon color="primary" sx={{ mt: 0.5 }} />
                      <Box>
                        <Typography variant="h5" fontWeight="bold">
                          {step.title}
                        </Typography>
                        <Typography variant="body1" mt={1}>
                          {step.desc}
                        </Typography>
                      </Box>
                    </Paper>
                  ))}
                </Stack>
              </Box>
            </Fade>
          )}
        </Box>

        <Divider sx={{ my: 6 }} />

        {inView2 && (
          <Fade in timeout={1000}>
            <Box>
              <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
Cost of Dental Veneers in Borivali West
              </Typography>
              <Typography variant="h6" gutterBottom>
Understanding the Cost of dental veneers in Borivali West is a key concern for many patients. The dental veneer cost in Borivali West varies based on the material chosen, the number of teeth being treated, the complexity of the case, and the expertise of the dentist. At Smile Solutions, we believe in transparent pricing for all our cosmetic procedures.
   </Typography>
    <Typography variant="body1" mt={1} gutterBottom>
    Here's an estimated <strong>veneers teeth cost in Borivali West</strong> breakdown:
    </Typography>

              <Grid container spacing={3} mt={2}>
                {[
                  {
                    label: "Composite Veneers (Per Tooth)",
                    cost: "₹4,000 – ₹10,000",
                    note: "More affordable dental veneers in Borivali West, often single-sitting.",
                  },
                  {
                    label: "Porcelain Veneers (Per Tooth)",
                    cost: "₹10,000 – ₹25,000+",
                    note: "Superior aesthetics & durability. Porcelain veneers cost is higher.",
                  },
                  {
                    label: "1 tooth veneer cost",
                    cost: "Based on above per-tooth rates",
                    note: "E.g., one Porcelain veneer could be ₹12,000 - ₹25,000+.",
                  },
                  {
                    label: "2 Front Teeth Veneers cost",
                    cost: "₹24,000 – ₹50,000+",
                    note: "Price for two teeth, especially for a prominent smile correction.",
                  },
                  {
                    label: "Full mouth veneers in Borivali West",
                    cost: "₹1,00,000 – ₹3,00,000+",
                    note: "Depending on the number of teeth and material.",
                  },
                ].map((item, i) => (
                  <Grid item xs={12} sm={6} md={3} key={i}>
                    <Paper
                      elevation={5}
                      sx={{
                        p: 3,
                        textAlign: "center",
                        height: "100%",
                        background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
                        borderRadius: 3,
                        border: "2px solid rgba(25, 118, 210, 0.2)",
                        transition: "transform 0.4s ease, box-shadow 0.4s ease",
                        boxShadow: "0 0 20px rgba(25, 118, 210, 0.15)",
                        animation: "pulseGlow 2.5s infinite ease-in-out",
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 16px 32px rgba(25, 118, 210, 0.2)',
                        },
                        '@keyframes pulseGlow': {
                          '0%': {
                            boxShadow: '0 0 5px rgba(25, 118, 210, 0.15)',
                          },
                          '50%': {
                            boxShadow: '0 0 10px rgba(25, 118, 210, 0.25)',
                          },
                          '100%': {
                            boxShadow: '0 0 5px rgba(25, 118, 210, 0.15)',
                          },
                        },
                      }}
                    >
                      <CurrencyRupeeIcon sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
                      <Typography fontWeight="bold" fontSize="1.1rem" gutterBottom>
                        {item.label}
                      </Typography>
                      <Typography variant="h6" color="primary">
                        {item.cost}
                      </Typography>
                      <Typography variant="body2" mt={1}>
                        {item.note}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              <Typography variant="h6" gutterBottom mt={3}>
              The <strong>Best dental veneers treatment cost in Borivali West</strong> for you will be determined after a personalized consultation. This allows us to assess your specific needs and provide an accurate quote for your <strong>veneers treatment price</strong>.
            </Typography>
            </Box>
          </Fade>
        )}

        <Divider sx={{ my: 6 }} />

        <Fade in timeout={800}>
  <Box>
    <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
    Why Choose Smile Solutions for Your Best Veneers in Borivali West?

    </Typography>
    <Typography variant="h6" gutterBottom>When searching for <b>veneers treatment near me</b> or the <b>best porcelain veneers doctors in Borivali West</b>, Smile Solutions stands out. Our commitment to excellence, combined with the artistic skill of <b>Dr. Heeral</b> and the comprehensive care philosophy of <b>Dr. Kalpesh</b>, ensures that you receive the <b>best veneer treatment in Borivali West.</b></Typography>
    <Grid container spacing={3} mt={1}>
      {[
<span><b>Expert Cosmetic Dentists:</b> Dr. Kalpesh Dey specializes in aesthetic dentistry, ensuring beautiful and natural results.</span>,
<span><b>Personalized Smile Design:</b> We listen to your goals and craft a smile that truly complements your features.</span>,
<span><b>High-Quality Materials:</b> We use only the finest materials for durable and long-lasting veneers.</span>,
<span><b>Patient Comfort:</b> Your comfort is our priority throughout the entire veneer treatment.</span>,
<span><b>Transparent Pricing:</b> Clear understanding of your Cost of dental veneers in Borivali West.</span>,
      ].map((reason, i) => (
        <Grid item xs={12} sm={12} key={i}>
          <Typography variant="h6" display="flex" alignItems="center" gap={1}>
            <CheckCircleIcon color="primary" />
            {reason}
          </Typography>
        </Grid>
      ))}
    </Grid>
    <Typography variant="h6" gutterBottom mt={3}>
Don't wait to achieve the smile you've always dreamed of. Contact Smile Solutions, a trusted <a href="https://www.smilesolutionsclinic.com/" target="_blank">dental clinic in Borivali West</a>, today for a consultation. Let us help you transform your smile and boost your confidence!
<br></br><br></br><b>Ready for your best smile? Schedule your consultation now and take the first step toward a brighter, more beautiful you.</b>
    </Typography>
  </Box>
</Fade>

      </Container>

      <Footer />
    </>
  );
}
