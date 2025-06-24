
import { Box } from '@mui/material';
import DailyDentalCareBlog from '../../components/blogs/DailyDentalCareBlog';
import { MainLayout } from '../../components/layout';


export default function Home() {
    return (
        <>
    <Box sx={{backgroundColor:'#F8F8F8'}}>
        <DailyDentalCareBlog/>
        </Box>
        </>
    )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;