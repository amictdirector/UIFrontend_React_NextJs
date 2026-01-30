import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ContactUs = () => {
    return (
        <>
            <Grid sx={{background: 'linear-gradient(180deg, #42989e, #264d90)' }} alignContent={'center'} justifyItems={'center'} display={'flex'} flexDirection={'column'} pb={10} >
                <Box bgcolor={''} justifyContent={'center'} display={'flex'}>
                    <Typography textAlign={'justify'} fontSize={{xs:'40px',md:'80px'}} fontWeight={'bold'}> Contact Us </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} alignContent='center' justifyContent={'center'}>
                    <Box bgcolor={''} justifyContent={'center'} display={'flex'}>

                        <Typography textAlign={'center'} fontSize={{xs:'20px',md:'40px'}}> Near A&M Gems Cambridge International School </Typography>
                    </Box>
                    <Box bgcolor={''} justifyContent={'center'} display={'flex'}>

                        <Typography textAlign={'center'} fontSize={{xs:'20px',md:'40px'}}> Opp Canada Palace, Jal-Dal Bypass. </Typography>
                    </Box>
                    <Box bgcolor={''} justifyContent={'center'} display={'flex'}>

                        <Typography textAlign={'center'} fontSize={{xs:'20px',md:'40px'}}> Pathankot. </Typography>
                    </Box>
                </Box>
                <Box bgcolor={''} display={'flex'} justifyContent={'center'} padding={{xs:'10px'}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6747.3441405791555!2d75.68311930328296!3d32.266904341984485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c7f8dc4156ef7%3A0x48d588d7754e23ad!2sA%20%26%20M%20Group%20of%20Institutes!5e0!3m2!1sen!2sin!4v1756923538495!5m2!1sen!2sin" width="1000px" height="500px" loading="lazy" ></iframe>
                </Box>
            </Grid>
        </>
    )
}

export default ContactUs;