import Head from "next/head";
import Navbar from "/components/header/navbar";
import Footer from "/components/footer/footer";
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
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function RootCanalTreatment() {
  return (
    <>
      <Head>
        <title>Root Canal Treatment in Borivali West | RCT Specialist Near Me</title>
        <meta
          name="description"
          content="Seeking root canal treatment in Borivali West? Our RCT specialist, Dr. Kalpesh Dey, offers single-sitting root canal treatment & transparent cost of root canal treatment."
        />
      </Head>

      <Navbar />

      <Box
        sx={{
          position: "relative",
          py: 12,
          textAlign: "center",
          color: "white",
          backgroundImage: "url('/images/treatments/root_canal.jpg')",
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
                sx={{
                  fontSize: { xs: "2rem", md: "3.5rem" },
                  color: "white",
                  textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                }}
              >
                Root Canal Treatment in Borivali West
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
                Save your natural tooth with painless single-sitting RCT by Dr. Kalpesh Dey
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      <Container sx={{ py: 6 }}>
        <Fade in timeout={800}>
          <Box>
            <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
              Expert Root Canal Care in Borivali West
            </Typography>
            <Typography variant="h6" paragraph>
            Experiencing tooth pain or sensitivity? A root canal treatment in Borivali West might be the solution you need to save your natural tooth from extraction. At <strong>Smile Solutions Dental Clinic</strong>, we specialize in providing advanced and comfortable root canal treatment in Borivali West, helping you eliminate pain and restore your oral health. Our dedicated team, led by <strong>Dr. Kalpesh Dey (MDS Endodontist & Cosmetic Dentist)</strong>, ensures you receive the highest standard of care, making us a top choice for your root canal in Borivali West.
            </Typography>
          </Box>
        </Fade>

        <Divider sx={{ my: 6 }} />

        <Fade in timeout={800}>
          <Box>
            <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
              What is Root Canal Treatment (RCT)?
            </Typography>
            <Typography variant="h6" paragraph>
            Root canal treatment, often referred to as RCT, is a dental procedure designed to remove infected or damaged pulp (the soft tissue inside your tooth containing nerves and blood vessels) from the tooth's root canal. This treatment cleans and disinfects the inside of the tooth, which is then filled and sealed to prevent further infection. It's a highly effective way to relieve pain and save a tooth that would otherwise need to be extracted.
            </Typography>
          </Box>
        </Fade>

        <Divider sx={{ my: 6 }} />

        <Fade in timeout={800}>
  <Box>
    <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
      When Do You Need a Root Canal?
    </Typography>

    {/* Intro Text */}
    <Typography variant="h6" gutterBottom>
      You might need a root canal treatment if you experience:
    </Typography>

    <Grid container spacing={3} mt={1}>
      {[
        "Severe toothache pain while chewing or applying pressure",
        "Prolonged sensitivity to hot or cold",
        "Tooth discoloration or darkening",
        "Swelling and tenderness in the gums",
        "Recurring pimple-like bump on the gums",
        "Chipped or cracked tooth with pulp exposure",
      ].map((symptom, i) => (
        <Grid item xs={12} sm={6} key={i}>
          <Typography variant="h6" display="flex" alignItems="center" gap={1}>
            <CheckCircleIcon color="primary" />
            {symptom}
          </Typography>
        </Grid>
      ))}
    </Grid>

    {/* Conclusion Text */}
    <Typography variant="body1" mt={3}>
      Don't ignore these symptoms! Early intervention can prevent more serious issues.
    </Typography>
  </Box>
</Fade>


        <Divider sx={{ my: 6 }} />

        <Fade in timeout={800}>
          <Box>
            <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
              Meet Your RCT Specialist
            </Typography>
            <Typography variant="h6" paragraph>
            Finding a highly skilled RCT specialist in Borivali West is crucial for a successful and comfortable treatment experience. <strong><a
  href="https://www.smilesolutionsclinic.com/#:~:text=Book%20An%20Appointment-,Dr.%20Kalpesh%20Dey,-MDS%20%2D%20Endodontist%20%26%20Cosmetic"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: '#1976d2', textDecoration: 'underline', fontWeight: 'bold' }}
>
  Dr. Kalpesh Dey
</a></strong>, our resident Endodontist (Root Canal Specialist), brings extensive expertise and a gentle approach to every procedure. With advanced training and a commitment to precision, Dr. Dey ensures that your root canal treatment is performed with the utmost care, utilizing modern techniques and equipment for optimal results. If you're searching for a Root Canal Treatment Near Me with a specialist touch, Smile Solutions is your answer.
            </Typography>
          </Box>
        </Fade>

        <Divider sx={{ my: 6 }} />

        <Fade in timeout={800}>
          <Box>
            <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
              Our Root Canal Process
            </Typography>
            <Typography variant="h6" gutterBottom>
            At Smile Solutions, your comfort and successful outcome are our priorities during root canal treatment in Borivali West:
            </Typography>
            <Stack spacing={4} mt={4}>
              {[
                {
                  title: "1. Diagnosis",
                  desc: "Detailed clinical examination with X-rays to assess extent of infection.",
                },
                {
                  title: "2. Local Anesthesia",
                  desc: "The area is completely numbed to ensure a pain-free experience.",
                },
                {
                  title: "3. Pulp Removal",
                  desc: "The infected pulp is accessed and removed through the crown of the tooth.",
                },
                {
                  title: "4. Cleaning & Shaping",
                  desc: "Canals are disinfected and shaped using specialized endodontic tools.",
                },
                {
                  title: "5. Filling & Sealing",
                  desc: "The canals are sealed with gutta-percha and the tooth is restored.",
                },
              ].map((step, i) => (
                <Paper
                  key={i}
                  elevation={3}
                  sx={{
                    p: 4,
                    display: "flex",
                    gap: 3,
                    alignItems: "flex-start",
                    borderRadius: 2,
                    backgroundColor: "rgba(240,248,255,0.5)",
                    backdropFilter: "blur(4px)",
                    border: "2px solid rgba(0,123,255,0.15)",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
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

        <Divider sx={{ my: 6 }} />

        <Fade in timeout={800}>
          <Box>
            <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
              Single-Sitting Root Canal Option
            </Typography>
            <Typography variant="h6" paragraph>
            For suitable cases, Smile Solutions offers single-sitting root canal treatment in Borivali West. This advanced technique allows our RCT specialist in Borivali West to complete the entire root canal procedure in just one visit, saving you time and reducing the need for multiple appointments. This is particularly beneficial for patients with busy schedules or those who prefer to complete treatment quickly. Our precise diagnostic tools and advanced techniques ensure the same high success rate as multi-visit procedures.
            </Typography>
          </Box>
        </Fade>

        <Divider sx={{ my: 6 }} />

        <Fade in timeout={800}>
          <Box>
            <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
              Cost of Root Canal Treatment in Borivali West
            </Typography>
            <Typography variant="h6" gutterBottom>
            Understanding the Cost of Root Canal Treatment in Borivali West is important. The root canal treatment price can vary depending on several factors, including the complexity of the case (which tooth is affected – front teeth generally simpler, molars more complex), the severity of the infection, and whether it's a single-sitting procedure.
    </Typography>
    <Typography variant="body1" mt={1} gutterBottom>
  Here’s a general idea of <strong>root canal cost in Borivali West</strong> at Smile Solutions:
</Typography>

            <Grid container spacing={3} mt={2}>
              {[
                {
                  label: "Standard Root Canal Treatment",
                  cost: "₹4,000 – ₹9,000",
                  note: "Based on tooth type (front, premolar, molar).",
                },
                {
                  label: "Single-Sitting Root Canal",
                  cost: "₹5,000 – ₹10,000",
                  note: "Slightly higher due to advanced instruments and materials.",
                },
                {
                  label: "RCT with Crown",
                  cost: "₹7,000 – ₹15,000+",
                  note: "Includes RCT + crown (metal, PFM, or Zirconia).",
                },
              ].map((item, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Paper
                    elevation={6}
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
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 16px 32px rgba(25, 118, 210, 0.2)",
                      },
                      "@keyframes pulseGlow": {
                        "0%": { boxShadow: "0 0 5px rgba(25, 118, 210, 0.15)" },
                        "50%": { boxShadow: "0 0 10px rgba(25, 118, 210, 0.25)" },
                        "100%": { boxShadow: "0 0 5px rgba(25, 118, 210, 0.15)" },
                      },
                    }}
                  >
                    <CurrencyRupeeIcon sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
                    <Typography fontWeight="bold" fontSize="1.2rem" gutterBottom>
                      {item.label}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {item.cost}
                    </Typography>
                    <Typography variant="body1" mt={1}>
                      {item.note}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Typography variant="h6" gutterBottom mt={3}>
            Please note that this is an estimated <strong>root canal treatment cost near me </strong>and a precise quote can only be given after a thorough examination by <strong>Dr. Kalpesh Dey</strong> at our clinic. We strive to provide transparent pricing and quality care.
            </Typography>
          </Box>
        </Fade>

        <Divider sx={{ my: 6 }} />

        <Fade in timeout={800}>
          <Box>
            <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
              Why Choose Smile Solutions for RCT?
            </Typography>
            <Grid container spacing={3} mt={1}>
              {[
                "Expert RCT specialist – Dr. Kalpesh Dey",
                "Advanced technology & modern tools",
                "Comfort-focused, painless care",
                "Single-sitting root canal option",
                "Transparent pricing",
                "Convenient location in Borivali West",
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
              Don't let dental pain dictate your life. Contact Smile Solutions Dental Clinic today and book your consultation with Dr. Kalpesh Dey, your trusted RCT specialist in Borivali West.
            </Typography>
          </Box>
        </Fade>
      </Container>

      <Footer />
    </>
  );
}
