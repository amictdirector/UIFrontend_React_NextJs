import { Box, Grid, Typography } from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useEffect, useState } from "react";
import { useSwipeable } from 'react-swipeable';

type SlideDataObject = {
    imageIndex: number,
    imagePath: string,
    imageBgColor: string
}
type SliderProps = {
    slideData: SlideDataObject[];
    interval: number,
    showButtons: boolean,
    showBottomDots: boolean
}
const Slider = ({ slideData, interval, showButtons, showBottomDots}: SliderProps) => {
    const [activeNow, setActiveNow] = useState(0);
    useEffect(() => {
        const sliderClickInterval = setInterval(() => {
            console.log("interval")
            rightArrowClick();
        }, interval);

        return () => clearInterval(sliderClickInterval);
    }, [activeNow]);
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => rightArrowClick(),
        onSwipedRight: () => leftArrowClick(),
        trackMouse: true,
    });

    const [slide, setSlideValue] = useState(0)
    const imageLen = slideData.length - 1;

    const leftArrowClick = () => {

        if (activeNow == 0) {
            setSlideValue((imageLen * 100) * -1);
            setActiveNow(imageLen)
        } else {
            setSlideValue(slide + 100)
            setActiveNow(activeNow - 1)
        }

    }
    const rightArrowClick = () => {
        if (activeNow == imageLen) {
            setSlideValue(0)
            setActiveNow(0)
        } else {
            setSlideValue(slide - 100)
            setActiveNow(activeNow + 1)
        }
    }
    return (
        <>
            <Grid position={'relative'} container height={'600px'} bgcolor={''} justifyContent={'space-between'} alignContent={'center'} overflow={"clip"}>
                <Box display={'flex'} flexDirection={'row'} position={'absolute'}
                    height={'100%'}
                    width={'100%'}
                    sx={{
                        overflowX: 'hidden',
                        ":hover": { cursor: 'pointer' }
                    }}
                    {...swipeHandlers}>
                    {
                        Object.entries(slideData).map(([key, imageData]) => (
                            <Box key={key}
                                bgcolor={imageData.imageBgColor}
                                minWidth={'100%'}
                                sx={{
                                    transform: `translateX(${slide}%)`,
                                    transition: 'transform 1.5s ease', background: 'linear-gradient(45deg, #2752bb, #4289a5)',
                                    backgroundImage: `url(${imageData.imagePath})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                }}
                            />
                        ))
                    }


                </Box>


                {showButtons &&
                    <>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={{ xs: '30px', md: '40', lg: '50px' }} width={{ xs: '25px', md: '35', lg: '45px' }} bgcolor={'black'} sx={{
                            backdropFilter: 'blur(80px)',
                            WebkitBackdropFilter: 'blur(80px)',
                            ":hover": { cursor: 'pointer' },
                            borderTopRightRadius: '10px',
                            borderBottomRightRadius: '10px',
                        }} onClick={leftArrowClick} ><ArrowLeftIcon /></Box>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={{ xs: '30px', md: '40', lg: '50px' }} width={{ xs: '25px', md: '35', lg: '45px' }} bgcolor={'black'} sx={{
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            ":hover": { cursor: 'pointer' },
                            borderTopLeftRadius: '10px',
                            borderBottomLeftRadius: '10px',
                        }} onClick={rightArrowClick} ><ArrowRightIcon /></Box>
                    </>
                }

            </Grid>
            {showBottomDots &&
                <Box display={'flex'} height={"20px"} width={"100%"} bgcolor={''} justifyContent={'center'} alignItems={'center'}  >
                    {
                        Object.entries(slideData).map(([key]) => (
                            <Box key={key} borderRadius="200px" marginLeft={"15px"} height={"10px"} width={activeNow == Number(key) ? "20px" : "10px"} bgcolor={'black'}></Box>
                        ))
                    }
                </Box>
            }
        </>
    )
}

export default Slider;