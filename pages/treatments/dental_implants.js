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
                <title>Dental Implants in Borivali West | Smile Solutions</title>
                <meta name="description" content="Restore your smile with advanced dental implants by Dr. Heeral Chikhal and Dr. Kalpesh Dey at Smile Solutions Dental Clinic in Borivali West." />
            </Head>

            <Navbar />

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
                            <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
                                Expert Implant Care in Borivali West
                            </Typography>
                            <Typography variant="h6" paragraph>
                                Missing teeth can significantly impact your quality of life, affecting everything from your confidence to your ability to eat and speak clearly. If you're searching for a permanent, natural-looking solution, dental implants in Borivali West offer an exceptional option. At <strong>Smile Solutions Dental Clinic</strong>, led by our highly esteemed Implantologist in Borivali West, <strong>Dr. Heeral Chikhal (MDS Prosthodontist & Implantologist)</strong>, and expertly supported by <strong>Dr. Kalpesh Dey (MDS Endodontist & Cosmetic Dentist)</strong>, we are dedicated to providing the highest standard of implant dentistry. Our combined expertise makes us widely recognized as the Best Implantologist Doctor in <strong>Borivali West, Mumbai</strong>, committed to restoring beautiful, functional smiles.
                            </Typography>
                        </Box>
                    </Slide>
                </Box>

                <Divider sx={{ my: 6 }} />

                <Fade in={inView1} timeout={800}>
                    <Box>
                        <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
                            Why Choose Dental Implants?
                        </Typography>
                        <Typography variant="h6" paragraph>
                            Dental implants are the most advanced and durable solution for replacing missing teeth. Unlike traditional dentures or bridges, implants function like natural tooth roots, providing unparalleled stability and preserving your jawbone. When considering dental implants in Mumbai, choosing a specialized clinic like Smile Solutions, backed by the expertise of <strong>Dr. Heeral Chikhal & Dr. Kalpesh Dey</strong>, ensures you receive expert care right here in <strong>Borivali West</strong>.                            </Typography>
                        <Grid container spacing={3} mt={1}>
                            {[
                                {
                                    icon: <CheckCircleIcon color="primary" fontSize="large" />, title: "Natural Aesthetics",
                                    desc: "Implants look, feel, and perform just like your natural teeth, allowing you to smile, speak, and eat with complete confidence."
                                },
                                {
                                    icon: <HealingIcon color="primary" fontSize="large" />, title: "Improved Oral Health",
                                    desc: "Unlike bridges, implants don't require altering adjacent healthy teeth. They also help prevent bone loss in the jaw, maintaining your facial structure."
                                },
                                {
                                    icon: <DoneAllIcon color="primary" fontSize="large" />, title: "Long-Lasting",
                                    desc: "With proper care, dental implants in Borivali West can last a lifetime, making them a wise long-term investment in your oral health."
                                },
                                {
                                    icon: <GppGoodIcon color="primary" fontSize="large" />, title: "Stable & Comfortable",
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

                <Divider sx={{ my: 6 }} />

                <Fade in={inView1} timeout={1000}>
                    <Box>
                        <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
                            Meet Our Experts
                        </Typography>
                        <Typography variant="h6" paragraph>
                            Finding the right dental implant specialist in Borivali West is crucial for a successful outcome. <strong>At Smile Solutions</strong>, our team, spearheaded by <strong><a
  href="https://www.smilesolutionsclinic.com/#:~:text=Complete%20Dental%20Care-,Dr.%20Heeral%20Chikhal,-MDS%20%2D%20Prosthodontist%20%26%20Implantologist"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: '#1976d2', textDecoration: 'underline', fontWeight: 'bold' }}
>
  Dr. Heeral Chikhal
</a></strong>, a highly experienced Implantologist, possesses the extensive expertise and state-of-the-art technology required for precise implant placement and restoration. Supported by <strong><a
  href="https://www.smilesolutionsclinic.com/#:~:text=Book%20An%20Appointment-,Dr.%20Kalpesh%20Dey,-MDS%20%2D%20Endodontist%20%26%20Cosmetic"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: '#1976d2', textDecoration: 'underline', fontWeight: 'bold' }}
>
  Dr. Kalpesh Dey
</a></strong>, our clinic ensures a holistic approach to your dental health. We are proud to be considered among the Best Dental Implant Fixing doctors in Borivali West, known for our meticulous approach and patient-first philosophy. Our clinic serves as a leading dental implants centre in Borivali West, equipped to handle all aspects of implant dentistry.                        </Typography>
                    </Box>
                </Fade>

                <Divider sx={{ my: 6 }} />

                <Box ref={ref2} sx={{ py: 1 }}>

                    <Fade in={inView2} timeout={800}>
                        <Box>
                            <Typography variant="h3" fontWeight="bold" gutterBottom textAlign="left" color="primary">
                                Our 5-Step Implant Process
                            </Typography>

                            <Stack spacing={4} mt={6}>
                                {[
                                    {
                                        title: "1. Detailed Consultation & Planning",
                                        desc: "Our Implant Specialist In Borivali, Dr. Heeral Chikhal, conducts a thorough examination, including advanced 3D CBCT scans, to assess your bone density, gum health, and overall oral structure. This allows us to create a precise, customized treatment plan for your dental implants in Borivali."
                                    },
                                    {
                                        title: "2. Implant Placement",
                                        desc: "The small, biocompatible titanium implant post is surgically placed into your jawbone. This outpatient procedure is performed with utmost precision and comfort by Dr. Heeral Chikhal."
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
                                        desc: "Finally, a custom-made crown, bridge, or denture, meticulously crafted to match your natural teeth, is securely attached, completing your beautiful new smile."
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

                <Divider sx={{ my: 6 }} />

                <Fade in={inView2} timeout={1000}>
                    <Box>
                        <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
                            Our Implant Solutions
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
                                    desc: "A revolutionary technique for replacing an entire arch of teeth using just four strategically placed implants."
                                },
                                {
                                    number: 4,
                                    title: "All-on-6 Implants",
                                    desc: "Uses six implants per arch, providing even greater stability and support for comprehensive full-mouth rehabilitation."
                                },
                                {
                                    number: 5,
                                    title: "Implant-Supported Dentures",
                                    desc: "Implants provide secure anchors for dentures, preventing slippage and improving comfort."
                                },
                                {
                                    number: 6,
                                    title: "Immediate Load Implants",
                                    desc: "Temporary restoration placed on the implant immediately after surgery for suitable cases."
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


                <Divider sx={{ my: 6 }} />

                <Fade in timeout={1000}>
                    <Box>
                        <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
                            Bone Grafting for Implant Success
                        </Typography>
                        <Typography variant="h6">
                            Not everyone has sufficient bone density for immediate implant placement. If you've experienced significant bone loss due to long-term tooth extraction or gum disease, Bone Grafting For Dental Implants can create the necessary foundation. Our Implantologist in Borivali West, <strong>Dr. Heeral Chikhal</strong>, is highly skilled in performing various bone grafting techniques, ensuring that even patients with bone deficiencies can become candidates for successful dental implants. This procedure allows us to expand implant suitability to a broader range of individuals.                        </Typography>
                    </Box>
                </Fade>

                <Divider sx={{ my: 6 }} />
                <Fade in timeout={1000}>
  <Box>
    <Typography
      variant="h3"
      fontWeight="bold"
      gutterBottom
      color="primary"
      textAlign="left"
    >
      Transparent Pricing
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
          note: "Full dental implant cost for complete upper and lower arch rehabilitation.",
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
  </Box>
</Fade>



            </Container>

            <Footer />
        </>
    );
}