import { Suspense, lazy } from "react";
const Photogallery = lazy(() => import('../components/home/photo-gallery'))
import { MainLayout } from '../components/layout';
import Dentalservices from '../components/home/Dentalservices';
import Contact from '../components/home/Contact';
import Clinicinfo from "../components/home/Clinicinfo";
import DrHeeral from "../components/home/DrAkshay";
import Hero from "../components/home/Hero";
const Testimonial = lazy(() => import('../components/home/Testimonial'))

export default function Home() {
  return (
    <>
   <Hero/>
      {/* <Countdown /> */}
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

