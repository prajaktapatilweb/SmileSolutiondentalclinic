import Head from "next/head";
import Navbar from "/components/header/navbar"; // adjust path as per your structure
import Footer from "/components/footer/footer"; // adjust path as per your structure
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
    Stack,
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useInView } from "react-intersection-observer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";



const treatments = [
    { procedure: "Dental Crowns", purpose: "Restore strength and shape to damaged teeth" },
    { procedure: "Dental Bridges", purpose: "Replace missing teeth using support from adjacent natural teeth" },
    { procedure: "Dental Implants", purpose: "Permanently replace single or multiple missing teeth" },
    { procedure: "Root Canal Treatments", purpose: "Save severely infected or decayed teeth" },
    { procedure: "Veneers & Bonding", purpose: "Enhance aesthetics of chipped or stained front teeth" },
    { procedure: "Periodontal Therapy", purpose: "Treat gum disease to ensure healthy foundation" },
    { procedure: "Orthodontics / Aligners", purpose: "Correct misalignment before restoring bite and function" },
    { procedure: "TMJ / Bite Adjustment", purpose: "Relieve stress and pain in jaw joints caused by bite imbalance" },
];
const priceList = [
    { treatment: "Dental Crowns (per tooth)", price: "₹5,000 – ₹15,000" },
    { treatment: "Dental Implants (per implant)", price: "₹25,000 – ₹55,000" },
    { treatment: "Veneers (per tooth)", price: "₹7,000 – ₹15,000" },
    { treatment: "Full Mouth Implant Rehab", price: "₹2,00,000 – ₹6,00,000+" },
];
const mythsFacts = [
    { myth: "FMR is only for cosmetic purposes", fact: "It’s a medically necessary procedure for function and comfort" },
    { myth: "It’s painful and risky", fact: "Modern FMR is pain-managed and performed under expert supervision" },
    { myth: "Only elderly people need it", fact: "FMR is suitable for adults of any age with extensive dental issues" },
    { myth: "Results don’t last long", fact: "With proper care, FMR results can last 10–20 years or more" },
];
const faqs = [
    {
        question: "How long does full mouth rehabilitation take?",
        answer: "It may take 1–6 months or longer depending on the procedures involved."
    },
    {
        question: "Is FMR painful?",
        answer: "We ensure your comfort with anesthesia and modern pain management techniques."
    },
    {
        question: "Will I need all my teeth removed?",
        answer: "No. FMR aims to preserve as many healthy teeth as possible unless extraction is necessary."
    },
    {
        question: "Is the result permanent?",
        answer: "With regular care, checkups, and hygiene, the results can last for decades."
    },
    {
        question: "Is this treatment covered under insurance?",
        answer: "Some aspects of FMR may be covered. We help with documentation and financing options."
    }
];


