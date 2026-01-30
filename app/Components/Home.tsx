import { Button, Chip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import textData from '../Data/textContent.json'
import notice from '../Data/Notice.json'
import event from '../Data/Events.json'
import viewFiles from '../Data/ViewFiles.json'
import sliderImageData from "../Data/SliderImages.json"
import downloadFiles from '../Data/DownloadForms.json'
import { useEffect, useState, useRef } from "react";
import DownloadButton from "./DownloadButton";
import Youtube from './Youtube';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Slider from "./Slider";

const Home = () => {
  const [showNotice, setShowNotice] = useState<Boolean>(true)
  const [showView, setShowView] = useState<Boolean>(true)

  const [justifyTo, setJustifyTo] = useState<Boolean>(false)
  const [indicatorBar, setIndicatorBar] = useState<Boolean>(false)

  const listRef = useRef(null);
  const [direction, setDirection] = useState<'UP' | 'DOWN'>('UP');
  const directionRef = useRef(direction);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Optional: animate only once
    });
  
    // Ensures it re-scans the DOM after render
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);
  // useEffect(() => {
  //   const container = listRef.current;
  //   if (!container) return;

  //   const scrollStep = 1;

  //   const interval = setInterval(() => {
  //     const direction = directionRef.current;

  //     if (direction === 'UP') {
  //       container.scrollTop += scrollStep;

  //       if (container.scrollTop + 5 + container.clientHeight >= container.scrollHeight) {
  //         directionRef.current = 'DOWN';
  //         setDirection('DOWN');
  //       }
  //     } else if (direction === 'DOWN') {
  //       container.scrollTop -= scrollStep;

  //       if (container.scrollTop <= 0) {
  //         directionRef.current = 'UP';
  //         setDirection('UP');
  //       }
  //     }
  //   }, 60);

  //   return () => clearInterval(interval);
  // }, []);

  const toggleNoticeEvent = (board: any) => {
    if (board === 'NOTICE') {
      setShowNotice(true);
      setJustifyTo(!justifyTo);
    } else {
      setShowNotice(false);
      setJustifyTo(!justifyTo) // move the indicaton bar to right Side.
    }
  }
  const toggleViewDownloads = (board: any) => {
    if (board === 'VIEW') {
      setShowView(true);
      setIndicatorBar(!indicatorBar);
    } else {
      setShowView(false);
      setIndicatorBar(!indicatorBar) // move the indicaton bar to right Side.
    }
  }
  return (
    <>
    <Slider slideData={sliderImageData} interval={3000} showButtons={true} showBottomDots={true}/>
      <Grid container size={12} justifyContent={'space-between'} sx={{ padding: { xs: '5px', sm: '5px', md: '50px', lg:'100px' } }} >


        <Grid data-aos="zoom-in" fontSize={{
          xs: '12px',
          sm: '14px',
          md: '16px',
        }} sx={{ padding: { xs: '5px', sm: '5px', md: '10px', lg: '100px' } }}
          size={{ xs: 12, sm: 12, md: 6 }} bgcolor={''} color={'black'}>
          <Typography sx={{
            background: 'linear-gradient(228deg, #0087ff, #508db2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', fontSize: { xs: '2rem', md: '5rem' }, fontWeight: 'bold'
          }}>
            {textData.collageNameSpaced}

          </Typography>
          <Typography textAlign={'left'} sx={{
            background: 'linear-gradient(228deg, #0087ff, #508db2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', fontSize: { xs: '1.5rem', md: '2.5rem' }, fontWeight: 'bold'
          }} >{textData.collageDescRegural}</Typography>
          <Typography textAlign={'left'} sx={{
            background: 'linear-gradient(228deg, #0087ff, #508db2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', fontSize: { xs: '1rem', md: '1.5rem' }, fontWeight: 'bold'
          }} >{textData.collageLocationCity}</Typography>

          <Typography textAlign={'justify'} sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}>

            <br />{textData.collageHomeText}
          </Typography>
        </Grid>
        <Grid data-aos="zoom-in" sx={{ padding: { xs: '5px', sm: '5px', md: '10px', lg: '100px' } }}
          size={{ xs: 12, sm: 12, md: 6 }} bgcolor={''} color={'black'} display={'flex'} alignItems={'center'}>
          <Youtube videoId={"Q99T72Qf308"} autoplay={1} mute={1} loop={1} playlist={"Q99T72Qf308"}/>

        </Grid>
        <Grid data-aos="zoom-in" order={{ xs: 3, md: 0 }} sx={{ padding: { xs: '5px', sm: '5px', md: '10px', lg: '100px' } }}
          size={{ xs: 12, sm: 12, md: 6 }} bgcolor={''} color={'black'} display={'flex'} alignItems={'center'}>
          <Youtube videoId={"6WpBAsIqr9M"} autoplay={0} mute={0} loop={1} playlist={"6WpBAsIqr9M"}/>

        </Grid>
        <Grid  data-aos="zoom-in" fontSize={{
          xs: '12px',
          sm: '14px',
          md: '16px',
        }} sx={{ padding: { xs: '5px', sm: '5px', md: '10px', lg: '100px' } }}
          size={{ xs: 12, sm: 12, md: 6 }} bgcolor={''} color={'black'}>
          <Typography sx={{
            background: 'linear-gradient(228deg, #0087ff, #508db2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', fontSize: { xs: '2rem', md: '5rem' }, fontWeight: 'bold'
          }}>
            {textData.labelAboutSwayam}

          </Typography>
          <Typography textAlign={'left'} sx={{
            background: 'linear-gradient(228deg, #0087ff, #508db2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', fontSize: { xs: '1.5rem', md: '2.5rem' }, fontWeight: 'bold'
          }} >{textData.labelAboutSwayamSubHeading}</Typography>
          

          <Typography textAlign={'justify'} sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}>

            <br />{textData.swayamText}
          </Typography>
        </Grid>
        <Grid order={{ xs: 4, md: 1 }} sx={{ height: '500px', borderRadius: '5px', padding: { xs: '5px', sm: '5px', md: '10px', lg: '10px' } }} size={{ xs: 12, sm: 12, md: 6 }} bgcolor={''}>
          <Grid container size={12} sx={{ background: 'linear-gradient(90deg, #40949d, #275091)', borderTopRightRadius: '5px', borderTopLeftRadius: '5px' }}
          >
            <Grid borderRadius={'5px'} bgcolor={''} size={6} sx={{ height: 'auto' }} justifyItems={'center'} alignContent={'center'} onClick={() => toggleNoticeEvent("NOTICE")}>
              <Typography color={"white"} fontSize={{ xs: '1rem', sm: '1.75rem', md: '2.5rem', lg: '3rem' }} fontFamily={'sans-serif'} fontWeight={{ lg: 'bold' }}>
                {textData.labelNotice}
              </Typography>
            </Grid>
            <Grid borderRadius={'5px'} bgcolor={''} size={6} sx={{ height: 'auto' }} justifyItems={'center'} alignContent={'center'} onClick={() => toggleNoticeEvent("EVENT")}>
              <Typography color={"white"} fontSize={{ xs: '1rem', sm: '1.75rem', md: '2.5rem', lg: '3rem' }} fontFamily={'sans-serif'} fontWeight={{ lg: 'bold' }}>
                {textData.labelEvents}
              </Typography>
            </Grid>
          </Grid>
          <Grid marginTop={'5px'} size={12} >
            <Box width={'50%'} sx={{
              transform: justifyTo ? 'translateX(100%)' : 'translateX(0)',
              transition: 'transform 0.5s ease', background: 'linear-gradient(45deg, #2752bb, #4289a5)'
            }} height={'5px'}>
            </Box>
          </Grid>
          <Grid ref={listRef} marginTop={'5px'} overflow={'auto'} bgcolor={''} height={{ xs: '90%', sm: '80%', md: '85%', lg: '100%' }} sx={{
            borderRadius: '5px',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            }, boxShadow: '0px 0px 20px 0px #347497', borderColor: 'black'
          }}>
            <Box maxHeight={''} borderColor={'blue'} >

              {showNotice ? <Notices /> : <Events />}
            </Box>
          </Grid>
        </Grid>

        <Grid order={{ xs: 3, md: 1 }} sx={{ height: '500px', borderRadius: '5px', padding: { xs: '5px', sm: '5px', md: '10px', lg: '10px' } }} size={{ xs: 12, sm: 12, md: 6 }} bgcolor={''}>
          <Grid container size={12} sx={{ background: 'linear-gradient(90deg, #40949d, #275091)', borderTopRightRadius: '5px', borderTopLeftRadius: '5px' }} justifyContent={'center'}>
            {/* <Grid borderRadius={'5px'} bgcolor={''} size={6} sx={{ height: 'auto' }} justifyItems={'center'} alignContent={'center'} onClick={() => toggleViewDownloads("VIEW")}>
              <Typography color={"white"} fontSize={{ xs: '1rem', sm: '1.75rem', md: '2.5rem', lg: '3rem' }} fontFamily={'sans-serif'} fontWeight={{ lg: 'bold' }}>
                {textData.labelView}
              </Typography>
            </Grid> */}
            <Grid borderRadius={'5px'} bgcolor={''} size={6} sx={{ height: 'auto' }} justifyItems={'center'} alignContent={'center'} onClick={() => toggleViewDownloads("DOWNLOAD")}>
              <Typography color={"white"} fontSize={{ xs: '1rem', sm: '1.75rem', md: '2.5rem', lg: '3rem' }} fontFamily={'sans-serif'} fontWeight={{ lg: 'bold' }}>
                {textData.labelDownloads}
              </Typography>
            </Grid>
          </Grid>
          <Grid marginTop={'5px'} size={12} display={'flex'} justifyContent={'center'}>
            <Box width={'50%'} sx={{
              transform: false ? 'translateX(100%)' : 'translateX(0)',
              transition: 'transform 0.5s ease', background: 'linear-gradient(45deg, #2752bb, #4289a5)'
            }} height={'5px'}>
            </Box>
          </Grid>
          <Grid marginTop={'5px'} overflow={'auto'} bgcolor={''} height={{ xs: '90%', sm: '80%', md: '85%', lg: '100%' }} sx={{
            borderRadius: '5px',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            }, boxShadow: '0px 0px 20px 0px #347497', borderColor: 'black'
          }}>
            <Box maxHeight={''} borderColor={'blue'} >
            <Downloads />
              {/* {showView ? <View /> : <Downloads />} */}
            </Box>
          </Grid>
        </Grid>

      </Grid>
      <Grid bgcolor={''} height={'100px'}></Grid>
    </>
  )

}

