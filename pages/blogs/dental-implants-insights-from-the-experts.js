
import { Box } from '@mui/material';
import { MainLayout } from '../../components/layout';
import DentalImplants from '../../components/blogs/DentalImplants';
import Head from 'next/head';


export default function Home() {
    return (
        <>
        <Head>
                <title>Dental Implants Blog - Your Blog Title</title>
                <meta name="title" content="Are Dental Implants Worth It? Insights from Dr. Heeral Chikhal & Dr. Kalpesh Dey"/>
                <meta name="description" content="Get expert insights on dental implants from Dr. Heeral Chikhal & Dr. Kalpesh Dey, covering benefits, cost, types, and long-term value." />
                <meta name="keywords" content="Dental Implants, Dental Care, Oral Health, Dentistry Blog" />
                
                <link rel="canonical" href="https://www.smilesolutionsclinic.com/blogs/dental-implants-insights-from-the-experts"/>
                <script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.smilesolutionsclinic.com/blogs/dental-implants-insights-from-the-experts"
  },
  "headline": "Are Dental Implants Worth It? Insights from Dr. Heeral Chikhal & Dr. Kalpesh Dey",
  "description": "Get expert insights on dental implants from Dr. Heeral Chikhal & Dr. Kalpesh Dey, covering benefits, cost, types, and long-term value.",
  "image": "https://www.smilesolutionsclinic.com/images/blog/dentalimplant.jpg",  
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
       <DentalImplants/>
        </Box>
        </>
    )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;