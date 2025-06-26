
import { Box } from '@mui/material';
import DailyDentalCareBlog from '../../components/blogs/DailyDentalCareBlog';
import { MainLayout } from '../../components/layout';
import Head from 'next/head';


export default function Home() {
    return (
        <>
<Head>
                <title>Smile Brighter: Top 10 Tips for Daily Dental Care </title>
                <meta name="title" content="Smile Brighter: Top 10 Tips for Daily Dental Care"/>
                <meta name="description" content=" Discover 10 essential dental care tips for a healthier smile. Learn expert-backed routines, diet do's and don’ts, and oral care advice for all ages." />
                <meta name="keywords" content="Dental Implants, Dental Care, Oral Health, Dentistry Blog" />
                
                <link rel="canonical" href="https://www.smilesolutionsclinic.com/blogs/top-10-dental-care-tips"/>
                <script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.stringify({
 "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.smilesolutionsclinic.com/blogs/top-10-dental-care-tips"
  },
  "headline": "Smile Brighter: Top 10 Tips for Daily Dental Care",
  "description": "Discover 10 essential dental care tips for a healthier smile. Learn expert-backed routines, diet do's and don’ts, and oral care advice for all ages.",
  "image": "https://www.smilesolutionsclinic.com/images/blog/dentalcare.jpg",  
  "author": {
    "@type": "Organization",
    "name": "Admin",
    "url": "https://www.smilesolutionsclinic.com/"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "Smile Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.smilesolutionsclinic.com/_next/image?url=%2Fimages%2Flogosmile1.png&w=256&q=75"
    }
  },
  "datePublished": "2025-06-26"


}),
}}
/>

                
             
            </Head>
    <Box sx={{backgroundColor:'#F8F8F8'}}>
        <DailyDentalCareBlog/>
        </Box>
        </>
    )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;