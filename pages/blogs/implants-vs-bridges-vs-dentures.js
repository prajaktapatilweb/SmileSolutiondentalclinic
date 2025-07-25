
import { Box } from '@mui/material';
import { MainLayout } from '../../components/layout';
import Head from 'next/head';
import Implantvsbridge from '../../components/blogs/Implantvsbridge';


export default function Home() {
    return (
        <>
        <Head>
              <title>Dental Implants vs. Bridges vs. Dentures: What’s Right for You? </title>
                <meta name="title" content="Dental Implants vs. Bridges vs. Dentures: What’s Right for You? "/>
                <meta name="description" content="Compare dental implants, bridges, and dentures to restore your smile. Learn about cost, longevity, pros and cons, and expert tips to help choose the right option for you." />
                
            </Head>

    <Box sx={{backgroundColor:'#F8F8F8'}}>
    <Implantvsbridge/>
        </Box>
        </>
    )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;