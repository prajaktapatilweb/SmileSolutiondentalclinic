import { Box, Card, Container, Grid, Link } from '@mui/material'
import React from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Blog() {


    var Blogdata1 = [
        {
            title: "Smile Brighter: Top 10 Tips for Daily Dental Care",
            para: <span>
               Maintaining a radiant smile is about more than just aesthetics—it’s a reflection of your overall health. A consistent dental care routine not only prevents cavities and gum disease but also supports your heart health, digestion, and confidence.
              <br></br> Whether you're brushing at home or consulting with professionals, here are 10 essential daily dental care tips, plus bonus insights to help you and your family achieve long-term oral wellness.            </span>,
            link: '/blogs/top-10-dental-care-tips'
        }
    ]
    return (
        <div>
            <Box sx={{ py: { xs: 10, md: 10 }, backgroundColor: "#ffffff" }}>
                <Container>
                    <Grid container spacing={3} alignItems="center" justifyContent="center">
                        <Grid item xs={12} md={4}>
                            {Blogdata1.map((item, i) =>
                                <Card sx={{ background: "#fbfcfe", border: "1px solid #e8edf2", p: 3 }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image="/images/blog/img1.jpg"
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#20509e' }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.para}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link href={item.link} sx={{ textDecoration: 'none', color: '#20509e', fontWeight: 'bold' }}> Read More</Link>
                                    </CardActions>
                                </Card>
                            )}
                        </Grid>
                    </Grid>


                </Container>
            </Box>


        </div>
    )
}
