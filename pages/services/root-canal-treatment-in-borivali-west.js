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
        <title>Root Canal Treatment in Borivali West, Mumbai | Smile Solutions</title>
        <meta
          name="description"
          content="Seeking root canal treatment in Borivali West? Dr. Kalpesh Dey offers single-sitting RCT with expert care & transparent root canal treatment cost near you!"
        />
        <link rel="canonical" href="https://www.smilesolutionsclinic.com/services/root-canal-treatment-in-borivali-west"/>

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
<section style={{backgroundColor:'white'}}>
      <Container sx={{ py: 6 }}>
        <Fade in timeout={800}>
          <Box>
            {/* <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
              Expert Root Canal Care in Borivali West
            </Typography> */}
            <Typography variant="h6" paragraph>
Experiencing tooth pain or sensitivity? A root canal might be the solution you need to save your natural tooth from extraction. At Smile Solutions Dental Clinic, we specialize in providing advanced and comfortable <b>root canal treatment in Borivali West</b>, helping you eliminate pain and restore your oral health. Our dedicated team, led by Dr. Kalpesh Dey (MDS Endodontist & Cosmetic Dentist), ensures you receive the highest standard of care, making us a top choice for your root canal needs.
            </Typography>
          </Box>
        </Fade>

        <Divider sx={{ my: 3 }} />

        <Fade in timeout={800}>
          <Box>
            <Typography variant="h2" fontWeight="bold" gutterBottom color="primary">
             What is Root Canal Treatment (RCT)?
            </Typography>
            <Typography variant="h6" paragraph>
