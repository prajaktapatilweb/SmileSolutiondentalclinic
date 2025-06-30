
import { Box } from '@mui/material';
import { MainLayout } from '../../components/layout';
import DentalImplants from '../../components/blogs/DentalImplants';
import Head from 'next/head';
import GumDiease from '../../components/blogs/GumDiease';


export default function Home() {
    return (
        <>
        <Head>
              
                <meta name="title" content="The Silent Threat: Are You at Risk for Gum Disease? | Prevention Tips & Causes"/>
                <meta name="description" content="Discover if you're at risk for gum disease and learn practical ways to protect your smile. Find out the top causes, prevention tips, and cost of dental cleaning in India." />
                
            </Head>

    <Box sx={{backgroundColor:'#F8F8F8'}}>
     <GumDiease/>
        </Box>
        </>
    )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;