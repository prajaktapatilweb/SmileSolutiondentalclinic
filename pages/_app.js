import Head from "next/head";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "../utils";
import { MUIProvider } from "../providers";
import "slick-carousel/slick/slick.css";
import "../assets/css/style.css";
import "../styles/react-slick.css";
import { useRouter } from "next/router";
import Script from 'next/script';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);
    const { asPath } = useRouter()
    // console.log('RRRRR', asPath.split('/')[1] === 'blogs')
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
               
                                <title>
                                Dentist in Borivali West - Smile Solutions Advanced Dental Care

                                </title>
                                <meta name="title" content="Dentist in Borivali West - Smile Solutions Advanced Dental Care"></meta>
                                 <meta name='description' content="Experience exceptional care at our Dental Clinic in Borivali West, offering a range of treatments from routine check-ups to advanced procedures in a comfortable setting. Your smile is our priority!"></meta> 
                                <link rel="canonical" href=" https://smilesolutionsclinic.com/"/> 


                                {/* OG Tags -  */}
                            

{/* <script type="application/ld+json"
                                 dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({

  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Abbad Dental Clinic & Implant Centre",
  "image": "https://www.abbaddentalclinic.com/_next/image?url=%2Fimages%2Fnashikclinic%2Fclinics2.webp&w=1920&q=75",
  "@id": "",
  "url": "https://www.abbaddentalclinic.com/",
  "telephone": "9713435111",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2-3, Jubiliant Heights, near Nirman House, Vidya Vikas Circle, towards College road",
    "addressLocality": "Nashik",
    "postalCode": "422005",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 20.0073972,
    "longitude": 73.7640498
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "21:00"
  },{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Sunday",
    "opens": "10:00",
    "closes": "13:00"
  }],
  "sameAs": [
    "https://www.facebook.com/abbaddentalclinicnashik/",
    "https://linktr.ee/AbbadDentalClinic",
    "https://www.instagram.com/abbaddentalclinic/",
    "https://www.youtube.com/@abbaddentalclinicnashik",
    "https://twitter.com/ACenter75541",
    "https://www.justdial.com/Nashik/Abbad-Dental-Clinic-Implant-Center-Vidya-Vikas-Circle-Towards-College-Rd-College-Road/0253PX253-X253-221218231157-S3D4_BZDET",
    "https://www.threads.net/@abbaddentalclinic",
    "https://in.linkedin.com/in/abbad-dental-clinic-and-implant-center-00a371324"
  ] 

}
),
}}
/>  */}


    
{/* Website Monitoring Code - */}

            </Head>
            <MUIProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
            </MUIProvider>
        </CacheProvider>
    );
}
