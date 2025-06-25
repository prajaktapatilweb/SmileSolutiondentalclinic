
import { Box } from '@mui/material';
import DailyDentalCareBlog from '../../components/blogs/DailyDentalCareBlog';
import { MainLayout } from '../../components/layout';
import DentalImplants from '../../components/blogs/DentalImplants';


export default function Home() {
    return (
        <>
    <Box sx={{backgroundColor:'#F8F8F8'}}>
       <DentalImplants/>
        </Box>
        </>
    )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;