import Head from "next/head";
import Navbar from "/components/header/navbar"; // adjust path as per your structure
import Footer from "/components/footer/footer"; // adjust path as per your structure
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
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
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HealingIcon from "@mui/icons-material/Healing";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import GppGoodIcon from "@mui/icons-material/GppGood";

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
  

export default function DentalImplants() {
    const [ref1, inView1] = useInView({ triggerOnce: true });
    const [ref2, inView2] = useInView({ triggerOnce: true });

    return (
        <>
            <Head>
                <title>Braces & Aligners in Borivali West | Teeth Straightening Near Me</title>
                <meta name="description" content="Achieve a perfect smile with braces & aligners in Borivali West at Smile Solutions. Our orthodontic experts offer metal, ceramic, & clear aligners with transparent cost of braces & aligners." />
            </Head>
            <Navbar />

            <Box
                sx={{
                    position: "relative",
                    py: 12,
                    textAlign: "center",
                    color: "white",
                    backgroundImage: "url('/images/treatments/braces.jpg')",
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
                                Braces & Aligners in Borivali West
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
                                Confident, natural-looking smiles with advanced aligners.
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
                            Precision Braces & Aligners Treatment in Borivali West
                            </Typography> */}
                            <Typography variant="h6" paragraph>
Dreaming of a perfectly aligned smile but unsure if <b>braces or aligners</b> are right for you? At Smile Solutions Dental Clinic in Borivali West, we specialize in comprehensive <b>orthodontic treatment</b>, offering both traditional <b>braces in Borivali West</b> and advanced <b>clear aligners in Borivali West</b> to help you achieve the smile you've always desired. Our experienced dental team, including <b>Dr. Heeral Chikhal</b> (MDS Prosthodontist & Implantologist) and <b>Dr. Kalpesh Dey</b> (MDS Endodontist & Cosmetic Dentist), works collaboratively to provide personalized <b>teeth straightening</b> solutions with exceptional results.                            </Typography>
                        </Box>
                    </Slide>
                </Box>

                <Divider sx={{ my: 6 }} />

                <Fade in={inView1} timeout={800}>
  <Box>
    <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
      Why Consider Braces or Aligners in Borivali West?
    </Typography>

    <Typography variant="h6" paragraph>
Orthodontic treatment goes beyond just aesthetics; it significantly impacts your overall oral health. If you're experiencing issues like crooked teeth, overcrowding, gaps, or bite problems (overbite, underbite, crossbite), <b>teeth straightening in Borivali West</b> can provide numerous benefits:

    </Typography>

    <Grid container spacing={3} mt={1}>
      {[
        {
          icon: <CheckCircleIcon color="primary" fontSize="large" />,
          title: "Improved Oral Hygiene",
          desc: "Straight teeth are easier to brush and floss, reducing the risk of cavities and gum disease.",
        },
        {
          icon: <HealingIcon color="primary" fontSize="large" />,
          title: "Enhanced Chewing Function",
          desc: " Proper alignment improves bite, making it easier and more comfortable to chew food.",
        },
        {
          icon: <DoneAllIcon color="primary" fontSize="large" />,
          title: "Reduced Wear & Tear",
          desc: "Correctly aligned teeth distribute chewing forces evenly, preventing excessive wear on specific teeth.",
        },
        {
          icon: <GppGoodIcon color="primary" fontSize="large" />,
          title: "Speech Improvement",
          desc: <span>Some alignment issues can affect speech, which <b>orthodontic treatment</b> can often correct.</span>,
        },
        {
          icon: <CheckCircleIcon color="primary" fontSize="large" />,
          title: "Boosted Confidence",
          desc: " A beautiful, straight smile can significantly improve self-esteem and confidence in social and professional settings.",
        },
      ].map((item, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              textAlign: "center",
              height: "100%",
              border: "2px solid rgba(0, 123, 255, 0.2)",
              backgroundColor: "rgba(240, 248, 255, 0.5)",
              backdropFilter: "blur(4px)",
              borderRadius: 2,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Box mb={1}>{item.icon}</Box>
            <Typography fontWeight="bold" variant="h5">
              {item.title}
            </Typography>
            <Typography variant="h7" mt={1}>
              {item.desc}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
</Fade>

                <Divider sx={{ my: 6 }} />

                <Box ref={ref2} sx={{ py: 1 }}>

                <Fade in timeout={800}>
  <Box>
    <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
      Types of Braces Available at Smile Solutions
    </Typography>
    <Typography variant="h6" gutterBottom>
We offer a range of <b>braces in Borivali West</b> to suit different needs, preferences, and budgets for your <b>Aligners Treatment</b> or <b>dental braces cost:</b>    </Typography>
    <Stack spacing={4} mt={4}>
      {[
        {
          title: "Metal Braces in Borivali West",
          desc: <span style={{lineHeight:1.9,ml:2}}>
1. The most traditional and widely used type.<br></br>
2. Made from high-grade stainless steel, highly durable, and effective for complex cases.<br></br>
3. Often the most <b>affordable dental braces cost in Borivali West.</b><br></br>
4. Modern <b>metal braces</b> are smaller and more comfortable than ever before.<br></br>
</span>,
        },
        {
          title: "Ceramic Braces in Borivali West",
          desc: <span style={{lineHeight:1.9,ml:2}}>
1. Similar in structure to metal braces, but the brackets are made of clear or tooth-colored ceramic material.<br></br>
2. Less noticeable than <b>metal braces</b>, offering a more aesthetic option.<br></br>
3. Popular among adults and older teens seeking a discreet solution.<br></br>
</span>
        },
        {
          title: "Lingual Braces in Borivali West",
          desc: <span style={{lineHeight:1.9,ml:2}}>
1. These are completely hidden as they are placed on the inside (tongue side) of your teeth.<br></br>
2. Truly <b>invisible braces</b>, making them an excellent choice for those highly conscious about their appearance during treatment.<br></br>
3. Custom-made to fit the unique shape of your teeth.<br></br>
</span>
        },
        {
          title: "Self-Ligating Braces",
          desc: <span style={{lineHeight:1.9,ml:2}}>
1. Available in both metal and ceramic, these braces use a specialized clip mechanism instead of elastic ties to hold the archwire.<br></br>
2. May result in fewer and quicker adjustment appointments.<br></br>
</span>
   },
      ].map((brace, i) => (
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
              {brace.title}
            </Typography>
            <Typography variant="h7" mt={1} >
              {brace.desc}
            </Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
        <Typography variant="h6" gutterBottom  sx={{mt:3}}>
Our orthodontic experts will discuss the best type of <b>braces treatment</b> for your specific case during your consultation.
</Typography>
  </Box>
</Fade>


                </Box>

                <Divider sx={{ my: 6 }} />
<Fade in={inView2} timeout={1000}>
  <Box>
    <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
      Clear Aligners in Borivali West: The Invisible Choice
    </Typography>
    <Typography variant="h6" mt={1} mb={4}>
For those seeking a highly discreet and comfortable way to straighten their teeth, <b>Clear Aligners in Borivali West</b> are an excellent option. Also known as <b>invisible braces in Borivali West</b> or <b>Invisalign</b> (a popular brand of clear aligners), these custom-made, transparent trays gradually shift your teeth into the desired position without the need for brackets or wires. Consider <b>invisalign or invisible braces</b> for a subtle smile transformation.
    <br></br><b>Benefits of Clear Aligners:</b>
    </Typography>

    <Grid container spacing={4}>
      {[
        {
          number: 1,
          title: "Virtually Invisible",
          desc:  <span>The main advantage is their discreet appearance, making them popular for adults and teens who want to straighten teeth without visible braces. This is why many refer to them as <b>invisible braces.</b></span>,
        },
        {
          number: 2,
          title: "Removable",
          desc: <span>Aligners can be taken out for eating, drinking, brushing, and flossing, allowing for better oral hygiene and no food restrictions.</span>
        },
        {
          number: 3,
          title: "Comfortable",
          desc: <span>Made from smooth, flexible plastic, they typically cause less irritation to gums and cheeks compared to traditional <b>teeth braces.</b></span>
        },
        {
          number: 4,
          title: "Fewer Emergency Visits",
          desc: " No broken wires or brackets to worry about.",
        },
        
      ].map((item, i) => (
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
              <Typography variant="h7">
                {item.desc}
              </Typography>
            </Paper>
          </Slide>
        </Grid>
      ))}
    </Grid>
    <Typography variant="h6" mt={3} mb={4}>

    We work with leading aligner systems to provide effective and predictable results for your Aligners Treatment at Smile Solutions.
  </Typography>
  </Box>
</Fade>

<Divider sx={{ my: 6 }} />

<Box
  sx={{
    overflowX: "auto",
    width: "100%",
  }}
>
  <Box
    sx={{
      minWidth: "600px", // Ensures the table retains column structure on small screens
    }}
  >
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
      Braces vs. Aligners: Which is Right for You?
    </Typography>
    <Typography variant="h6" gutterBottom mb={4}>
      The choice between braces and aligners depends on your specific orthodontic treatment needs, lifestyle, and budget. Our dental team will help you make an informed decision:
    </Typography>

    <Grid container spacing={2}>
      {/* Header Row */}
      <Grid item xs={4}>
        <Paper elevation={3} sx={styles.headerCell}>
          <Typography variant="h6" fontWeight="bold" noWrap>
            Feature
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={3} sx={styles.headerCell}>
          <Typography variant="h6" fontWeight="bold" noWrap>
            Traditional Braces
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={3} sx={styles.headerCell}>
          <Typography variant="h6s" fontWeight="bold" noWrap>
          Clear Aligners (e.g., Invisalign)
          </Typography>
        </Paper>
      </Grid>

      {[
        {
          feature: "Visibility",
          braces: "More noticeable (Metal/Ceramic), Invisible (Lingual)",
          aligners: "Virtually invisible braces",
        },
        {
          feature: "Removability",
          braces: "Non-removable (fixed)",
          aligners: "Removable for eating, brushing, flossing",
        },
        {
          feature: "Oral Hygiene",
          braces: "Can be challenging to clean around",
          aligners: "Easier to maintain, as you remove them for cleaning",
        },
        {
          feature: "Food Restrictions",
          braces: "Avoid sticky, hard, or chewy foods",
          aligners: "No food restrictions (remove before eating)",
        },
        {
          feature: "Comfort",
          braces: "May cause initial irritation/soreness",
          aligners: "Generally smoother, but some tightness when switching trays",
        },
        {
          feature: "Treatment for",
          braces: "Effective for complex to simple cases",
          aligners: "Effective for mild to moderate cases, some complex cases",
        },
        {
          feature: "Discipline",
          braces: "Less patient discipline required",
          aligners: "High patient compliance needed (wear 20–22 hours/day)",
        },
        {
          feature: "Appointments",
          braces: "Regular adjustments (every 4–6 weeks)",
          aligners: "Fewer, less frequent check-ups (every 6–8 weeks)",
        },
      ].map((row, index) => (
        <React.Fragment key={index}>
          <Grid item xs={4}>
            <Paper elevation={1} sx={styles.cell}>
              <Typography variant="subtitle1" fontWeight="bold">
                {row.feature}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={1} sx={styles.cell}>
              <Typography variant="body1">{row.braces}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={1} sx={styles.cell}>
              <Typography variant="body1">{row.aligners}</Typography>
            </Paper>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  </Box>
</Box>




<Divider sx={{ my: 6 }} />

<Fade in={inView2} timeout={1000}>
  <Box>
    <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
      The Orthodontic Treatment Process
    </Typography>

    {/* Intro Text */}
    <Typography variant="h6" gutterBottom>
No matter if you choose <b>teeth braces</b> or <b>Aligners Treatment</b>, your journey to a straighter smile at Smile Solutions follows a clear path:    </Typography>

    <Grid container spacing={3} mt={1}>
      {[
<span><b>Initial Consultation:</b> A thorough examination, including digital scans and X-rays, to assess your oral health and determine the best course of action. This is where we discuss your goals and provide a detailed treatment plan and <b>orthodontic treatment cost in Borivali West.</b></span>,
<span><b>Records & Planning:</b> Detailed records (impressions, photos) are taken to create a precise, customized treatment plan.</span>,
<span><b>Appliance Placement/Delivery:</b> Your braces are carefully placed, or your first set of custom aligner trays is provided, along with instructions on wear and care. This marks the beginning of your <b>Clear Aligners Treatment or Braces treatment.</b></span>,
<span><b>Regular Adjustments/Tray Changes:</b> Periodic visits for adjustments (braces) or to pick up new sets of aligners (aligners) to ensure teeth are moving as planned.</span>,
<span><b>Retention:</b> Once your teeth are in their ideal position, retainers (fixed or removable) are crucial to maintain your new smile and prevent relapse.</span>,

       ].map((step, i) => (
        <Grid item xs={12} sm={12} key={i}>
          <Box display="flex" alignItems="flex-start" gap={1}>
            <CheckCircleIcon color="primary" sx={{ mt: "5px" }} />
            <Typography variant="h6">{step}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>

   
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
     Cost of Braces & Aligners in Borivali West

    </Typography>

    <Typography variant="h6" gutterBottom>
Understanding the <b>Cost of Braces and Aligners in Borivali West</b> is an important part of your decision-making. The <b>orthodontic treatment cost in Borivali West</b> varies based on the type of appliance, the complexity and duration of your case, and individual patient needs. At Smile Solutions, we believe in transparent pricing and will provide a detailed quote after your initial consultation.
<br></br>
    Here’s a general overview of <strong>braces and aligners cost in Borivali West</strong>:
    </Typography>

    <Grid container spacing={2} justifyContent="center" mt={2}>
      {[
        {
          label: "Metal Braces Cost in Borivali West",
          cost: "₹30,000 – ₹55,000+",
          note: <span>Most <b>affordable dental braces cost in Borivali West</b>, highly effective for all cases.</span>,
        },
        {
          label: "Ceramic Braces Cost in Borivali West",
          cost: "₹45,000 – ₹80,000+",
          note: <span>A more aesthetic option, less visible than <b>metal braces.</b></span>,
        },
        {
          label: "Lingual Braces Cost in Borivali West",
          cost: "₹80,000 – ₹1,50,000+",
          note: <span>Placed on the back of teeth for complete invisibility. <b>(Invisible braces cost this type)</b>.</span>,
        },
        {
          label: "Clear Aligners Cost in Borivali West",
          cost: "₹80,000 – ₹2,50,000+",
          note: <span><b>Invisible braces in Borivali West</b>, highly aesthetic and removable. <b>Invisalign / Invisible Braces Cost or Teeth Aligners Cost</b> varies by brand/case complexity. Also covers <b>Clear Aligners Cost.</b></span>,
        },
        {
          label: "Self-Ligating Braces Cost",
          cost: "₹60,000 – ₹1,20,000+",
          note: "May offer quicker treatment times and fewer visits.",
        },
        {
          label: "Retainers (Post-Treatment)",
          cost: "₹5,000 – ₹15,000+",
          note: "Essential for maintaining results, separate from initial treatment cost.",
        },
        {
          label: "Consultation & Diagnostics",
          cost: "Included in overall cost*",
          note: "Initial assessment, X-rays, and treatment planning. (*May be a separate fee initially)",
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
    <Typography variant="h6" gutterBottom mt={3}>
Please note that these are estimated ranges for <b>teeth braces cost</b> and Aligners cost. For a precise and personalized <b>orthodontic treatment cost in Borivali West</b>, we highly recommend scheduling a consultation. We also offer flexible payment options to make your smile journey more manageable.            </Typography>
  </Box>
</Fade>

<Divider sx={{ my: 6 }} />

<Fade in timeout={800}>
  <Box>
    <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
      Why Choose Smile Solutions for Your Orthodontic Treatment in Borivali West?
    </Typography>

    <Typography variant="h6" gutterBottom>
      If you're searching for the <strong>Best Braces Doctor in Borivali West</strong> or the <strong>Best Aligners Doctor in Borivali West</strong>, Smile Solutions is your trusted partner.
    </Typography>

    <Grid container spacing={3} mt={1}>
      {[
<span><b>Expert Team:</b> Our dentists, <b>Dr. Heeral Chikhal</b> and <b>Dr. Kalpesh Dey</b>, bring extensive experience in comprehensive dental care and smile aesthetics, ensuring a holistic approach to your <b>orthodontic treatment</b> needs.</span>,
<span><b>Personalized Care:</b> We understand that every smile is unique. We provide customized treatment plans tailored to your specific goals and oral health requirements for your <b>teeth straightening.</b></span>,
<span><b>Advanced Technology:</b> We utilize modern diagnostic tools and treatment techniques for precise, efficient, and comfortable <b>orthodontic treatment.</b></span>,
<span><b>Transparent Pricing:</b> You'll receive a clear breakdown of your Cost of Braces and Aligners in Borivali West with no hidden fees, whether it's for dental braces cost or Clear Aligners Cost.</span>,
<span><b>Patient Comfort:</b> Your comfort and satisfaction are our top priorities throughout your entire <b>Aligners Treatment or Braces Treatment</b> journey.</span>,

      ].map((reason, i) => (
        <Grid item xs={12} sm={6} key={i}>
          <Box display="flex" alignItems="flex-start" gap={1}>
            <CheckCircleIcon color="primary" sx={{ mt: "3px" }} />
            <Typography variant="h6">{reason}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>

    <Typography variant="h6" gutterBottom mt={3}>
journey.
Don't let misaligned teeth hold you back from showcasing your best smile. Contact Smile Solutions Dental Clinic today for a consultation about <b>braces and aligners in Borivali West</b>. Let us help you achieve the beautifully straight, healthy smile you deserve!
<br></br><br></br><b>Ready to start your smile transformation? Book your orthodontic consultation at Smile Solutions in Borivali West today!</b>
    </Typography>
  </Box>
</Fade>



            </Container>

            <Footer />
        </>
    );
}