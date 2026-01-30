import { Box, Grid, Typography } from "@mui/material";
import textData from '../../Data/textContent.json'
const Chairman = () =>{

    return (
        <>
            <Grid container key={'key_grid_container'} marginBottom={'10px'} bgcolor={''} height={'100%'} size={12} justifyContent={'space-between'} sx={{ padding: { xs: '5px', sm: '5px', md: '10px' } }} >
                <Grid key={'key_grid_about_text'} marginTop={{ md: '10px', lg: '50px' }} fontSize={{
                    xs: '12px',
                    sm: '14px',
                    md: '16px',
                }} sx={{ padding: { xs: '5px', sm: '5px', md: '50px', lg: '50px' } }}
                    size={{ xs: 12, sm: 12, md: 6 }}
                    bgcolor={''}
                    color={'black'}>
                    <Typography sx={{
                        background: 'linear-gradient(228deg, #0087ff, #508db2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent', fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold'
                    }}>
                        {textData.messageFromChairman}<br />
                    </Typography>

                    <br />
                    <Typography sx={{ fontSize: { xs: '.75rem', md: '1.5rem' }, fontWeight: 'bold' }}>
                        Dear Students and Parents,
                    </Typography><br/>
                    <Typography textAlign={'justify'}>{textData.messageChairManText}</Typography >
                    <br/>
                     <Typography sx={{ fontSize: { xs: '.75rem', md: '1.5rem' }, fontWeight: 'bold' }}>
                       Wishing you all great success and fulfillment in your academic and personal pursuits.
                    </Typography>
                </Grid>
                <Grid key={'key_grid_about_chairman'}
                    size={{ xs: 12, sm: 12, md: 6 }}
                    bgcolor={''}
                    order={{ xs: 2, md: 1 }}
                    sx={{
                        background: '',
                        padding: { xs: '5px', sm: '5px', md: '10px', lg: '10px' }

                    }}>
                    <Box key={'key_box_panel'}
                        fontSize={{
                            xs: '12px',
                            sm: '14px',
                            md: '16px',
                        }}
                        sx={{
                            position: 'relative',
                            marginTop: { xs: '70px', md: '50px' },
                            background: 'linear-gradient(331deg, #6fac8a, #2564c2)',
                            borderRadius: '5px',
                            height: { xs: '285px', sm: '285px', md: '100%' },
                            width: '100%',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',

                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <Box key={'key_box_dir_pic'}
                            sx={{
                                boxShadow:
                                    '0px 20px 20px 7px rgba(0, 0, 0, 0.2),0px 20px 20px 7px rgba(0, 0, 0, 0.2),0px 20px 20px 7px rgba(0, 0, 0, 0.2)',
                                position: 'absolute',
                                top: { xs: '-45px', sm: '-45px', md: '-100px' },
                                background: 'black',
                                width: { xs: '100px', md: '150px', lg: '200px' },
                                height: { xs: '100px', md: '150px', lg: '200px' },
                                borderRadius: '200px',
                                backgroundImage: `url(${textData.messageChairManPicPath})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',

                            }}
                        />
                        <Box color={'white'} fontSize={{
                            xs: '12px',
                            sm: '14px',
                            md: '16px',
                        }} fontWeight={{ xs: 'bold' }} position={'relative'} top={50}>
                            {textData.messageChairManPosition}
                        </Box>
                        <Box color={'white'} fontSize={{
                            xs: '20px',
                            sm: '22px',
                            md: '24px',
                        }} fontWeight={{ xs: '' }} position={'relative'} top={60}>
                            {textData.messageChairManName}
                        </Box>
                        <Box color={'white'} fontSize={{
                            xs: '12px',
                            sm: '14px',
                            md: '16px',
                        }} fontWeight={{ xs: '' }} position={'relative'} top={70} padding={'20px'}>
                           <Typography fontStyle={'italic'}>
                            {textData.messageChairManQuotes}
                            </Typography> 

                        </Box>

                    </Box>


                </Grid>

            </Grid>
        </>
    )

}
export default Chairman;