export default function FMR() {
    const [ref1, inView1] = useInView({ triggerOnce: true });

    return (
        <>
            <Head>
                <link rel="canonical" href="https://www.smilesolutionsclinic.com/services/full-mouth-rehabilitation-in-borivali-west" />
                <title>Full Mouth Rehabilitation in Borivali West | FMR in Mumbai</title>
                <meta name="description" content="Need Full Mouth Rehabilitation in Borivali West, Mumbai? Get comprehensive smile restoration with crowns, implants, bridges, and more at Smile Solutions, led by Dr. Heeral Chikhal." />
            </Head>

            <Navbar />
            <section style={{ backgroundColor: 'white' }}>
                <Box
                    sx={{
                        position: "relative",
                        py: 14,
                        textAlign: "center",
                        color: "white",
                        backgroundImage: "url('/images/treatments/fmr.jpg')",
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
                                    Full Mouth Rehabilitation in Borivali West
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
                                    Struggling with worn, missing, or damaged teeth? When everyday activities like eating, speaking, or even smiling start to feel uncomfortable, it might be time to consider a comprehensive solution. If you're searching for <b>full mouth rehabilitation in Borivali West</b>, Mumbai, our clinic offers personalized care that restores function, health, and aesthetics all at once.
                                    <br></br><br></br>
                                    Led by Dr. Heeral Chikhal and Dr. Kalpesh Dey, our expert team uses advanced techniques and high-quality materials to rebuild your entire bite, ensuring long-lasting comfort and confidence. Whether due to decay, trauma, or bite imbalance, we’re here to help you regain control of your oral health.
                                </Typography>
                            </Box>
                        </Slide>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Fade in={inView1} timeout={800}>
                        <Box>
                            <Typography variant="h2" gutterBottom color="primary" sx={{}}>
                                What is Full Mouth Rehabilitation (FMR)?
                            </Typography>
                            <Typography variant="h6" paragraph>
                                <b>Full Mouth Rehabilitation (FMR)</b>, also known as Full Mouth Reconstruction, is a personalized, comprehensive dental treatment that rebuilds and restores all or most of the teeth in both the upper and lower jaws. At <b>Smile Solutions</b>, we offer expert-led <b>full mouth rehabilitation in Borivali West</b> that combines restorative, cosmetic, and functional procedures to improve your oral health, chewing ability, and smile aesthetics.
                                <br></br><br></br>
                                FMR is ideal for patients with:
                            </Typography>

                            <Grid container spacing={3}>
                                {[
                                    "Multiple damaged, missing, or worn-down teeth",
                                    "Chronic jaw pain or bite misalignment",
                                    "Extensive dental decay",
                                    "Injuries from accidents or trauma",
                                    "Failed past dental work",
                                ].map((symptom, i) => (
                                    <Grid item xs={12} sm={6} key={i}>
                                        <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                                            <CheckCircleIcon color="primary" />
                                            {symptom}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>

                            <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3 }}>
                                Who Needs Full Mouth Rehabilitation?
                            </Typography>
                            <Typography variant="h6" mt={3} mb={2}>
                                You might be a candidate for FMR if you experience:<br></br>
                            </Typography>
                            <Grid container spacing={3}>
                                {[
                                    "Difficulty chewing or biting food",
                                    "TMJ discomfort, headaches, or facial pain",
                                    "Shortened or broken teeth from grinding",
                                    "Severe tooth wear due to acid erosion or bruxism",
                                    "A collapsed bite affecting facial appearance",
                                    "Combination of missing, loose, or decayed teeth",
                                ].map((symptom, i) => (
                                    <Grid item xs={12} sm={6} key={i}>
                                        <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                                            <CheckCircleIcon color="primary" />
                                            {symptom}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Typography variant="h6" mt={3} mb={2}>

                                A detailed consultation will help us determine the scope and ideal treatment plan tailored to your oral condition.
                            </Typography>
                            <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3, mb: 2 }}>
                                Key Procedures Involved in FMR
                            </Typography>
                            <TableContainer component={Paper} sx={{ mx: "auto", mt: 4, borderRadius: 2, boxShadow: 3 }}>
                                <Table>
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                                            <TableCell sx={{ fontWeight: "bold", fontSize: 17 }}>Procedure</TableCell>
                                            <TableCell sx={{ fontWeight: "bold", fontSize: 17 }}>Purpose</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {treatments.map((item, index) => (
                                            <TableRow key={index} hover>
                                                <TableCell sx={{ fontSize: 15 }}>{item.procedure}</TableCell>
                                                <TableCell sx={{ fontSize: 15 }}>{item.purpose}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Typography variant="h6" mt={3} mb={2}>
                                Each patient receives a customized plan to improve both function and appearance.
                            </Typography>
                            <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3, mb: 2 }}>
                                Benefits of Full Mouth Rehabilitation
                            </Typography>

                            <Grid container spacing={3}>
                                {[
                                    "Complete restoration of chewing and speaking ability",
                                    "Natural-looking, aesthetic smile makeover",
                                    "Strengthened tooth structure and alignment",
                                    "Relief from chronic pain due to misaligned bite",
                                    "Long-term stability and durability with proper care",
                                    "Boosted self-esteem and overall oral health",


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
                                The FMR Process at Our Clinic
                            </Typography>
                            <Grid container spacing={3}>
                                {[
                                    <span><b>Initial Evaluation –</b> Includes clinical examination, digital X-rays, bite analysis, and discussion of goals.</span>,
                                    <span><b>Treatment Planning –</b> A step-by-step plan is created using digital impressions and mockups.</span>,
                                    <span><b>Oral Stabilization – </b>May include periodontal care or extractions if needed.</span>,
                                    <span><b>Restorative Phase – </b>Involves the placement of crowns, bridges, implants, veneers, or aligners.</span>,
                                    <span><b>Follow-Up & Adjustments – </b>Minor corrections and polishing for ideal fit, function, and comfort.</span>,

                                ].map((symptom, i) => (
                                    <Grid item xs={12} sm={12} key={i}>
                                        <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                                            <CheckCircleIcon color="primary" />
                                            {symptom}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Typography variant="h6" mt={3}>
                                Treatment duration varies from 4 weeks to 6 months depending on complexity.
                            </Typography>
                            <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3, mb: 2 }}>
                                FMR Cost in Borivali West – What to Expect

                            </Typography>
                            <Typography variant="h6" mt={3}>
                                The total cost of Full Mouth Rehabilitation depends on the number of procedures, materials used, and clinical requirements.</Typography>
                            <TableContainer component={Paper} sx={{ mx: "auto", mt: 4, borderRadius: 2, boxShadow: 3 }}>
                                <Table>
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                                            <TableCell sx={{ fontWeight: "bold", fontSize: 17 }}>Treatment Component</TableCell>
                                            <TableCell sx={{ fontWeight: "bold", fontSize: 17 }}>Estimated Price Range (₹)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {priceList.map((item, index) => (
                                            <TableRow key={index} hover>
                                                <TableCell sx={{ fontSize: 15 }}>{item.treatment}</TableCell>
                                                <TableCell sx={{ fontSize: 15 }}>{item.price}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Typography variant="h6" mt={3}>
                                A personalized estimate is provided after the consultation based on your treatment plan.
                            </Typography>
                            <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3, mb: 2 }}>
                                Common Myths vs Facts About FMR
                            </Typography>
                            <TableContainer component={Paper} sx={{ mx: "auto", mt: 4, borderRadius: 2, boxShadow: 3 }}>
                                <Table>
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                                            <TableCell sx={{ fontWeight: "bold", fontSize: 17 }}>Myth</TableCell>
                                            <TableCell sx={{ fontWeight: "bold", fontSize: 17 }}>Fact</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {mythsFacts.map((item, index) => (
                                            <TableRow key={index} hover>
                                                <TableCell sx={{ fontSize: 15 }}>{item.myth}</TableCell>
                                                <TableCell sx={{ fontSize: 15 }}>{item.fact}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3, mb: 2 }}>
                                Frequently Asked Questions (FAQs)
                            </Typography>
                            {faqs.map((faq, index) => (
                                <Accordion key={index} sx={{ mb: 1, border: '1px solid lightgrey', borderBottomLeftRadius: 3, borderBottomRightRadius: 3 }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography sx={{ fontWeight: 500 }}>{faq.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>{faq.answer}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                            <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3, mb: 2 }}>
                                Book a Full Mouth Rehabilitation Consultation Today
                            </Typography>
                            <Typography variant="h6" mt={3}>

                                If you’re struggling with worn-down teeth, multiple dental problems, or chronic jaw discomfort, don’t wait. Full Mouth Rehabilitation can restore your smile, improve function, and enhance quality of life.
                                <br></br><br></br>Visit our <a href="https://www.smilesolutionsclinic.com/" target="blank">dental clinic in Borivali</a> for an expert evaluation and a personalized, comprehensive treatment plan designed to bring your mouth back to full health.
                                <br></br><br></br><b>📞  Schedule your consultation now and begin your journey to a healthier, more confident smile.
                                </b>
                            </Typography>
                        </Box>
                    </Fade>
                </Container>
            </section>
            <Footer />
        </>
    );
}