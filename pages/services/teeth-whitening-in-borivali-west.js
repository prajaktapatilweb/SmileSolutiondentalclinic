import Head from "next/head";
import Navbar from "/components/header/navbar"; // adjust path as per your structure
import Footer from "/components/footer/footer"; // adjust path as per your structure
import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Divider,
    Slide,
    Fade,
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, 
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const whiteningOptions = [
  { type: "In-Office Whitening", bestFor: "Fast results in one session", cost: "₹5,000 – ₹10,000" },
  { type: "Laser Teeth Whitening", bestFor: "Deep stains, low sensitivity", cost: "₹8,000 – ₹15,000" },
  { type: "Take-Home Whitening Kits", bestFor: "Gradual whitening, maintenance", cost: "₹3,000 – ₹6,000" },
];
const whiteningMyths = [
  { myth: "Whitening weakens teeth", fact: "Dentist-supervised whitening is safe and enamel-friendly" },
  { myth: "All whitening products are equal", fact: "In-office whitening is more powerful and customized" },
  { myth: "Whitening is painful", fact: "Temporary sensitivity is mild and manageable" },
  { myth: "Whitening lasts forever", fact: "With good care, results can last 1–2 years" },
];



export default function Pediatricdental() {
    const [ref1, inView1] = useInView({ triggerOnce: true });

    return (
        <>
            <Head>
 <link rel="canonical" href="https://www.smilesolutionsclinic.com/services/teeth-whitening-in-borivali-west" />
                <title>Teeth Whitening in Borivali West | Teeth Whitening Cost Near Me</title>
                <meta name="description" content="Get sparkling white teeth with professional teeth whitening in Borivali West. Dr. Heeral Chikhal at Smile Solutions offers in-clinic and laser whitening with visible results in one visit." />
            </Head>

            <Navbar />
            <section style={{ backgroundColor: 'white' }}>
                <Box
                    sx={{
                        position: "relative",
                        py: 14,
                        textAlign: "center",
                        color: "white",
                        backgroundImage: "url('/images/treatments/mainsmile2.jpg')",
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
                            backgroundColor: "rgba(0, 0, 0, 0.5)", // black transparent overlay
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
                                        textShadow: "2px 2px 8px rgba(0,0,0,0.7)", // 3D-style shadow
                                        animation: "fadeInUp 1s ease-out",
                                    }}
                                >
                                   Teeth Whitening in Borivali West
                                </Typography>

                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: "#f1f1f1",
                                        fontStyle: "italic",
                                        fontWeight: 300,
                                        letterSpacing: "0.5px",
                                        textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
                                        animation: "fadeInUp 1.4s ease-out",
                                    }}
                                >
                                    Permanent, natural-looking solutions for missing teeth.
                                </Typography>
                            </Box>
                        </Fade>
                    </Container>
                </Box>
                <Container sx={{ py: 6 }}>
                    <Box ref={ref1}>
                        <Slide direction="up" in={inView1} mountOnEnter unmountOnExit>
                            <Box>
                                {/* <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
                                Expert Implant Care in Borivali West
                            </Typography> */}
                                <Typography variant="h6" paragraph>
Tired of dull, stained teeth? Whether it’s from coffee, tea, wine, smoking, or aging, tooth discoloration can affect your confidence and appearance. If you're searching for <b>"teeth whitening in Borivali West"</b> or want to experience <b>teeth whitening</b> for quick, visible results, you're in the right place.
<br></br>Led by <b>Dr. Heeral Chikhal</b>, our experienced cosmetic dental team offers <b>laser teeth whitening, cosmetic whitening,</b> and <b>at-home whitening kits</b>. As a leading <b>teeth whitening dentist near you</b>, we help you achieve a brighter, healthier smile safely and effectively.
                                   </Typography>
                            </Box>
                        </Slide>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Fade in={inView1} timeout={800}>
                        <Box>
                            <Typography variant="h2" gutterBottom color="primary" sx={{}}>
                               What is Teeth Whitening?
                            </Typography>
                            <Typography variant="h6" paragraph>
