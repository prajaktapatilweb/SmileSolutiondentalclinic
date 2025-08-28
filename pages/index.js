import { Suspense, lazy } from "react";
const Photogallery = lazy(() => import('../components/home/photo-gallery'))
import { MainLayout } from '../components/layout';
import Dentalservices from '../components/home/Dentalservices';
import Contact from '../components/home/Contact';
import Clinicinfo from "../components/home/Clinicinfo";
import DrHeeral from "../components/home/DrAkshay";
import Herohome from "../components/home/Herohome";
import Head from "next/head";
import Blog from "../components/Blog";
const Testimonial = lazy(() => import('../components/home/Testimonial'))

export default function Home() {
  return (
    <>
    <Head>
      <title>Dentist in Borivali West | Dental Clinic in Borivali West</title>
    <meta name="title" content="Dentist in Borivali West - Smile Solutions Advanced Dental Care"></meta>
    <meta name='description' content="Looking for an experienced dentist in Borivali West? Dr. Heeral Chikhal (MDS) & Dr. Kalpesh Dey (MDS) bring 13+ years of expertise in implants, RCT & smile makeovers.
"></meta>
    <link rel="canonical" href=" https://www.smilesolutionsclinic.com/" />
     {/* Clinic */}


<script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Smile Solutions Advanced Dental Care and Implant Center",
  "image": "https://www.smilesolutionsclinic.com/_next/image?url=%2Fimages%2Fclinic%2Fclinics4.jpg&w=640&q=75",
  "@id": "",
  "url": "https://www.smilesolutionsclinic.com/",
  "telephone": "9820097046",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8th floor, Friends business bay, 807, L.T. Rd, opp. Veer Savarkar garden, above Malabar jewellers, Borivali West",
    "addressLocality": "Mumbai",
    "postalCode": "400092",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.2289358,
    "longitude": 72.8469224
  },
  "openingHoursSpecification": [
    {
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
      "closes": "20:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "00:00",
      "closes": "00:00",
      "closed": true
    }
  ],
  "sameAs": [
    "https://www.facebook.com/smilesolutionsdental/",
    "https://x.com/SmileSolutionsB",
    "https://www.instagram.com/smilesolution_15",
    "https://www.youtube.com/@SmileSolutionsBorivaliWest",
    "https://www.linkedin.com/company/smile-solutions/"
  ] 
}),
}}
/>
 {/* Dentist Dr. Heeral Chikhal */}


<script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.stringify({
  "@context": "https://schema.org",	
  "@type": "Dentist",
  "name": "Dr. Heeral Chikhal",
  "image": "https://www.smilesolutionsclinic.com/_next/image?url=%2Fimages%2Fdr%2F3.jpg&w=1920&q=75",
  "url": "https://www.smilesolutionsclinic.com/",
  "telephone": "+919820097046",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8th floor, Friends business bay, 807, L.T. Rd, opp. Veer Savarkar garden, above Malabar jewellers, Borivali West",
    "addressLocality": "Mumbai",
    "postalCode": "400092",
    "addressCountry": "IN"
  },
  "founder": {
    "@type": "Dentist",
    "name": "Dr. Heeral Chikhal"
  },
  "sameAs": [
    "https://www.clinicspots.com/doctor/dr-heeral-chikhal",
    "https://www.drlogy.com/mumbai/doctor/dr-heeral-chikhal",
    "https://www.practo.com/mumbai/doctor/heeral-chikhal-dentist"
  ]
}),
}}
/>


{/* // Schema : Dentist */}

<script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.stringify({
  "@context": "https://schema.org",	
  "@type": "Dentist",
  "name": "Dr. Kalpesh Dey",
  "image": "https://www.smilesolutionsclinic.com/_next/image?url=%2Fimages%2Fdr%2F2.jpg&w=1920&q=75",
  "url": "https://www.smilesolutionsclinic.com/",
  "telephone": "+919820097046",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8th floor, Friends business bay, 807, L.T. Rd, opp. Veer Savarkar garden, above Malabar jewellers, Borivali West",
    "addressLocality": "Mumbai",
    "postalCode": "400092",
    "addressCountry": "IN"
  },
  "founder": {
    "@type": "Dentist",
    "name": "Dr. Kalpesh Dey"
  },
  "sameAs": [
    "https://www.clinicspots.com/doctor/dr-kalpesh-dey-1",
    "https://www.drlogy.com/mumbai/doctor/dr-kalpesh-dey",
    "https://www.practo.com/mumbai/doctor/kalpesh-dey-1-dentist"
  ]
}),
}}
/>



    </Head>
   <Herohome/>
      <Clinicinfo></Clinicinfo>
      <Dentalservices/>
      <DrHeeral/>
      <Suspense fallback=
        {<div>Component are loading please wait...</div>}>
        <Photogallery />
        {/* <Aw  ards/> */}
        <Testimonial></Testimonial>
      </Suspense>
    <Blog/>
      <Contact></Contact> 
    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

