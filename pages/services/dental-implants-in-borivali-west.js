import Head from "next/head";
import Navbar from "/components/header/navbar"; // adjust path as per your structure
import Footer from "/components/footer/footer"; // adjust path as per your structure
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";


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
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PeopleIcon from "@mui/icons-material/People";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealingIcon from "@mui/icons-material/Healing";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import GppGoodIcon from "@mui/icons-material/GppGood";

export default function DentalImplants() {
    const [ref1, inView1] = useInView({ triggerOnce: true });
    const [ref2, inView2] = useInView({ triggerOnce: true });

    return (
        <>
            <Head>
                <link rel="canonical" href="https://www.smilesolutionsclinic.com/services/dental-implants-in-borivali-west" />
                <title>Dental Implants in Borivali West | Full Mouth Implants Near Me</title>
                <meta name="description" content="Looking for top-quality dental implants in Borivali West? Visit Smile Solutions, led by Dr. Heeral Chikhal, a trusted Implantologist and Prosthodontist known for delivering lasting, natural-looking results with precision and care." />
            </Head>

            <Navbar />
            <section style={{ backgroundColor: 'white' }}>
                <Box
                    sx={{
                        position: "relative",
                        py: 12,
                        textAlign: "center",
                        color: "white",
                        backgroundImage: "url('/images/treatments/dental_implants.jpg')",
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
                            backgroundColor: "rgba(0, 0, 0, 0.6)", // black transparent overlay
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
                                    Dental Implants in Borivali West
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
                                    Missing teeth can significantly impact your quality of life, affecting everything from your confidence to your ability to eat and speak clearly. If you're searching for <b>dental implants in Borivali West</b>, we offer a permanent, natural-looking solution. At Smile Solutions Dental Clinic, led by our highly esteemed Implantologist in Borivali West, Dr. Heeral Chikhal (MDS Prosthodontist & Implantologist), and expertly supported by Dr. Kalpesh Dey (MDS Endodontist & Cosmetic Dentist), we are dedicated to providing the highest standard of implant dentistry. Our combined expertise makes us widely recognized as the best implantologist doctors in Borivali West, Mumbai, committed to restoring beautiful, functional smiles.
                                </Typography>
                            </Box>
                        </Slide>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Fade in={inView1} timeout={800}>
                        <Box>
                            <Typography variant="h2" gutterBottom color="primary" sx={{}}>
                                Why Choose Smile Solutions for Dental Implants in Borivali West?
                            </Typography>
                            <Typography variant="h6" paragraph>
                                Dental implants are the most advanced and durable solution for replacing missing teeth. Unlike traditional dentures or bridges, implants function like natural tooth roots, providing unparalleled stability and preserving your jawbone. When considering <b>dental implants in Mumbai</b>, choosing a specialized clinic like Smile Solutions, backed by the expertise of Dr. Heeral Chikhal and Dr. Kalpesh Dey, ensures you receive expert care right here in Borivali West.
                                <br></br>Here's why patients choose dental implants:

                            </Typography>
                            <Grid container spacing={3} mt={1}>
                                {[
                                    {
                                        icon: <CheckCircleIcon color="primary" fontSize="large" />, title: "Natural Aesthetics & Functionality",
                                        desc: "Implants look, feel, and perform just like your natural teeth, allowing you to smile, speak, and eat with complete confidence."
                                    },
                                    {
                                        icon: <HealingIcon color="primary" fontSize="large" />, title: "Improved Oral Health",
                                        desc: "Unlike bridges, implants don't require altering adjacent healthy teeth. They also help prevent bone loss in the jaw, maintaining your facial structure."
                                    },
                                    {
                                        icon: <DoneAllIcon color="primary" fontSize="large" />, title: "Durability & Longevity",
                                        desc: "With proper care, dental implants near me can last a lifetime, making them a wise long-term investment in your oral health."
                                    },
                                    {
                                        icon: <GppGoodIcon color="primary" fontSize="large" />, title: "Enhanced Comfort",
                                        desc: "Fixed in place, implants eliminate the slipping and discomfort associated with removable dentures."
                                    },
                                ].map((item, i) => (
                                    <Grid item xs={12} sm={6} md={3} key={i}>
                                        <Paper
                                            elevation={3}
                                            sx={{
                                                p: 3,
                                                textAlign: "center",
                                                height: "100%",
                                                border: "2px solid rgba(0, 123, 255, 0.2)", // light blue translucent border
                                                backgroundColor: "rgba(240, 248, 255, 0.5)", // soft translucent blue/gray
                                                backdropFilter: "blur(4px)", // subtle glassmorphism
                                                borderRadius: 2,
                                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                "&:hover": {
                                                    transform: "translateY(-4px)",
                                                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)"
                                                }
                                            }}
                                        >

                                            <Box mb={1}>{item.icon}</Box>
                                            <Typography fontWeight="bold" variant="h4">{item.title}</Typography>
                                            <Typography variant="h6" mt={1}>{item.desc}</Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Fade>

                    <Divider sx={{ my: 3 }} />

                    <Fade in={inView1} timeout={1000}>
                        <Box>
                            <Typography variant="h2" gutterBottom color="primary">
                                Your Trusted Dental Implant Specialist in Borivali West: Meet Our Experts
                            </Typography>
                            <Typography variant="h6" paragraph>
                                Finding the right dental implant specialist in Borivali West is crucial for a successful outcome. At Smile Solutions, our team, spearheaded by Dr. Heeral Chikhal, a highly experienced Implantologist, possesses the extensive expertise and state-of-the-art technology required for precise implant placement and restoration. Supported by Dr. Kalpesh Dey, our clinic ensures a holistic approach to your dental health. We are proud to be considered among the Best Dental Implant Fixing doctors in Borivali West, known for our meticulous approach and patient-first philosophy. Our clinic serves as a leading dental implants centre in Borivali West, equipped to handle all aspects of implant dentistry.
                            </Typography>
                        </Box>
                    </Fade>

                    <Divider sx={{ my: 3 }} />

                    <Box ref={ref2} sx={{ py: 1 }}>

                        <Fade in={inView2} timeout={800}>
                            <Box>
                                <Typography variant="h3" gutterBottom textAlign="left" color="primary">
                                    The Dental Implant Process at Our Clinic
                                </Typography>
                                <Typography variant="h6" paragraph>Our comprehensive approach, overseen by Dr. Heeral Chikhal and Dr. Kalpesh Dey, ensures a smooth and successful implant journey:
                                </Typography>
                                <Stack spacing={4} mt={6}>
                                    {[
                                        {
                                            title: "1. Detailed Consultation & Planning",
                                            desc: " Our Implant Specialist in Borivali, Dr. Heeral Chikhal, conducts a thorough examination, including advanced 3D CBCT scans, to assess your bone density, gum health, and overall oral structure. This allows us to create a precise, customized treatment plan tailored to your needs."
                                        },
                                        {
                                            title: "2. Implant Placement",
                                            desc: " The small, biocompatible titanium implant post is surgically placed into your jawbone. This outpatient procedure is performed with utmost precision and comfort by Dr. Heeral Chikhal."
                                        },
                                        {
                                            title: "3. Healing Period (Osseointegration)",
                                            desc: "Over several months, the implant naturally fuses with your jawbone, creating a strong and stable anchor for your new tooth."
                                        },
                                        {
                                            title: "4. Abutment Placement",
                                            desc: "Once the implant is fully integrated, a small connector (abutment) is attached, which will hold your new crown."
                                        },
                                        {
                                            title: "5. Custom Crown Placement",
                                            desc: " Finally, a custom-made crown, bridge, or denture, meticulously crafted to match your natural teeth, is securely attached, completing your beautiful new smile."
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
                                                border: "2px solid rgba(0, 123, 255, 0.2)", // light blue translucent border
                                                backgroundColor: "rgba(240, 248, 255, 0.5)", // soft translucent blue/gray
                                                backdropFilter: "blur(4px)", // subtle glassmorphism
                                                borderRadius: 2,
                                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                "&:hover": {
                                                    transform: "translateY(-4px)",
                                                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                                                }
                                            }}
                                        >
                                            <ArrowForwardIosIcon color="primary" sx={{ mt: 0.5 }} />
                                            <Box>
                                                <Typography variant="h4" fontWeight="bold">
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

                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Fade in={inView2} timeout={1000}>
                        <Box>
                            <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
                                Advanced Dental Implant Solutions We Offer
                            </Typography>
                            <Typography variant="h6" paragraph>At Smile Solutions, under the guidance of Dr. Heeral Chikhal and Dr. Kalpesh Dey, we provide a full spectrum of dental implant solutions to cater to diverse patient needs:
                            </Typography>
                            <Grid container spacing={4} mt={2}>
                                {[
                                    {
                                        number: 1,
                                        title: "Single Tooth Implants",
                                        desc: "The ideal solution for replacing one missing tooth without impacting neighboring teeth."
                                    },
                                    {
                                        number: 2,
                                        title: "Multiple Tooth Implants",
                                        desc: "Used to support bridges when several teeth are missing, offering a fixed and stable alternative."
                                    },
                                    {
                                        number: 3,
                                        title: "All-on-4 Dental Implants",
                                        desc: "A revolutionary technique for replacing an entire arch of teeth (upper or lower) using just four strategically placed implants, often allowing for fixed teeth in a day."
                                    },
                                    {
                                        number: 4,
                                        title: "All-on-6 Implants",
                                        desc: "Similar to All-on-4, this method uses six implants per arch, providing even greater stability and support for comprehensive full-mouth rehabilitation. This is an excellent choice for maximum security and durability."
                                    },
                                    {
                                        number: 5,
                                        title: "Implant-Supported Dentures",
                                        desc: " For patients seeking more stability than traditional removable dentures, implants can provide secure anchors, preventing slippage and improving comfort."
                                    },
                                    {
                                        number: 6,
                                        title: "Immediate Load Implants",
                                        desc: "In suitable cases, a temporary restoration can be placed on the implant immediately after surgery, allowing you to leave our dental implants centre in Borivali West with a provisional tooth."
                                    },
                                ]
                                    .map((item, i) => (
                                        <Grid item xs={12} sm={6} md={4} key={i}>
                                            <Slide direction="up" in={true} timeout={500 + i * 200}>
                                                <Paper
                                                    elevation={4}
                                                    sx={{
                                                        p: 3,
                                                        height: "100%",
                                                        border: "2px solid rgba(0, 123, 255, 0.1)",
                                                        backgroundColor: "rgba(240, 248, 255, 0.6)",
                                                        backdropFilter: "blur(4px)",
                                                        borderRadius: 2,
                                                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                        textAlign: "center",
                                                        '&:hover': {
                                                            transform: 'translateY(-6px)',
                                                            boxShadow: '0 12px 20px rgba(0,0,0,0.12)'
                                                        }
                                                    }}
                                                >
                                                    <Box
                                                        mb={2}
                                                        sx={{
                                                            width: 40,
                                                            height: 40,
                                                            borderRadius: "50%",
                                                            backgroundColor: "#01A6A2",
                                                            color: "white",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontWeight: "bold",
                                                            fontSize: "1.2rem",
                                                            mx: "auto"
                                                        }}
                                                    >
                                                        {item.number}
                                                    </Box>

                                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        {item.desc}
                                                    </Typography>
                                                </Paper>
                                            </Slide>
                                        </Grid>
                                    ))}
                            </Grid>
                        </Box>
                    </Fade>


                    <Divider sx={{ my: 3 }} />

                    <Fade in timeout={1000}>
                        <Box>
                            <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
                                Bone Grafting for Implant Success
                            </Typography>
                            <Typography variant="h6">
                                Not everyone has sufficient bone density for immediate implant placement. If you've experienced significant bone loss due to long-term tooth extraction or gum disease, Bone Grafting For Dental Implants can create the necessary foundation. Our Implantologist in Borivali West, Dr. Heeral Chikhal, is highly skilled in performing various bone grafting techniques, ensuring that even patients with bone deficiencies can become candidates for successful dental implants. This procedure allows us to expand implant suitability to a broader range of individuals.</Typography>
                        </Box>
                    </Fade>

                    <Divider sx={{ my: 3 }} />
                    <Fade in timeout={1000}>

                        <Box>
                            <Typography variant="h2" color='primary' gutterBottom>Understanding Dental Implant Cost: What to Expect at Smile Solutions</Typography>
                            <Typography variant="h6" gutterBottom>Understanding the cost of dental implants is a primary concern for many patients. At Smile Solutions, the dental implants treatment cost is transparent and depends on several factors, including the type of implant, the number of implants required, the material of the crown, and any additional procedures like bone grafting. We strive to offer the most competitive and fair dental implants cost in Borivali West—ensuring high-quality care at the right teeth implants price.</Typography>

                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                gutterBottom
                                color="primary"
                                textAlign="left"
                            >
                                Dental Implants Cost in Borivali West:
                            </Typography>

                            <Grid container spacing={2} justifyContent="center" mt={2}>
                                {[
                                    {
                                        label: "Single Dental Implant (Implant Only)",
                                        cost: "₹18,000 – ₹35,000+",
                                        note: "This covers the implant screw itself.",
                                    },
                                    {
                                        label: "Single Dental Implant with Crown",
                                        cost: "₹30,000 – ₹60,000+",
                                        note: "Includes the implant screw, abutment, and a custom crown (type of crown affects cost).",
                                    },
                                    {
                                        label: "Multiple Dental Implants (per tooth replacement)",
                                        cost: "Varies widely",
                                        note: "Cost depends on the number of implants and the type of bridge (e.g., 2 implants for 3-unit bridge).",
                                    },
                                    {
                                        label: "All-on-4 Dental Implants (per arch)",
                                        cost: "₹1,20,000 – ₹2,50,000+",
                                        note: "For a full arch of fixed teeth supported by 4 implants. Covers implants and temporary/final prosthesis.",
                                    },
                                    {
                                        label: "All-on-6 Dental Implants (per arch)",
                                        cost: "₹1,80,000 – ₹3,50,000+",
                                        note: "For a full arch of fixed teeth supported by 6 implants, offering enhanced stability.",
                                    },
                                    {
                                        label: "Full Dental Implant Cost (Both Arches)",
                                        cost: "₹2,50,000 – ₹7,00,000+",
                                        note: <span><b>Full dental implant cost</b> for complete upper and lower arch rehabilitation.</span>,
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
                                            <Box mb={1}>
                                                <CurrencyRupeeIcon
                                                    sx={{ fontSize: 40, color: "primary.main", mb: 1 }}
                                                />
                                            </Box>
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

                            <Typography variant="h2" color='primary' sx={{ mt: 5 }} gutterBottom>Searching for "Full Mouth Dental Implants Near Me"? Your Search Ends Here!
                            </Typography>
                            <Typography variant="h6">If you're actively searching for full mouth dental implants near me in Borivali West, or an Implantologist near me, Smile Solutions is your definitive answer. Our convenient location, combined with our commitment to excellence, and the expert care provided by Dr. Heeral Chikhal and Dr. Kalpesh Dey, makes us the preferred choice for patients seeking top-tier dental implants in Borivali. We extend our services to all those looking for exceptional dental implants in Mumbai. Our dedicated team ensures a comfortable, supportive, and successful experience from your very first visit.
                            </Typography>
                            <Typography variant="h2" color='primary' sx={{ mt: 2 }} gutterBottom>Choose the Top Dentist for Full Mouth Dental Implants at Smile Solutions
                            </Typography>
                            <Typography variant="h6">At Smile Solutions, we are committed to providing an unparalleled patient experience. Our expertise, advanced technology, and patient-centric approach, spearheaded by Dr. Heeral Chikhal and Dr. Kalpesh Dey, set us apart as the top destination for dental implants. As a trusted <a href="https://www.smilesolutionsclinic.com/">dental clinic in Borivali West</a>, we understand the importance of a healthy, confident smile and are here to help you achieve it with durable, beautiful dental implants.
                                Don’t let missing teeth affect your life any longer. Contact Smile Solutions Dental Clinic today for a comprehensive consultation. We are your trusted partner for a lasting, radiant smile.
                            </Typography>
                        </Box>
                    </Fade>
                </Container>
            </section>
            <Footer />
        </>
    );
}