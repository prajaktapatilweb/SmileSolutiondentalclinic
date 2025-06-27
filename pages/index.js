import { Suspense, lazy } from "react";
const Photogallery = lazy(() => import('../components/home/photo-gallery'))
import { MainLayout } from '../components/layout';
import Dentalservices from '../components/home/Dentalservices';
import Contact from '../components/home/Contact';
import Clinicinfo from "../components/home/Clinicinfo";
import DrHeeral from "../components/home/DrAkshay";
import Herohome from "../components/home/Herohome";
import Head from "next/head";
const Testimonial = lazy(() => import('../components/home/Testimonial'))

export default function Home() {
  return (
    <>
    <Head>
    <meta name="title" content="Dentist in Borivali West - Smile Solutions Advanced Dental Care"></meta>
    <meta name='description' content="Experience exceptional care at our Dental Clinic in Borivali West, offering a range of treatments from routine check-ups to advanced procedures in a comfortable setting. Your smile is our priority!"></meta>
    <link rel="canonical" href=" https://www.smilesolutionsclinic.com/" />
    
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
    
      <Contact></Contact> 
    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