const View = () => {
  return (
    <>
      <Box padding={'15px'}>

        {Object.entries(viewFiles).map(([key, value]) => (
          <DownloadButton key={key}
            primaryText={value.primaryName}
            secondaryText={value.secondaryName}
            showDownloadIcon={value.downloadable}
            showChip={value.isNew}
            downloadLink={value.link}
            showViewIcon={false} />
        ))}

      </Box>

    </>
  )
}

const Downloads = () => {
  return (
    <>

      <Box padding={'15px'}>

        {Object.entries(downloadFiles).map(([key, value]) => (
          <DownloadButton key={key}
            primaryText={value.primaryName}
            secondaryText={value.secondaryName}
            showDownloadIcon={value.downloadable}
            showChip={value.isNew}
            downloadLink={value.link}
            showViewIcon={false} />
        ))}

      </Box>

    </>
  )
}

const Notices = () => {
  return (
    <>
      {Object.entries(notice).map(([key, value]) => (
        <NoticeListItem key={key} item={value as NoticeListData} />
      ))}

    </>
  )
}
const Events = () => {
  return (
    <>
      {Object.entries(event).map(([key, value]) => (
        <NoticeListItem key={key} item={value as NoticeListData} />
      ))}
    </>
  )
}


interface NoticeListData {
  name: string,
  file: string,
  month: string,
  date: string,
  year: string,
  expired: boolean
}
interface Props {
  item: NoticeListData;
}
const NoticeListItem: React.FC<Props> = ({ item }: Props) => {
  const [changeColor, setChangeColor] = useState<string>('primary')
  useEffect(() => {
    const interval = setInterval(() => {
      setChangeColor((previous) => previous === 'primary' ? 'secondary' : 'primary')
    }, 500)
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Box color={'black'} marginTop={'10px'} padding={'5px'} display={'flex'} bgcolor={''} height={''} alignItems={'center'} paddingLeft={'10px'} sx={{ ":hover": { cursor: 'pointer', background: '#bcbcbc' } }}>
        {/**Date */}
        <Box width={'120px'}>
          <Box bgcolor={''} justifyItems={'center'}>
            <Typography fontSize={{ xs: '.65rem', sm: '.90rem', md: '1.25rem', lg: '1.75rem' }} fontWeight={'bold'}>{item.month}</Typography>
          </Box>
          <Box bgcolor={''} justifyItems={'center'}>
            <Typography fontSize={{ xs: '.90rem', sm: '1rem', md: '1.50rem', lg: '1.90rem' }} fontWeight={'bold'}>{item.date}</Typography>
          </Box>
          <Box bgcolor={''} justifyItems={'center'}>
            <Typography fontSize={{ xs: '.50rem', sm: '.75rem', md: '.90rem', lg: '1rem' }} fontWeight={'bold'}>{item.year}</Typography>
          </Box>
        </Box>
        {/* Details */}
        <Box display={'flex'} flexDirection={'column'} justifyContent={'space-around'} marginLeft={'20px'} bgcolor={''} marginRight={'20px'}>
          <Box bgcolor={''} width={'100%'}>
            <Typography fontSize={{ xs: '.65rem', sm: '.90rem', md: '1.25rem', lg: '1.75rem' }} >
              {item.name}
            </Typography>
          </Box>
          <Box bgcolor={''}>
            <Typography fontSize={{ xs: '.65rem', sm: '.90rem', md: '1.25rem', lg: '1.75rem' }} >
              {item.file}
            </Typography>

          </Box>
          <Box>
            {!item.expired && <Chip label="New" color={changeColor === 'primary' ? 'secondary' : 'primary'} sx={{ height: '25px' }} />}
          </Box>
        </Box>

      </Box>
    </>
  )

}

export default Home;