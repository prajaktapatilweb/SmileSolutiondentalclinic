import { Box, Card, Container, Grid, Link } from '@mui/material'
import React from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Blog() {


    var Blogdata1 = [
        {
            image:'/images/blog/dentalcare.jpg',
            title: "Smile Brighter: Top 10 Tips for Daily Dental Care",
            para: <span>
               Maintaining a radiant smile is about more than just aesthetics—it’s a reflection of your overall health. A consistent dental care routine not only prevents cavities and gum disease but also supports your heart health, digestion, and confidence.
              <br></br> Whether you're brushing at home or consulting with professionals, here are 10 essential daily dental care tips, plus bonus insights to help you and your family achieve long-term oral wellness.            </span>,
            link: '/blogs/top-10-dental-care-tips'
        },
        {
            image:'/images/blog/dentalimplant.jpg',
            title: "Are Dental Implants Worth It? Insights from Dr. Heeral Chikhal & Dr. Kalpesh Dey",
            para: <span>
              Missing teeth can affect more than just your smile—they can impact your confidence, chewing ability, and even your bone health. Dental implants have emerged as the gold stand <br></br>
              We asked two leading dental experts from Mumbai—Dr. Heeral Chikhal (MDS – Prosthodontics & Implantology) and Dr. Kalpesh Dey (MDS – Endodontics & Cosmetic Dentistry)—to share ...
            </span>,
            link: '/blogs/dental-implants-insights-from-the-experts'
        },
        {
            image:'/images/blog/gumdisease.jpg',
            title: "The Silent Threat: Are You at Risk for Gum Disease? (And What You Can Do About It!)",
            para: <span>
           Imagine a silent enemy, one that attacks your health without much warning, slowly but surely causing damage. That's often how gum disease, also known as periodontal disease, works. It's a common health issue that many people don't even realize they have until it's quite advanced. But the good news is, by understanding your risk and taking simple steps, you can protect your smile and your overall health...  </span>,
            link: '/blogs/gum-disease-risk-causes-prevention-tips'
        },

    ]
    return (
        <div>
           <Container sx={{py:7}}>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                    {Blogdata1.map((item, i) => (
    <Grid item xs={12} sm={6} md={4} key={i}>
        <Card
            sx={{
                background: "#fbfcfe",
                border: "1px solid #e8edf2",
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }
            }}
        >
            <CardMedia
                sx={{
                    height: 300,
                    borderRadius: 2,
                    transition: 'transform 0.3s',
                    border:'1px solid lightgrey',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    }
                }}
                image={item.image} // ✅ Dynamic Image
                title={item.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
            <Link href={item.link} sx={{ textDecoration: 'none' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#20509e' }}>
                    {item.title}
                </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary">
                    {item.para}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={item.link} sx={{ textDecoration: 'none', color: '#20509e', fontWeight: 'bold' }}>
                    Read More
                </Link>
            </CardActions>
        </Card>
    </Grid>
))}


                    </Grid>
                    </Container>

        </div>
    )
}