<b>Teeth whitening</b> is a cosmetic procedure designed to lighten the shade of your teeth and remove stains. It targets both surface and deeper discoloration caused by lifestyle habits or aging.
<br></br><br></br>Compared to DIY kits, <b>professional teeth whitening in Mumbai</b> provides faster, longer-lasting, and safer outcomes under dentist supervision.

                            </Typography>
                                                        <Typography variant="h2" gutterBottom color="primary" sx={{}}>
                            Benefits of Teeth Whitening Treatment
                            </Typography>
                            <Grid container spacing={3} mt={1}>
                                {[
 "Whiter teeth in a single session",
 "Enhanced self-esteem and smile confidence",
 "Dentist-supervised for safe, reliable results",
 "Non-invasive and quick procedure",
 "Long-lasting with proper maintenance",

                                ].map((symptom, i) => (
                                    <Grid item xs={12} sm={6} key={i}>
                                        <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                                            <CheckCircleIcon color="primary" />
                                            {symptom}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>

                            <Typography variant="h6" mt={3}>Whether you're looking for best teeth whitening for a special occasion or daily confidence, our customized treatments deliver the glow you need.</Typography>
                            <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3 }}>
                              Pre-Treatment Preparation for Teeth Whitening
                            </Typography>
                              <Typography variant="h6" mt={3}>
                            Before beginning any whitening treatment, we take the following steps for your safety and comfort:
                           </Typography>
                            <Grid container spacing={3} mt={1}>
                                {[
<span><b>Oral Examination –</b> Identify cavities, gum issues, or sensitivities</span>,
<span><b>Scaling & Polishing –</b> Clean off plaque and tartar for better gel performance</span>,
<span><b>Shade Matching – </b>Document your original tooth color for comparison</span>,
<span><b>Sensitivity Check –</b> Prevent discomfort with desensitizing options if needed</span>,

                                ].map((symptom, i) => (
                                    <Grid item xs={12} sm={6} key={i}>
                                        <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                                            <CheckCircleIcon color="primary" />
                                            {symptom}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Typography variant="body1" mt={3} >Tip: Avoid dark-colored foods and drinks like coffee or turmeric 24 hours before treatment.</Typography>
                            <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3, mb: 2 }}>
Procedure for Teeth Whitening in Mumbai
</Typography>
  <Typography variant="h6" mt={3}>
Whether you're looking for <b>teeth whitening, laser whitening, or basic whitening</b>, the procedure is simple, safe, and effective.
<br></br><br></br>
<b>Step-by-step process:</b>
</Typography>
<Grid container spacing={3} mt={1}>
                                {[
<span><b>Protection –</b> Lips and gums are covered to avoid irritation</span>,
<span><b>Application –</b> Whitening gel is carefully applied to the teeth</span>,
<span><b>Activation – </b>Gel is activated with LED or laser light to break stains</span>,
<span><b>Repetition –</b> Applied 2–3 times depending on shade goals</span>,
<span><b>Final Rinse – </b>Gel is removed and your whiter smile is revealed</span>,
                                ].map((symptom, i) => (
                                    <Grid item xs={12} sm={6} key={i}>
                                        <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                                            <CheckCircleIcon color="primary" />
                                            {symptom}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                              <Typography variant="h6" mt={3}>
<b>⏱ Duration:</b> 30–60 minutes<br></br>
This professional method is ideal if you're looking for whitening treatments near you that are quick and efficient.
</Typography>
                            <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3, mb: 2 }}>
Post-Treatment Care for Teeth Whitening
</Typography>
                              <Typography variant="h6" mt={3}>
To extend the effects of your whitening session:
</Typography>
<Grid container spacing={3} mt={1}>
                                {[
 "Avoid coffee, wine, turmeric, and staining foods for 48 hours",
 "Use fluoride toothpaste with low abrasiveness",
 "Drink colored beverages using a straw",
 "Avoid tobacco and smoking",
 "Use touch-up trays every 6–12 months",
 "Schedule dental cleanings biannually",
                                ].map((symptom, i) => (
                                    <Grid item xs={12} sm={6} key={i}>
                                        <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                                            <CheckCircleIcon color="primary" />
                                            {symptom}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                             <Typography variant="h6" mt={3}>
With good habits, <b>teeth whitening results</b> can last from 6 months to 2 years.
</Typography>
                            <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3, mb: 2 }}>
Teeth Whitening Cost Options
</Typography>
 <TableContainer component={Paper} sx={{ margin: "20px auto", borderRadius: 2, boxShadow: 3 }}>
    
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell sx={{fontSize:17}}><b>Type of Whitening</b></TableCell>
            <TableCell sx={{fontSize:17}}><b>Best For</b></TableCell>
            <TableCell sx={{fontSize:17}}><b>Estimated Cost (₹)</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {whiteningOptions.map((item, index) => (
            <TableRow key={index} hover>
              <TableCell sx={{fontSize:15}}>{item.type}</TableCell>
              <TableCell sx={{fontSize:15}}>{item.bestFor}</TableCell>
              <TableCell sx={{fontSize:15}}>{item.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                                 <Typography variant="h6" mt={3}>
If you're researching the cost of teeth whitening in Mumbai, or teeth whitening price, we’ll provide a clear quote based on your smile goals.
</Typography>
                            <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3, mb: 2 }}>
Who Should Consider Teeth Whitening?
</Typography>
<Grid container spacing={3} mt={1}>
                                {[
"People with yellow or stained teeth",
"Smokers or regular coffee/tea drinkers",
"Brides, grooms, or working professionals",
"Anyone wanting a brighter smile",

                                ].map((symptom, i) => (
                                    <Grid item xs={12} sm={6} key={i}>
                                        <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                                            <CheckCircleIcon color="primary" />
                                            {symptom}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                                 <Typography variant="h6" mt={3}>
<b>Note:</b> Whitening is not effective on crowns, veneers, or internal discoloration.
</Typography>
                            <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3, mb: 2 }}>
Myths vs. Facts About Teeth Whitening
</Typography>
 <TableContainer component={Paper} sx={{margin: "20px auto", borderRadius: 2, boxShadow: 3 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell sx={{fontSize:17}}><b>Myth</b></TableCell>
            <TableCell sx={{fontSize:17}}><b>Fact</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {whiteningMyths.map((item, index) => (
            <TableRow key={index} hover>
              <TableCell sx={{fontSize:15}}>{item.myth}</TableCell>
              <TableCell sx={{fontSize:15}}>{item.fact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                             <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3, mb: 2 }}>
Why Choose Smile Solutions for Teeth Whitening in Borivali West?
</Typography>
<Grid container spacing={3} mt={1}>
                                {[

 <span><b>Dr. Heeral Chikhal</b> – Trusted <b>teeth whitening dentist near me</b></span>,
 <span>Advanced LED & <b>laser teeth whitening</b> technology</span>,
 <span>Personalized whitening intensity and care</span>,
 <span>Focused on comfort and long-term results</span>,
 <span>Convenient appointments at a <b>trusted dental clinic in Borivali West</b></span>,


                                ].map((symptom, i) => (
                                    <Grid item xs={12} sm={6} key={i}>
                                        <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                                            <CheckCircleIcon color="primary" />
                                            {symptom}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>

                             <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3, mb: 2 }}>
Searching for Teeth Whitening Near Me?
</Typography>
                                 <Typography variant="h6" mt={3}>

If you're looking for safe, visible results from teeth whitening, Smile Solutions, a trusted dental clinic in Borivali West, is your go-to destination. From  teeth whitening and laser whitening to customized take-home kits, we offer solutions for every smile.
<br></br><br></br><b>📞 Book your appointment today and take the first step toward a whiter, brighter, more confident you.</b>
</Typography>
                       </Box>
                    </Fade>
                </Container>
            </section>
            <Footer />
        </>
    );
}