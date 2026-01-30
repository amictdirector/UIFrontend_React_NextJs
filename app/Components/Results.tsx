import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import ResultList from '../Data/Results.json'
import PlacementList from '../Data/Placements.json'
import { useState } from "react"
import { Typography } from "@mui/material"

const Results = () => {
    const [results, setResults] = useState<boolean>(true);
    const toggleResult = (value) =>{
        setResults(value)
        setPlacements(!value)
    }

    const [placements, setPlacements] = useState<boolean>(false);
    const togglePlacements = (value) =>{
        setPlacements(value)
        setResults(!value)
    }
    return (
        <>
            {/* COMMON FOR PHONE AND DESKTOP */}
            <Grid container bgcolor={''} justifyContent={'center'} alignItems={'center'} flexDirection={{xs:'column',md:'row'}} spacing={2} display={{ xs: 'flex', md: 'flex' }} mb={10}>
                <Box onClick={()=> toggleResult(true)} sx={{':hover': {cursor:'pointer'}}} display={'flex'} flexDirection={'row'} bgcolor={results ? 'green':'black'} height={'50px'} width={{xs:'50%',md:'10%'}} alignItems={'center'} justifyContent={'space-around'} borderRadius={'5px'}>Results</Box>
                <Box onClick={()=> togglePlacements(true)} sx={{':hover': {cursor:'pointer'}}}  display={'flex'} flexDirection={'row'} bgcolor={results ? 'black':'green'} height={'50px'} width={{xs:'50%',md:'10%'}} alignItems={'center'} justifyContent={'space-around'} borderRadius={'5px'}>Placements</Box>
            </Grid>
            {/* FOR TAB and Above [RESULTS]*/}
           { results && <Grid container bgcolor={''} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} spacing={2} display={{ xs: 'none', md: 'flex' }}>

                <Box display={'flex'} flexDirection={'row'} bgcolor={'black'} width={'40%'} justifyContent={'space-around'} borderRadius={'5px'}>
                    <Box>Name</Box>
                    <Box>Position</Box>
                    <Box>Department</Box>
                    <Box>Class</Box>
                    <Box>CGPA</Box>
                    <Box></Box>
                    <Box></Box>
                </Box>
                {
                    Object.entries(ResultList).map(([key, value]) => (
                        <Box key={key} display={'flex'} flexDirection={'row'} sx={{ backgroundImage: 'linear-gradient(104deg, #42989e, #264d90)', ':hover': { background: 'linear-gradient(104deg, #42989e, #264d90)', border: '2px solid green', color: 'white', width: '70%', transition: 'all 0.3s ease', transform: 'scale(1)', '& .details': { display: 'block' } } }} bgcolor={Number(key) % 2 == 0 ? '#2e3030' : '#4b4e4e'} width={'40%'} justifyContent={'space-around'} alignItems={'center'} height={'200px'} border={'2px solid black'} mt={2} mb={2} borderRadius={'5px'}>

                            <Box>{value.name}</Box>
                            <Box className="details" sx={{ display: 'none' }}>{value.rank}</Box>
                            <Box className="details" sx={{ display: 'none' }}>{value.department}</Box>
                            <Box className="details" sx={{ display: 'none' }}>{value.course}</Box>
                            <Box className="details" sx={{ display: 'none' }}>CGPA: {value.cgpa}</Box>
                            <Box bgcolor={'red'} display={'flex'} sx={{ backgroundImage: `url(${value.photoLink})`, height: '200px', width: '200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} ></Box>
                        </Box>
                    ))
                }

            </Grid> }
            { placements && <Grid container bgcolor={''} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} spacing={2} display={{ xs: 'none', md: 'flex' }}>

                <Box display={'flex'} flexDirection={'row'} bgcolor={'black'} width={'40%'} justifyContent={'space-around'} borderRadius={'5px'}>
                    <Box>Our Stars Placements</Box>
                    
                </Box>
                {
                    Object.entries(PlacementList).map(([key, value]) => (
                        <Box key={key} display={'flex'} flexDirection={'row'} sx={{ backgroundImage: 'linear-gradient(104deg, #42989e, #264d90)', ':hover': { background: 'linear-gradient(104deg, #42989e, #264d90)', border: '2px solid green', color: 'white', width: '70%', transition: 'all 0.3s ease', transform: 'scale(1)', '& .details': { display: 'block' } } }} bgcolor={Number(key) % 2 == 0 ? '#2e3030' : '#4b4e4e'} width={'40%'} justifyContent={'space-around'} alignItems={'center'} height={'200px'} border={'2px solid black'} mt={2} mb={2} borderRadius={'5px'}>

                            <Box>{value.name}</Box>
                            <Box className="details" sx={{ display: 'none' }}>Placed in <Typography fontWeight={'bold'}>{value.company}</Typography></Box>
                            <Box className="details" sx={{ display: 'none' }}>{value.department}</Box>
                            <Box bgcolor={'red'} display={'flex'} sx={{ backgroundImage: `url(${value.photoLink})`, height: '200px', width: '200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} ></Box>
                        </Box>
                    ))
                }

            </Grid> }

            {/* FOR MOBILE VIEW */}
            { results && <Grid container bgcolor={''} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} spacing={2} display={{ xs: 'flex', md: 'none' }}>

                {
                    Object.entries(ResultList).map(([key, value]) => (
                        <Box key={key} color={'white'} display={'flex'} flexDirection={'column'} sx={{ backgroundImage: 'linear-gradient(104deg, #42989e, #264d90)', ':hover': { background: 'linear-gradient(104deg, #42989e, #264d90)', border: '2px solid green', color: 'white', width: '70%', transition: 'all 0.3s ease', transform: 'scale(1)', '& .details': { display: 'block' }, '& .pic': { display: 'none' } } }} bgcolor={Number(key) % 2 == 0 ? '#2e3030' : '#4b4e4e'} width={'40%'} justifyContent={'space-around'} alignItems={'center'} height={'200px'} border={'2px solid black'} mt={2} mb={2} borderRadius={'5px'}>

                            <Box>{value.name}</Box>
                            <Box className="details" sx={{ display: 'none' }}>{value.rank}</Box>
                            <Box className="details" sx={{ display: 'none' }}>{value.department}</Box>
                            <Box className="details" sx={{ display: 'none' }}>{value.course}</Box>
                            <Box className="details" sx={{ display: 'none' }}>CGPA: {value.cgpa}</Box>
                            <Box className="pic" bgcolor={'red'} display={'flex'} sx={{ display: 'block', backgroundImage: `url(${value.photoLink})`, height: '200px', width: '200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} ></Box>
                        </Box>
                    ))
                }
            </Grid> }
            { placements && <Grid container bgcolor={''} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} spacing={2} display={{ xs: 'flex', md: 'none' }}>

                {
                    Object.entries(PlacementList).map(([key, value]) => (
                        <Box key={key} color={'white'} display={'flex'} flexDirection={'column'} sx={{ backgroundImage: 'linear-gradient(104deg, #42989e, #264d90)', ':hover': { background: 'linear-gradient(104deg, #42989e, #264d90)', border: '2px solid green', color: 'white', width: '70%', transition: 'all 0.3s ease', transform: 'scale(1)', '& .details': { display: 'block' }, '& .pic': { display: 'none' } } }} bgcolor={Number(key) % 2 == 0 ? '#2e3030' : '#4b4e4e'} width={'40%'} justifyContent={'space-around'} alignItems={'center'} height={'200px'} border={'2px solid black'} mt={2} mb={2} borderRadius={'5px'}>

                            <Box>{value.name}</Box>
                            <Box className="details" sx={{ display: 'none' }}>Placed in <Typography fontWeight={'bold'}>{value.company}</Typography></Box>
                            <Box className="details" sx={{ display: 'none' }}>{value.department}</Box>
                            <Box className="pic" bgcolor={'red'} display={'flex'} sx={{ display: 'block', backgroundImage: `url(${value.photoLink})`, height: '200px', width: '200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} ></Box>
                        </Box>
                    ))
                }
            </Grid> }
        </>
    )
}

export default Results