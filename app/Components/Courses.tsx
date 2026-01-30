'use client'
import { Box, Button, Input, InputAdornment, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import SearchIcon from '@mui/icons-material/Search';
import CardCourse from "./CardCourse";
import SearchBox from "./SearchBox";
import { use, useState } from "react";
import courses from '../Data/Courses.json'
import { AccountCircle } from "@mui/icons-material";
import { Collapse } from "@mui/material";

type Course = {
    "courseName": string,
    "courseField": string,
    "courseGrade": string,
    "details": string,
    "duration": string,
    "durationUnit": string,
    "stars": number,
    "seats": number,
    "imageURL": string
  }
const Courses = () => {

    const menuList = ["All", "Graduation", "Post Graduation","1 Year","2 Year","3 Year","4 Year"]
    const [showMobViewCourseMenu, setShowMobViewCourseMenu] = useState<boolean>(false);
    const [searchEnabled, setSearchEnabled] = useState<boolean>(false)
    const [coursesToShow,setCoursesToShow] = useState<Course[]>(courses);
    const [activeMenu, setActiveMenu] = useState<string>('All');
    const doFilter = (filter:string) =>{
        setActiveMenu(filter);
        if(filter === 'All'){
            setCoursesToShow(courses);
        }else if(filter.startsWith("1") || filter.startsWith("2")||filter.startsWith("3") ||filter.startsWith("4")){
            const filtered = courses.filter(course=> course.duration.startsWith(filter) )
            setCoursesToShow(filtered);
        }else{
            const filtered = courses.filter(course=> course.courseGrade.startsWith(filter.toUpperCase()) )
            setCoursesToShow(filtered);
        }
    }
    return (
        <>
           
            <Grid
                container
                bgcolor=""
                height="auto"
                alignContent="start"
                justifyContent="center"
                display={{ xs: 'flex', md: 'none' }}
                flexDirection="column"
            >
                <Box display={'flex'}
                    onClick={() => setShowMobViewCourseMenu(prev => !prev) }
                    sx={{
                        background: 'linear-gradient(180deg, #1a9109, #4bb03b)',
                        borderRadius: '5px',
                        height: '50px',
                        width: '100%',
                        boxShadow: '0px 7px 20px 0px #29891b',
                        zIndex: 2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <SearchIcon />
                </Box>

                <Box justifySelf={'center'}
                    sx={{

                        height: 'auto',
                        width: '100%',
                    }}
                >
                    <Collapse in={showMobViewCourseMenu} timeout="auto" unmountOnExit>
                        <Box justifySelf={'center'}
                            key={"shouldPullDownSlowly"}
                            sx={{
                                background: 'linear-gradient(45deg, #1a9109, #4bb03b)',
                                height: 'auto',
                                width: '90%',
                                borderBottomLeftRadius: '10px',
                                borderBottomRightRadius: '10px',
                                padding: '10px',
                                zIndex: 1
                            }}
                        >

                            <>
                                {menuList.map((menu) => (
                                    <Box width={'100%'} bgcolor={''} padding={'5px'}>
                                        <Button fullWidth
                                        onClick={() => {doFilter(String(menu)); setShowMobViewCourseMenu(prev => !prev); }}
                                            sx={{
                                                justifyContent: 'flex-start', 
                                                color: 'white',               
                                                textTransform: 'none'         
                                            }}>
                                            <Typography fontSize={'15px'}>{menu}</Typography>
                                        </Button>
                                    </Box>
                                ))
                                }
                                {/* <Box width={'100%'} bgcolor={''} padding={'5px'}>
                                    <Input
                                        fullWidth
                                        sx={{color:'white'}}
                                        id="input-with-icon-adornment"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <SearchIcon sx={{ color: 'white' }} />
                                            </InputAdornment>
                                        }
                                    />
                                </Box> */}
                            </>
                        </Box>
                    </Collapse>

                </Box>
            </Grid>

            
            <Grid container bgcolor={''} height={'50px'} alignContent={'start'} justifyContent={'center'} display={{ xs: 'none', lg: 'container' }}>
                <Box sx={{ background: 'linear-gradient(45deg, #1a9109, #4bb03b)' }} borderRadius={'5px'} height={'50px'} width={'1000px'} >
                    <Grid container alignContent={'center'} height={'inherit'} width={'inherit'} bgcolor={''}>
                        {menuList.map((menu) => (
                            <Box color={'white'} borderRadius={'5px'} display={'flex'} sx={{ background: '' }} height={'inherit'} width={'auto'} alignItems={'center'} justifyContent={'center'}>
                                <Button sx={{ color: 'white' }} onClick={() => doFilter(menu)}> {menu} </Button>
                            </Box>
                        ))
                        }
                        <Box
                            sx={{ ml: 'auto' }}
                            display="flex"
                            alignItems="center"
                            height="inherit"
                            bgcolor=""
                            paddingX="16px"
                            borderRadius="5px"
                        >
                            {/* <Button onClick={() => setSearchEnabled(true)} sx={{ color: 'white' }}> <SearchIcon /></Button> */}
                        </Box>

                    </Grid>

                </Box>
            </Grid>
            <Grid container bgcolor={''} marginTop={'50px'} justifyContent={'center'} >

                <Grid container bgcolor={''} size={{ xs: 12, sm: 12, md: 8 }} justifyContent={'center'}>
                    {
                        Object.entries(coursesToShow).map(([key, value]) => (
                            <Grid key={key} margin={2}>
                                <CardCourse key={key} course={value} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>

            {searchEnabled && <SearchBox handleSearchWindo={setSearchEnabled} />}


        </>
    )

}
export default Courses;