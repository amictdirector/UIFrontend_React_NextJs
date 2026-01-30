import Box from "@mui/material/Box"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FaceBookIcon from '@mui/icons-material/Facebook';
import InstaIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import haadiLogoLigh16 from '../Data/HaadiTech/dargBgLogo/16.svg';
import haadiLogoDark16 from '../Data/HaadiTech/lightBgLogo/16.svg'
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import textData from '../Data/textContent.json'
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { green } from "@mui/material/colors";
import { JSX, lazy } from "react";

type SocialLinkObject = {
    socialLinkName: string,
    enabled: boolean,
    link: string,
    icon: string
}
type SocialLinkData = {
    socialLinks: SocialLinkObject[];
}
const iconMap: Record<string, JSX.Element> = {
    WhatsAppIcon: <WhatsAppIcon sx={{ fontSize: { xs: '16px', md: '24px' }, color: '#25D366' }} />,
    InstaIcon: <InstaIcon sx={{ fontSize: { xs: '16px', md: '24px' }, color: '#E4405F' }} />,
    FacebookIcon: <FaceBookIcon sx={{ fontSize: { xs: '16px', md: '24px' }, color: '#1877F2' }} />,
    TwitterIcon: <TwitterIcon sx={{ fontSize: { xs: '16px', md: '24px' }, color: '#1DA1F2' }} />,
    LinkedInIcon: <LinkedInIcon sx={{ fontSize: { xs: '16px', md: '24px' }, color: '#0A66C2' }} />,
    YouTubeIcon: <YouTubeIcon sx={{ fontSize: { xs: '16px', md: '24px' }, color: '#CD201F' }} />,

};
const Footer = ({ socialLinks }: SocialLinkData) => {

    return (
        <>

            {/**FOOTER - START */}
            <Box position={'fixed'} bottom={'0px'} width={'100%'}>
                <Box sx={{ bottom: '0px', height: { xs: '25px', sm: '25px', md: '50px' }, width: '100%', background: 'linear-gradient(359deg, #000000, #292525)' }} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Box display='flex' alignItems='center' justifyContent='center' sx={{
                        background: '',
                        height: { xs: '25px', sm: '25px', md: '25px' },
                        borderRadius: '5px', zIndex: '1',
                        cursor: 'pointer'
                    }}>
                        {
                            Object.entries(socialLinks.filter((link) => link.enabled)).map(([key, value]) => (
                                <Box key={key} ml={"10px"} mr={"10px"}>
                                    {iconMap[value.icon]}
                                </Box>
                            ))
                        }



                    </Box>
                </Box>

                <Link href="https://www.HaadiTech.com" underline="none" color="none">
                    <Box sx={{ backdropFilter:'blur(8px)',bottom: '0px', height: { xs: '25px', sm: '25px', md: '50px' }, width: '100%', background: '', cursor: 'pointer' }} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                        <Box mr={'15px'} >
                            <Image src={haadiLogoDark16} alt="Haadi Logo" height={10} width={10} />
                        </Box>
                        <Box>
                            <Typography fontSize={{ xs: '.5rem', md: '1rem' }} color="#004a8f">www.haadiTech.com</Typography>
                        </Box>
                    </Box>
                </Link>

                <Box sx={{ backdropFilter:'blur(8px)',bottom: '0px', height: { xs: '25px', sm: '25px', md: '50px' }, width: '100%', background: '' }} display={{xs:'flex',md:'none'}} alignItems={'center'} justifyContent={'right'}>

                </Box>
            </Box>
            {/**FOOTER - END */}

            {/*PHONE AND EMAIL, PULL DOWN RESPONSIVE, Show in xs, sm*/}
            {/* <Box bgcolor={'black'} zIndex={99999999999} width={'100%'} flexDirection={'column'} padding={2} display={{ xs: 'block', lg: 'none' }}>
                HERE
                <Box display={'flex'} flexDirection={'row'}>
                    <PhonelinkRingIcon />
                    <Link href="tel:+918288018801" underline="none" color="none">
                        <Typography sx={{ color: { xs: 'white' } }} fontSize={{ xs: '.75rem', md: '1rem', lg: '1.15rem' }} fontWeight={''} textAlign={'center'}>{textData.contactNumber02}</Typography>
                    </Link>
                </Box>
                <Box display={'flex'} flexDirection={'row'}>
                    <PhonelinkRingIcon />
                    <Link href="tel:+918288018803" underline="none" color="none">
                        <Typography sx={{ color: { xs: 'white' } }} fontSize={{ xs: '.75rem', md: '1rem', lg: '1.15rem' }} fontWeight={''} textAlign={'center'}>{textData.contactNumber04}</Typography>
                    </Link>
                </Box>
                <Box display={'flex'} flexDirection={'row'}>
                    <EmailIcon />
                    <Link href="mailto:amict.director@gmail.com" underline="none" color="none">
                        <Typography sx={{ color: { xs: 'white' } }} fontSize={{ xs: '.75rem', md: '1rem', lg: '1.15rem' }} fontWeight={''} textAlign={'center'}>{textData.contactEmail}</Typography>
                    </Link>
                </Box>

                <Box justifyContent={'center'} height={'35px'} width={'30px'} left={'10px'} bgcolor={'black'} position={'absolute'} display={{ xs: 'block', lg: 'none' }} sx={{ borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px' }}>
                    <ExpandCircleDownIcon />
                </Box>
            </Box> */}
            {/*PHONE AND EMAIL, PULL DOWN RESPONSIVE- END*/}

        </>
    )
}

export default Footer;