Root canal treatment, often referred to as RCT, is a dental procedure designed to remove infected or damaged pulp (the soft tissue inside your tooth containing nerves and blood vessels) from the tooth's root canal. This treatment cleans and disinfects the inside of the tooth, which is then filled and sealed to prevent further infection. It's a highly effective way to relieve pain and save a tooth that would otherwise need to be extracted. If you’re experiencing severe tooth pain or sensitivity, visiting an endodontic clinic near you can help diagnose the issue early and provide expert care to restore your dental health.
            </Typography>
          </Box>
        </Fade>

        <Divider sx={{ my: 3 }} />

        <Fade in timeout={800}>
  <Box>
    <Typography variant="h2" fontWeight="bold" gutterBottom color="primary">
     When Do You Need a Root Canal?

    </Typography>

    {/* Intro Text */}
    <Typography variant="h6" gutterBottom>
      You might need a <b>root canal treatment</b> if you experience:
    </Typography>

    <Grid container spacing={3} mt={1}>
      {[
        "Severe toothache pain while chewing or applying pressure",
        "Prolonged sensitivity to hot or cold temperatures, even after the source is removed.",
        "Discoloration or darkening of the tooth.",
        "Swelling and tenderness in the surrounding gums",
        "A persistent pimple-like bump on the gums.",
        "A chipped or cracked tooth with exposed pulp.",
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


        <Divider sx={{ my: 3 }} />

        <Fade in timeout={800}>
          <Box>
            <Typography variant="h2" fontWeight="bold" gutterBottom color="primary">
            Your Expert RCT Specialist in Borivali West
            </Typography>
            <Typography variant="h6" paragraph>Finding a highly skilled RCT specialist in Borivali West is crucial for a successful and comfortable treatment experience. Dr. Kalpesh Dey, our resident Endodontist (Root Canal Specialist), brings extensive expertise and a gentle approach to every procedure. With advanced training and a commitment to precision, Dr. Dey ensures that your root canal treatment is performed with the utmost care, utilizing modern techniques and equipment for optimal results. If you're searching for a root canal treatment near me with a specialist touch, Smile Solutions is your answer.
</Typography>
          </Box>
        </Fade>

        <Divider sx={{ my: 3 }} />

        <Fade in timeout={800}>
          <Box>
            <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
             The Root Canal Treatment Process
            </Typography>
            <Typography variant="h6" gutterBottom>
At Smile Solutions, your comfort and successful outcome are our priorities throughout the root canal procedure.
            </Typography>
            <Stack spacing={4} mt={4}>
              {[
                {
                  title: "1. Diagnosis",
                  desc: "We start with a thorough examination, including X-rays, to accurately diagnose the infection.",
                },
                {
                  title: "2. Anesthesia",
                  desc: "Local anesthesia is administered to numb the tooth and surrounding area, ensuring a pain-free procedure.",
                },
                {
                  title: "3. Pulp Removal",
                  desc: "A small opening is made in the crown of the tooth, and the infected pulp is carefully removed.",
                },
                {
                  title: "4. Cleaning & Shaping",
                  desc: "The root canals are meticulously cleaned, disinfected, and shaped using specialized instruments.",
                },
                {
                  title: "5. Filling & Sealing",
                  desc: " The cleaned canals are filled with a biocompatible material (gutta-percha) and sealed to prevent re-infection.",
                },
                {
                  title:'Restoration: ',
                  desc:'The tooth is then sealed with a temporary filling. In most cases, a permanent restoration like a dental crown is recommended to protect the treated tooth and restore its full function.'
                }
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

        <Divider sx={{ my: 3 }} />

        <Fade in timeout={800}>
          <Box>
            <Typography variant="h2" fontWeight="bold" gutterBottom color="primary">
             Single-Sitting Root Canal Treatment in Borivali West
            </Typography>
            <Typography variant="h6" paragraph>
For suitable cases, we offer <b>single sitting root canal</b> treatment in Borivali West clinic. This advanced technique allows our RCT specialist in Borivali West to complete the entire root canal procedure in just one visit, saving you time and reducing the need for multiple appointments. This is particularly beneficial for patients with busy schedules or those who prefer to complete treatment quickly. Our precise diagnostic tools and advanced techniques ensure the same high success rate as multi-visit procedures.
            </Typography>
          </Box>
        </Fade>

        <Divider sx={{ my: 3 }} />

        <Fade in timeout={800}>
          <Box>
            <Typography variant="h2" fontWeight="bold" gutterBottom color="primary">
             Cost of Root Canal Treatment at Smile Solutions Dental Clinic
            </Typography>
            <Typography variant="h6" gutterBottom>
Understanding the root canal treatment cost is important. The price of root canal treatment can vary depending on several factors, including the complexity of the case (which tooth is affected – front teeth are generally simpler, molars more complex), the severity of the infection, and whether it’s a <b>single-sitting root canal</b> procedure.    </Typography>
    <Typography variant="body1" mt={1} gutterBottom>
  Here’s a general idea of <strong>root canal cost in Borivali West</strong> at Smile Solutions:
</Typography>

            <Grid container spacing={3} mt={2}>
              {[
                {
                  label: "Standard Root Canal Treatment",
                  cost: "₹4,000 – ₹9,000",
                  note: "Varies based on tooth type (front, premolar, molar).",
                },
                {
                  label: "Single-Sitting Root Canal",
                  cost: "₹5,000 – ₹10,000",
                  note: "Often slightly higher due to specialized instruments/materials.",
                },
                {
                  label: "Root Canal Treatment Cost with Cap",
                  cost: "₹7,000 – ₹15,000+",
                  note: "Includes RCT cost + cost of crown (metal, PFM, Zirconia).",
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

        <Divider sx={{ my: 3 }} />

        <Fade in timeout={800}>
          <Box>
            <Typography variant="h2" fontWeight="bold" gutterBottom color="primary">
Why Choose Smile Solutions for Your Root Canal in Borivali West?
            </Typography>
            <Grid container spacing={3} mt={1}>
              {[
                <span><b>Expert RCT specialist:</b> Led by Dr. Kalpesh Dey, an MDS Endodontist, ensuring expert care.</span>,
                <span><b>Advanced technology:</b>  We utilize modern equipment for precise and efficient treatment.</span>,
                <span><b>Comfort-Focused Approach:</b>  We prioritize your comfort throughout the procedure.</span>,
                <span><b>Single-Sitting Option:</b>  Save time with our efficient single-sitting root canal treatment. </span>,
                <span><b>Transparent Pricing:</b>  Clear understanding of your cost of root canal treatment.</span>,
                <span><b>Convenient Location:</b>  Easily accessible if you're searching for a root canal treatment near me.</span>,
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
Don't let dental pain dictate your life. If you're experiencing discomfort or have concerns about your dental health, contact Smile Solutions, a leading <a>dental clinic in Borivali West</a>, today. We are committed to saving your natural teeth and restoring your healthy, pain-free smile.
<br></br>Book your consultation with Dr. Kalpesh Dey for expert and compassionate care.
            </Typography>
          </Box>
        </Fade>
      </Container>
</section>
      <Footer />
    </>
  );
}
