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
          content="Transform your smile with dental veneers in Borivali West at Smile Solutions. Dr. Kalpesh Dey, your Porcelain Veneers Doctor, offers expert veneers treatment and transparent pricing."
        />
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
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          What Are Dental Veneers?
        </Typography>
        <Typography variant="h6" paragraph>
          Veneers are thin, custom-made shells designed to cover the front surface
          of your teeth, instantly improving their appearance. They blend seamlessly
          with your natural teeth, correcting imperfections and creating a
          symmetrical smile.
        </Typography>

        <Divider sx={{ my: 6 }} />

        <Fade in timeout={1000}>
          <Box>
            <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom mt={4}>
              Benefits of Choosing Veneers in Borivali West
            </Typography>
            <Grid container spacing={3} mt={1}>
              {[
                "Instant Smile Transformation: Corrects chips, cracks, gaps, stains, and minor misalignments.",
                "Natural Appearance: Custom-made to match your natural teeth.",
                "Stain Resistance: Especially Porcelain Veneers are highly stain-resistant.",
                "Durability: Porcelain veneers last 10-15+ years with proper care.",
                "Minimally Invasive: Requires only minimal enamel removal.",
                "Confidence Boost: Achieve a dazzling smile and greater self-confidence.",
              ].map((benefit, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                    <CheckCircleIcon color="primary" />
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

<Grid container spacing={4} mt={1}>
  {[
    {
      title: "Porcelain Veneers",
      bullets: [
        "Considered the gold standard in cosmetic dentistry.",
        "Made from high-quality, durable ceramic in a dental lab.",
        "Offer superior aesthetics, mimicking the translucency of natural tooth enamel.",
        "Highly stain-resistant and long-lasting (typically 10–15+ years).",
        "Ideal for significant aesthetic changes.",
        "We offer Custom Ceramic Veneers in Borivali West for a perfect fit.",
      ],
    },
    {
      title: "Composite Veneers",
      bullets: [
        "Made from a tooth-colored resin material applied directly to the tooth.",
        "More affordable dental veneers in Borivali West compared to porcelain.",
        "Can often be completed in a single visit (Dental veneer treatment in Borivali West).",
        "Good for minor corrections and can be easily repaired.",
        "Less durable than porcelain (typically 4–8 years).",
        "May be more prone to staining over time.",
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
                  Dental Veneers Treatment Process
                </Typography>

                <Stack spacing={4} mt={4}>
                  {[
                    {
                      title: "1. Consultation & Smile Design",
                      desc: "Meet Dr. Kalpesh Dey to design your smile using Digital Smile Design (DSD).",
                    },
                    {
                      title: "2. Tooth Preparation",
                      desc: "Minimal enamel reduction; no-prep veneers available in some cases.",
                    },
                    {
                      title: "3. Impressions",
                      desc: "Custom veneers are crafted at a dental lab. Temporary ones placed meanwhile.",
                    },
                    {
                      title: "4. Bonding",
                      desc: "Final veneers bonded permanently using strong adhesives.",
                    },
                    {
                      title: "5. Final Adjustments",
                      desc: "Your bite is adjusted and final touch-ups done for perfection.",
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
                Transparent Veneer Pricing
              </Typography>
              <Typography variant="h6" gutterBottom>
              Understanding the <strong>Cost of dental veneers in Borivali West</strong> is a key concern for many patients. The <strong>dental veneer cost in Borivali West</strong> varies based on the material chosen, the number of teeth being treated, the complexity of the case, and the expertise of the dentist. At Smile Solutions, we believe in transparent pricing for all our cosmetic procedures.
    </Typography>
    <Typography variant="body1" mt={1} gutterBottom>
    Here's an estimated <strong>veneers teeth cost in Borivali West</strong> breakdown:
    </Typography>

              <Grid container spacing={3} mt={2}>
                {[
                  {
                    label: "Composite Veneers (Per Tooth)",
                    cost: "₹4,000 – ₹10,000",
                    note: "Affordable option with quick application.",
                  },
                  {
                    label: "Porcelain Veneers (Per Tooth)",
                    cost: "₹10,000 – ₹25,000+",
                    note: "Superior durability, aesthetics, and longevity.",
                  },
                  {
                    label: "2 Front Teeth Veneers",
                    cost: "₹24,000 – ₹50,000+",
                    note: "Ideal for smile zone improvements.",
                  },
                  {
                    label: "Full Mouth Veneers",
                    cost: "₹1,00,000 – ₹3,00,000+",
                    note: "Complete smile makeover pricing.",
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
      Why Choose Smile Solutions for Veneers?
    </Typography>
    <Grid container spacing={3} mt={1}>
      {[
        "Cosmetic Expertise: Dr. Kalpesh Dey ensures flawless aesthetics.",
        "Personalized Smile Design: Smile that matches your personality.",
        "Premium Lab Materials: High durability and natural look.",
        "Comfort & Care: Friendly and minimally invasive experience.",
        "Clear Pricing: No surprises – full cost transparency.",
      ].map((reason, i) => (
        <Grid item xs={12} sm={6} key={i}>
          <Typography variant="h6" display="flex" alignItems="center" gap={1}>
            <CheckCircleIcon color="primary" />
            {reason}
          </Typography>
        </Grid>
      ))}
    </Grid>
    <Typography variant="h6" gutterBottom mt={3}>
    Don't wait to achieve the smile you've always dreamed of. Contact Smile Solutions Dental Clinic today for a consultation regarding dental veneers in Borivali West. Let us help you transform your smile and boost your confidence!
    </Typography>
  </Box>
</Fade>

      </Container>

      <Footer />
    </>
  );
}
