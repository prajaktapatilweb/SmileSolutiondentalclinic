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
    { name: "Pediatric Dental Check-up", price: "₹300 – ₹600", remarks: "Includes oral exam and consultation" },
    { name: "Teeth Cleaning & Polishing for Children", price: "₹700 – ₹1,000", remarks: "Removes plaque, tartar, stains" },
    { name: "Fluoride Treatment", price: "₹800 – ₹1,200", remarks: "Strengthens enamel, prevents cavities" },
    { name: "Cavity Filling (Tooth-Colored)", price: "₹1,000 – ₹2,500", remarks: "Based on cavity size and location" },
    { name: "Dental Sealants (per tooth)", price: "₹1,200 – ₹1,800", remarks: "Prevents decay on molars and premolars" },
    { name: "Space Maintainers", price: "₹2,000 – ₹5,000", remarks: "Custom-made device" },
    { name: "Emergency Dental Visit for Kids", price: "₹500 – ₹1,500", remarks: "Based on treatment required" },
    { name: "Habit Counseling (Thumb Sucking, etc.)", price: "₹500 – ₹1,000 per session", remarks: "Behavioral guidance and correction plan" },
];
const criteriaData = [
    { criteria: "Training", pediatric: "Specialized in child dental care", general: "General population" },
    { criteria: "Behavior Management", pediatric: "Skilled in working with anxious children", general: "May lack pediatric focus" },
    { criteria: "Equipment", pediatric: "Child-sized instruments and chairs", general: "Standard tools" },
    { criteria: "Clinic Environment", pediatric: "Playful, fun, and stress-free", general: "Neutral or clinical" },
];
const faqs = [
    { q: "What age is considered pediatric in dentistry?", a: "Pediatric care includes children from birth to 18 years." },
    { q: "How often should kids visit the dentist?", a: "Every 6 months, or more frequently if recommended by your dentist." },
    { q: "Why fill cavities in baby teeth?", a: "Untreated decay in baby teeth can lead to infection, pain, and affect permanent teeth." },
    { q: "Are dental X-rays safe for kids?", a: "Yes, we use low-radiation digital X-rays and only when necessary." },
    { q: "My child is scared of the dentist—what can we do?", a: "Our team uses behavior guidance, storytelling, and gentle explanations to ease fear and create positive experiences." }
];
const styles = {
    headerCell: {
        p: 2,
        textAlign: "center",
        backgroundColor: "rgba(1, 166, 162, 0.8)",
        color: "#fff",
        borderRadius: 2,
        backdropFilter: "blur(6px)",
    },
    cell: {
        p: 2,
        backgroundColor: "rgba(240, 248, 255, 0.6)",
        backdropFilter: "blur(4px)",
        borderRadius: 2,
        height: "100%",
        textAlign: "center",
        transition: "all 0.3s ease",
        '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
        },
    },
};
export default function Pediatricdental() {
    const [ref1, inView1] = useInView({ triggerOnce: true });
    const [ref2, inView2] = useInView({ triggerOnce: true });

    return (
        <>
            <Head>
                <link rel="canonical" href="https://www.smilesolutionsclinic.com/services/pediatric-dentist-in-borivali-west" />
                <title>Pediatric Dentist in Borivali West | Kids Dentist in Mumbai</title>
                <meta name="description" content="Looking for a trusted pediatric dentist in Borivali West, Mumbai? Smile Solutions offers expert kids dental care, from routine checkups to cavity treatment, with gentle care and modern techniques." />
            </Head>

            <Navbar />
            <section style={{ backgroundColor: 'white' }}>
                <Box
                    sx={{
                        position: "relative",
                        py: 14,
                        textAlign: "center",
                        color: "white",
                        backgroundImage: "url('/images/treatments/kids1.jpg')",
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
                                    Pediatric Dentist in Borivali West
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
                                    A child’s early dental visits shape their lifelong oral health habits. At Smile Solutions, our <b>pediatric dentist in Borivali West</b>, Mumbai is designed to offer dental care for children, ensuring they feel safe, relaxed, and happy during every visit.
                                    <br></br><br></br>
                                    Led by experienced child dental specialists, we care for infants, toddlers, and teens with treatments that cater to their unique developmental needs. Whether you’re searching for a <b>kids dentist near me</b> or a trusted <b>children’s dental clinic in Borivali West</b>, our team is here for you with prevention-first, child-friendly solutions.
                                </Typography>
                            </Box>
                        </Slide>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Fade in={inView1} timeout={800}>
                        <Box>
                            <Typography variant="h2" gutterBottom color="primary" sx={{}}>
                                What is Pediatric Dentistry?
                            </Typography>
                            <Typography variant="h6" paragraph>
                                Pediatric dentistry is a specialized branch of dental care focused exclusively on dental care for children, from infancy through adolescence. This includes:

                            </Typography>
                            <Grid container spacing={3} mt={1}>
                                {[
                                    "Preventive dental exams",
                                    "Oral hygiene education",
                                    "Fluoride treatments and sealants",
                                    "Cavity treatment for baby teeth",
                                    "Growth and jaw monitoring",
                                    "Behavior guidance during treatments",

                                ].map((symptom, i) => (
                                    <Grid item xs={12} sm={6} key={i}>
                                        <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                                            <CheckCircleIcon color="primary" />
                                            {symptom}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>

                            <Typography variant="h6" mt={3}>Our trained <b>pediatric dentist in Borivali West</b> understands child psychology and uses modern, pain-free methods to ensure every child has a stress-free experience.</Typography>
                            <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3 }}>

                                Why Is Pediatric Dental Care Important?

                            </Typography>
                            <Grid container spacing={3} mt={1}>
                                {[
                                    "Detects cavities, gum problems, or misaligned teeth early",
                                    "Encourages good brushing and flossing habits from a young age",
                                    "Reduces dental anxiety through gentle, friendly care",
                                    "Guides jaw growth and speech development",
                                    "Prevents complications by treating issues promptly",

                                ].map((symptom, i) => (
                                    <Grid item xs={12} sm={6} key={i}>
                                        <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                                            <CheckCircleIcon color="primary" />
                                            {symptom}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Typography variant="h6" mt={3} >Routine visits to a <b>child-friendly dental clinic in Borivali West</b> help maintain strong, healthy teeth through every stage of development.</Typography>
                            <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3, mb: 2 }}>

                                Early Signs Your Child Needs a Dentist Visit

                            </Typography>
                            <Grid container spacing={2}>
                                {/* Header Row */}
                                <Grid item xs={6}>
                                    <Paper elevation={3} sx={styles.headerCell}>
                                        <Typography variant="h6" fontWeight="bold" noWrap>
                                            Symptom or Condition
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6}>
                                    <Paper elevation={3} sx={styles.headerCell}>
                                        <Typography variant="h6" fontWeight="bold" noWrap>
                                            What It Could Mean
                                        </Typography>
                                    </Paper>
                                </Grid>


                                {[
                                    {
                                        feature: "White or brown spots on teeth",
                                        braces: "Early tooth decay",
                                    },
                                    {
                                        feature: "Persistent bad breath",
                                        braces: "Possible gum infection or poor hygiene",
                                    },
                                    {
                                        feature: "Swollen or bleeding gums",
                                        braces: "Gingivitis or brushing technique issues",
                                    },
                                    {
                                        feature: "Difficulty chewing or speaking",
                                        braces: "Malocclusion or jaw development concerns",
                                    },
                                    {
                                        feature: "Thumb sucking beyond age 4",
                                        braces: "Risk of bite misalignment",
                                    },

                                ].map((row, index) => (
                                    <React.Fragment key={index}>
                                        <Grid item xs={6}>
                                            <Paper elevation={1} sx={styles.cell}>
                                                <Typography variant="body1">
                                                    {row.feature}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Paper elevation={1} sx={styles.cell}>
                                                <Typography variant="body1">{row.braces}</Typography>
                                            </Paper>
                                        </Grid>

                                    </React.Fragment>
                                ))}
                            </Grid>
                            <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3, mb: 2 }}>

                                Common Pediatric Dental Treatments We Offer

                            </Typography>
                            <Stack spacing={4} mt={4}>
                                {[
                                    {
                                        title: "Preventive Dental Checkups",
                                        desc: <span style={{ lineHeight: 1.9, ml: 2 }}>
                                            Regular exams to monitor growth and detect issues early.
                                        </span>,
                                    },
                                    {
                                        title: "Dental Cleanings & Fluoride Treatments",
                                        desc: <span style={{ lineHeight: 1.9, ml: 2 }}>
                                            Essential for plaque removal and cavity protection.
                                        </span>
                                    },
                                    {
                                        title: "Dental Sealants for Kids",
                                        desc: <span style={{ lineHeight: 1.9, ml: 2 }}>
                                            A protective layer to prevent decay on molars and premolars.
                                        </span>
                                    },
                                    {
                                        title: "Tooth-Colored Fillings for Baby Teeth",
                                        desc: <span style={{ lineHeight: 1.9, ml: 2 }}>
                                            We provide baby teeth cavity treatment using safe, aesthetic materials.                                                2. May result in fewer and quicker adjustment appointments.<br></br>
                                        </span>
                                    },
                                    {
                                        title: "Thumb Sucking & Pacifier Habit Counseling",
                                        desc: <span style={{ lineHeight: 1.9, ml: 2 }}>
                                            Gentle habit correction to support natural jaw alignment.                                              </span>
                                    },
                                    {
                                        title: "Space Maintainers",
                                        desc: <span style={{ lineHeight: 1.9, ml: 2 }}>
                                            Custom-made to preserve alignment when baby teeth fall out prematurely.
                                        </span>
                                    },
                                    {
                                        title: "Emergency Dental Care for Children",
                                        desc: <span style={{ lineHeight: 1.9, ml: 2 }}>
                                            Quick response to toothaches, broken teeth, or accidents.                                              </span>
                                    },
                                ].map((brace, i) => (
                                    <Paper
                                        key={i}
                                        elevation={3}
                                        sx={{
                                            p: 2,
                                            display: "flex",
                                            gap: 2,
                                            alignItems: "flex-start",
                                            borderRadius: 2,
                                            // backdropFilter: "blur(4px)",
                                            // border: "2px solid rgba(0,123,255,0.15)",
                                            // "&:hover": {
                                            //   transform: "translateY(-4px)",
                                            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                                            // },
                                        }}
                                    >
                                        <ArrowForwardIosIcon color="primary" sx={{ mt: 0.5 }} />
                                        <Box>
                                            <Typography variant="h5" fontWeight="bold">
                                                {brace.title}
                                            </Typography>
                                            <Typography variant="h7" mt={1} >
                                                {brace.desc}
                                            </Typography>
                                        </Box>
                                    </Paper>
                                ))}
                            </Stack>
                            <Typography variant="h6" mt={4} gutterBottom>Looking for <b>pediatric dental treatments near me?</b> Our team ensures age-appropriate, friendly, and effective dental solutions.</Typography>

                            <Typography variant="h2" gutterBottom color="primary" sx={{ mt: 3, mb: 2 }}>
                                Pediatric Dental Treatment Cost in Borivali West
                            </Typography>

                            <TableContainer component={Paper} sx={{ margin: "20px auto", borderRadius: 2, boxShadow: 3 }}>
                                <Table>
                                    <TableHead sx={{}}>
                                        <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                                            <TableCell sx={{ fontSize: 17 }}><b>Treatment</b></TableCell>
                                            <TableCell sx={{ fontSize: 17 }}><b>Starting Price (₹)</b></TableCell>
                                            <TableCell sx={{ fontSize: 17 }}><b>Remarks</b></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {treatments.map((t, index) => (
                                            <TableRow key={index}>
                                                <TableCell sx={{ fontSize: 15 }}><b>{t.name}</b></TableCell>
                                                <TableCell sx={{ fontSize: 15 }}>{t.price}</TableCell>
                                                <TableCell sx={{ fontSize: 15 }}>{t.remarks}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Typography variant="h6" mt={4} gutterBottom>
                                <b>Note:</b><br></br>
                                The pediatric dental prices mentioned above are indicative and may vary based on the child's specific dental condition, the complexity of the treatment, the materials used, and the clinical assessment made by the dentist. Final costs will be confirmed after a thorough examination. Prices may also differ slightly between clinics or based on location and expertise of the specialist.
                            </Typography>
                            <Typography variant="h2" color='primary' mt={4} gutterBottom>
                                When Should Your Child First Visit a Dentist?
                            </Typography>
                            <Typography variant="h6" mt={4} gutterBottom>
                                The first dental visit for a child should ideally happen by their first birthday or when the first tooth erupts whichever comes earlier. Our <b>pediatric dentist in Borivali West</b> will monitor eruption patterns, offer brushing tips, and answer your questions as a parent.
                            </Typography>
                            <Typography variant="h2" color='primary' mt={4} gutterBottom>
                                Preparing Your Child for Their Dental Visit
                            </Typography>

                            <Grid container spacing={3} mt={1}>
                                {[
                                    "Talk positively about going to the dentist",
                                    "Choose a morning appointment when your child is well-rested",
                                    "Avoid words like \"pain\" or \"hurt\"",
                                    "Let them bring a comfort toy",
                                    "Watch videos or read books about dental visits",


                                ].map((symptom, i) => (
                                    <Grid item xs={12} sm={12} key={i}>
                                        <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                                            <CheckCircleIcon color="primary" />
                                            {symptom}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Typography variant="h6" mt={3} gutterBottom>Our <b>kids dental clinic in Borivali West</b> is designed with a warm, playful environment to make your child feel safe and excited about their visit.</Typography>
                            <Typography variant="h2" color='primary' mt={3} gutterBottom>Pediatric Dentist vs General Dentistry</Typography>
                            <TableContainer component={Paper} sx={{ margin: "20px auto", borderRadius: 2, boxShadow: 3 }}>

                                <Table>
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                                            <TableCell sx={{ fontSize: 17 }}><b>Criteria</b></TableCell>
                                            <TableCell sx={{ fontSize: 17 }}><b>Pediatric Dentist in Borivali West</b></TableCell>
                                            <TableCell sx={{ fontSize: 17 }}><b>General Dentist</b></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {criteriaData.map((row, index) => (
                                            <TableRow key={index} hover>
                                                <TableCell sx={{ fontSize: 15 }}>{row.criteria}</TableCell>
                                                <TableCell sx={{ fontSize: 15 }}>{row.pediatric}</TableCell>
                                                <TableCell sx={{ fontSize: 15 }}>{row.general}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Typography variant="h2" color='primary' mt={3} gutterBottom>Pediatric Dental FAQs</Typography>
                            {faqs.map((item, index) => (
                                <Accordion key={index} sx={{ mb: 1, border: '1px solid lightgrey', mb: 2, borderBottomLeftRadius: 3, borderBottomRightRadius: 3 }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography variant="subtitle1"><b>Q{index + 1}. {item.q}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="body1">{item.a}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                            <Typography variant="h2" mt={3} color='primary' gutterBottom>Why Choose Smile Solutions for Pediatric Dentists in Borivali West?</Typography>
                            <Grid container spacing={3} mt={1}>
                                {[
                                    "Experienced pediatric dental specialist near you",
                                    "Fun, interactive environment for children",
                                    "Advanced tools designed for tiny teeth",
                                    "Emergency & preventive care under one roof",
                                    "Trusted dental clinic in Borivali West with hundreds of happy parents",
                                    "Emphasis on building lifelong oral health habits",


                                ].map((symptom, i) => (
                                    <Grid item xs={12} sm={12} key={i}>
                                        <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                                            <CheckCircleIcon color="primary" />
                                            {symptom}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Typography variant="h2" mt={3} color='primary' gutterBottom>Searching for a Pediatric Dentist Near Me?</Typography>
                            <Typography variant="h6" mt={3} gutterBottom>
                                If you’re looking for a pediatric dentist near me, <b>Smile Solutions</b>, is the best <a href="https://www.smilesolutionsclinic.com/" target="blank">dental clinic in Borivali West</a>, is the right choice. From first dental visits to ongoing care for cavities, oral habits, and preventive treatments, we treat each child with kindness, expertise, and compassion.
                                <br></br><br></br><b>📞 Book an appointment today and give your child the gift of a bright, healthy smile.</b>
                            </Typography>
                        </Box>
                    </Fade>
                </Container>
            </section>
            <Footer />
        </>
    );
}