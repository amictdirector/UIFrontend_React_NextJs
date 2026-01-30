import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import textData from '../Data/textContent.json'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import EmailIcon from '@mui/icons-material/Email';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useEffect, useState } from "react";

const Header = () => {
    const [downloadButtonColor, setDownloadButtonColor] = useState("success")
    useEffect(() => {
        const downloadButtonColorChange = setInterval(() => {
            setDownloadButtonColor(() => downloadButtonColor === 'success' ? "error" : "success")
        }, 500);
        return (() => clearInterval(downloadButtonColorChange))
    }, [downloadButtonColor]);

    const handleDownloadAdmissionFromHeader = (downloadLink: string) => {
        const link = document.createElement('a');
        link.href = downloadLink;
        link.download = downloadLink.replace("/files/", "");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>

            {/*PHONE AND EMAIL, RESPONSIVE*/}

            <Grid container height={"50px"} justifyContent={'center'} color={'white'} sx={{ display: { xs: 'none', lg: 'flex' }, background: 'linear-gradient(180deg, #42989e, #264d90)' }}>
                <Box width={'70%'} display={'flex'} flexDirection={'row'} alignItems={'center'} bgcolor={''} justifyContent={'space-around'}>
                    <Box display={'flex'} flexDirection={'row'}>
                        <PhonelinkRingIcon />
                        <Link href="tel:+918288018801" underline="none" color="none">
                            <Typography sx={{ color: { xs: 'black', lg: 'white' } }} fontSize={{ xs: '.75rem', md: '1rem', lg: '1.15rem' }} fontWeight={''} textAlign={'center'}>{textData.contactNumber02}</Typography>
                        </Link>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'}>
                        <PhonelinkRingIcon />
                        <Link href="tel:+918288018803" underline="none" color="none">
                            <Typography sx={{ color: { xs: 'black', lg: 'white' } }} fontSize={{ xs: '.75rem', md: '1rem', lg: '1.15rem' }} fontWeight={''} textAlign={'center'}>{textData.contactNumber04}</Typography>
                        </Link>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'}>
                        <EmailIcon />
                        <Link href="mailto:amict.director@gmail.com" underline="none" color="none">
                            <Typography sx={{ color: { xs: 'black', lg: 'white' } }} fontSize={{ xs: '.75rem', md: '1rem', lg: '1.15rem' }} fontWeight={''} textAlign={'center'}>{textData.contactEmail}</Typography>
                        </Link>
                    </Box>
                    <Box display={'flex'} justifyContent={{ xs: 'center', lg: 'center' }}>
                        <Button onClick={() => handleDownloadAdmissionFromHeader(textData.linkDownloadAdmissionFormFromHeader)} sx={{
                            fontSize: {
                                xs: '0.65rem',
                                sm: '0.75rem',
                                md: '0.875rem',
                                lg: '1rem'
                            },
                            height: '100%',
                            whiteSpace: 'nowrap',
                            paddingX: 2,
                            textTransform: 'none'
                        }} color={downloadButtonColor === "success" ? "error" : "success"} variant="contained" endIcon={<CloudDownloadIcon />}>{textData.labelDownloadAdmissionForm}</Button>

                    </Box>
                </Box>
            </Grid>
            {/*PHONE AND EMAIL, RESPONSIVE  - END*/}

            {/*HEADER*/}
            <Grid container sx={{ backgroundImage: 'linear-gradient(104deg, #42989e, #264d90)' }} marginBottom={'1px'} justifyContent={'center'}>
                <Grid display={'flex'} size={{ xs: 12, lg: 10 }} bgcolor={''} justifyContent={'center'} alignItems={'center'} flexDirection={{ xs: 'column', lg: 'row' }}>
                    <Grid size={{ xs: 12, lg: 12 }}
                        sx={{
                            flexDirection: { xs: 'column', lg: 'row' },
                            borderRadius: 400,
                            height: { xs: 50, lg: 100 },
                            width: { xs: 50, lg: 100 },
                            background: '',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundImage: 'url(/anm/Logo.jpg)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            marginRight: { md: '20px' },
                        }}
                    />
                    <Grid
                        sx={{
                            height: { xs: '100%', lg: '100%' },
                            // width: { xs: '50%', lg: '100%' },
                            background: '',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: { xs: 'column', lg: 'row' }
                        }}
                    >
                        <Grid marginRight={{ md: '20px' }} justifyItems={'center'} alignContent={'center'}>
                            <Typography color={"white"} fontSize={{ xs: '3rem', sm: '4rem', md: '6rem', lg: '5rem' }} fontWeight={'bold'}>{textData.collageName}</Typography>
                        </Grid>
                        <Grid display={'flex'} flexDirection={'column'} marginRight={'0px'} bgcolor={{ xs: '', sm: '', md: '', lg: '' }} alignItems={'center'} justifyContent={'center'}>
                            <Typography color={"white"} textAlign={'justify'} fontSize={{ xs: '1rem', sm: '1rem', md: '2.5rem', lg: '2rem' }} fontWeight={'bold'}>{textData.collageDescCAPITAL}</Typography>
                            <Typography color={"white"} textAlign={'justify'} fontSize={{ xs: '.85rem', sm: '.95rem', md: '1.5rem', lg: '2rem' }} fontWeight={''}>{textData.collageLocationCity}</Typography>
                            <Typography color={"white"} textAlign={'center'} fontSize={{ xs: '.65rem', sm: '.75rem', md: '1rem' }} fontWeight={''}>{textData.collageApprovedBy}</Typography>
                            {/* <Link href="https://www.google.com/maps?q=A+%26+M+Group+of+Institutes" underline="none" color="none">
                                <LocationPinIcon sx={{ color: '#00d9ff', fontSize: { xs: '.75rem', sm: '.90rem', md: '2rem' } }} />
                                <Typography fontSize={{ xs: '.50rem', sm: '1rem', md: '1.35rem' }} fontWeight={'bold'}>{textData.collageLocation}</Typography>
                            </Link> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid display={{xs:'flex',md:'none'}} flexDirection={{ xs: 'row' }} size={{ xs: 12, lg: 2 }} bgcolor={{ xs: 'white', lg: 'transparent' }} alignItems={'center'} justifyContent={'space-around'} >
                            <Grid size={{ xs: 12 }} bgcolor={''} justifyItems={'center'}>
                                <Link href="tel:+918288018801" underline="none" color="none">
                                    <Typography sx={{ color: { xs: 'black', lg: 'white' } }} fontSize={{ xs: '.75rem', md: '1rem', lg: '1.15rem' }} fontWeight={''} textAlign={'center'}>{textData.contactNumber02}</Typography>
                                </Link>
                            </Grid>
                            <Grid size={{ xs: 12 }} bgcolor={''} justifyItems={'center'}>
                                <Link href="tel:+918288018803" underline="none" color="none">
                                    <Typography sx={{ color: { xs: 'black', lg: 'white' } }} fontSize={{ xs: '.75rem', md: '1rem', lg: '1.15rem' }} fontWeight={''} textAlign={'center'}>{textData.contactNumber04}</Typography>
                                </Link>
                            </Grid>
                            <Grid size={{ xs: 12 }} bgcolor={''} justifyItems={{ xs: 'center', lg: 'right' }}>
                                <Link href="mailto:amict.director@gmail.com" underline="none" color="none">
                                    <Typography sx={{ color: { xs: 'black', lg: 'white' } }} fontSize={{ xs: '.75rem', md: '1rem', lg: '1.15rem' }} fontWeight={''} textAlign={'center'}>{textData.contactEmail}</Typography>
                                </Link>
                            </Grid>
                            

                        </Grid>
                        <Grid size={{ xs: 12 }} bgcolor={''} display={{ xs: 'flex',md:'none' }} justifyContent={'center'} >

                                <Box display={'flex'} justifyContent={{ xs: 'center', lg: 'center' }}>
                                    <Button onClick={() => handleDownloadAdmissionFromHeader(textData.linkDownloadAdmissionFormFromHeader)} sx={{
                                        fontSize: {
                                            xs: '0.65rem',
                                            sm: '0.75rem',
                                            md: '0.875rem',
                                            lg: '1rem'
                                        },
                                        height: '20px',
                                        whiteSpace: 'nowrap',
                                        paddingX: 2,
                                        textTransform: 'none'
                                    }} color={downloadButtonColor === "success" ? "error" : "success"} variant="contained" endIcon={<CloudDownloadIcon/>}>{textData.labelDownloadAdmissionForm}</Button>

                                </Box>
                            </Grid>
            {/*HEADER - END*/}
            {/* <Grid size={{ xs: 12, lg: 1 }} bgcolor={''} alignContent={'center'} justifyItems={'center'}>
                    <Box
                        sx={{
                            borderRadius: 400,
                            height: { xs: 50, lg: 100 },
                            width: { xs: 50, lg: 100 },
                            background: '',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundImage: 'url(/anm/Logo.jpg)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, lg: 11 }} bgcolor={''}>
                    <Grid container alignItems={'center'} bgcolor={''}>
                        <Grid size={{ xs: 12, lg: 2 }} bgcolor={'red'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                            <Typography fontSize={{ xs: '2rem', sm: '3rem', md: '5rem', lg: '5rem' }} fontWeight={'bold'}>{textData.collageName}</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, lg: 8 }} bgcolor={''} alignItems={'center'}>
                            <Typography fontSize={{ xs: '.75rem', sm: '2rem', md: '3rem', lg: '3rem' }} fontWeight={'bold'} textAlign={'center'}> {textData.collageDescCAPITAL}</Typography>

                            <Typography fontSize={{ xs: '.75rem', sm: '2rem', md: '3.25rem', lg: '3rem' }} fontWeight={'bold'} textAlign={'center'} bgcolor={''}>{textData.collageLocationCity}</Typography>

                        </Grid>
                        <Grid display={'flex'} flexDirection={{ xs: 'row', lg: 'column' }} size={{ xs: 12, lg: 2 }} bgcolor={{ xs: 'white', lg: 'transparent' }} alignItems={'center'} >
                            <Grid size={{ xs: 12 }} bgcolor={''} justifyItems={'center'}>
                                <Link href="tel:+918288018801" underline="none" color="none">
                                    <Typography sx={{ color: { xs: 'black', lg: 'white' } }} fontSize={{ xs: '.75rem', md: '1rem', lg: '1.15rem' }} fontWeight={''} textAlign={'center'}>{textData.contactNumber02}</Typography>
                                </Link>
                            </Grid>
                            <Grid size={{ xs: 12 }} bgcolor={''} justifyItems={'center'}>
                                <Link href="tel:+918288018803" underline="none" color="none">
                                    <Typography sx={{ color: { xs: 'black', lg: 'white' } }} fontSize={{ xs: '.75rem', md: '1rem', lg: '1.15rem' }} fontWeight={''} textAlign={'center'}>{textData.contactNumber04}</Typography>
                                </Link>
                            </Grid>
                            <Grid size={{ xs: 12 }} bgcolor={''} justifyItems={{ xs: 'center', lg: 'right' }}>
                                <Link href="mailto:amict.director@gmail.com" underline="none" color="none">
                                    <Typography sx={{ color: { xs: 'black', lg: 'white' } }} fontSize={{ xs: '.75rem', md: '1rem', lg: '1.15rem' }} fontWeight={''} textAlign={'center'}>{textData.contactEmail}</Typography>
                                </Link>
                            </Grid>
                            <Grid size={{ xs: 12 }} bgcolor={''} display={{ xs: 'none',md:'block' }} >

                                <Box display={'flex'} justifyContent={{ xs: 'center', lg: 'center' }}>
                                    <Button onClick={() => handleDownloadAdmissionFromHeader(textData.linkDownloadAdmissionFormFromHeader)} sx={{
                                        fontSize: {
                                            xs: '0.65rem',
                                            sm: '0.75rem',
                                            md: '0.875rem',
                                            lg: '1rem'
                                        },
                                        height: '20px',
                                        whiteSpace: 'nowrap',
                                        paddingX: 2,
                                        textTransform: 'none'
                                    }} color="error" variant="contained" endIcon={<CloudDownloadIcon/>}>{textData.labelDownloadAdmissionForm}</Button>

                                </Box>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={12} bgcolor={''}>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Typography fontSize={{ xs: '.75rem', sm: '1rem', md: '1.25rem' }} textAlign={'center'}>
                            {textData.collageApprovedBy}
                            <br />
                            <Link href="https://www.google.com/maps?q=A+%26+M+Group+of+Institutes" underline="none" color="none">
                                <LocationPinIcon sx={{ color: '#00d9ff', fontSize: { xs: '.75rem', sm: '.90rem', md: '2rem' } }} />
                                {textData.collageLocation}
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid display={{md:'none'}}>
                <Box display={'flex'} justifyContent={{ xs: 'center', lg: 'center' }}>
                    <Button onClick={() => handleDownloadAdmissionFromHeader(textData.linkDownloadAdmissionFormFromHeader)} sx={{
                        fontSize: {
                            xs: '0.65rem',
                            sm: '0.75rem',
                            md: '0.875rem',
                            lg: '1rem'
                        },
                        height: '20px',
                        whiteSpace: 'nowrap',
                        paddingX: 2,
                        textTransform: 'none'
                    }} color="error" variant="contained" endIcon={<CloudDownloadIcon/>}>{textData.labelDownloadAdmissionForm}</Button>

                </Box> 
            </Grid>*/}
        </>
    )
}

export default Header;