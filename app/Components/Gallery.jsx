import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Slider from './Slider'
import GalleryData from '../Data/GalleryData.json'

const gallerySections = [
    "DOUBLE_CELEBRATION",
    "HAWAAN",
    "NCC",
    "ORIENTATION",
    "PLACEMENT",
    "SEMINAR",
    "TEEJ"
];

const intervals = {
    DOUBLE_CELEBRATION: 2000,
    HAWAAN: 3000,
    NCC: 2000,
    ORIENTATION: 3000,
    PLACEMENT: 2500,
    SEMINAR: 3500,
    TEEJ: 2000
};

const Gallery = () => {


    return (
        <>
            <>
                {gallerySections.map((sectionKey, index) => (
                    <>
                        <Box key={sectionKey} width="100%" mb={{xs:1,sm:1.2,md:1.5,lg:2}} mt={{xs:1,sm:1.2,md:1.5,lg:2}} display="flex" justifyContent="center">
                            <Box key={sectionKey}
                                width="75%"
                                sx={{
                                    background: 'linear-gradient(180deg, #42989e, #264d90)',
                                    borderRadius: '5px',
                                    padding: '5px'
                                }}
                                display="flex"
                                justifyContent="center"
                            >
                                <Typography  key={sectionKey} fontSize={{xs:'1rem',sm:'1.2rem',md:'1.5',lg:'2rem'}} color="white" textAlign="center">
                                    {GalleryData[sectionKey].CAPTION}
                                </Typography>
                            </Box>
                        </Box>

                        <Slider
                            key={sectionKey}
                            slideData={GalleryData[sectionKey].IMAGES}
                            interval={intervals[sectionKey]}
                            showButtons={false}
                            showBottomDots={false}
                        />
                    </>
                ))}
            </>


        </>
    )
}
export default Gallery