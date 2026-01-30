import { Box, Button, Collapse, Grid, Input, InputAdornment, Link, Typography } from "@mui/material";
import FeeStructureJson from '../Data/FeeStructureJson.json';
import { useState } from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FeeStructure from "./FeeStructure";

type Course = {
    "CourseType":string,
    "Course":string,
    "Duration":string,
    "Prospectus (Only at Admission Time) (A)":string,
    "Admission Processing Fee (B)":string,
    "Total Only at Admission Time (C=A+B)":string,
    "Tutition Fees (Per Sem) (D)":string,
    "Grand Total(General Category)(E=C+D)":string,
    "Special Discount for Meritorious Students (G) \n 81% and above (G=D*20%)":string,
    "Parentless (H=D*10%)":string,
    "Fatherless (I=D*10%)":string,
    "Sibling (J=D*10%)":string
}
const FeeStructureSelectionMenu = () => {
    const handleClick = (course, courseType) => {
        setShowFeeDetails(!showFeeDetails);
        setSelectedCourse(course);
        setShowSelectionMenu(!showSelectionMenu)
    }
    const navigateBack = () => {
        setShowFeeDetails(!showFeeDetails);
        setShowSelectionMenu(!showSelectionMenu)
    }
    const doFilter = (filter:string) =>{
        console.log(filter)
        if(filter === 'All'){
            setCoursesToShow(FeeStructureJson);
        }else if(filter.startsWith("1") || filter.startsWith("2")||filter.startsWith("3") ||filter.startsWith("4")){
            const filtered = FeeStructureJson.filter(course=> course.Duration.startsWith(filter) )
            setCoursesToShow(filtered);
        }
        else{
            const filtered = FeeStructureJson.filter(course=> course.CourseType.startsWith(filter.toUpperCase()) )
            setCoursesToShow(filtered);
        }
    }
    const menuList = ["All", "Graduation", "Post Graduation","1 Year","2 Years","3 Years","4 Years"]
    const [showMobViewCourseMenu, setShowMobViewCourseMenu] = useState<boolean>(false);
    const [selectedCourseFilter, setSelectedCourseFilter] = useState<string>('All')
    const [showSelectionMenu, setShowSelectionMenu] = useState(true);
    const [showFeeDetails, setShowFeeDetails] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState();
    const [coursesToShow,setCoursesToShow] = useState<Course[]>(FeeStructureJson);
    return (
        <>
            {
                showSelectionMenu && <>
                    <Box display={'flex'}
                        flexDirection={'column'}
                        sx={{
                            background: '',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            height: '50px',
                            width: '100%',
                            alignItems: 'center',
                            justifyItems: 'space-between'
                        }}>
                        <Box display={'flex'}
                            onClick={() => setShowMobViewCourseMenu(prev => !prev)}
                            sx={{
                                cursor: 'pointer',
                                background: 'linear-gradient(45deg, #18181b, #52525a)',
                                borderRadius: '5px',
                                height: '50px',
                                width: { xs: '80%', md: '80%', lg: '20%' },
                                boxShadow: '0px 7px 20px 0px #52525a',
                                alignItems: 'center',
                                justifyContent: 'space-around'
                            }}>
                            {selectedCourseFilter}<FilterAltIcon />
                        </Box>
                    </Box>

                    <Box display={'flex'}
                        justifyContent={'space-around'}
                        sx={{

                            height: 'auto',
                        }}
                    >
                        <Collapse in={showMobViewCourseMenu} timeout="auto" unmountOnExit>
                            <Box
                                key={"shouldPullDownSlowly"}
                                sx={{
                                    background: 'linear-gradient(45deg, #18181b, #52525a)',
                                    height: 'auto',
                                    width: '250px',
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
                                                onClick={() => { setShowMobViewCourseMenu(prev => !prev); setSelectedCourseFilter(String(menu)); doFilter(String(menu)) }}
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

                                </>
                            </Box>
                        </Collapse>

                    </Box>

                    <Grid container bgcolor={''} padding={"5px"} justifyContent={'center'}>
                        {
                            Object.entries(coursesToShow).map(([key, value]) => (
                                
                                <Grid onClick={() => handleClick(value.Course, value.CourseType)} display={'flex'} size={{ xs: 12, lg: 4 }} margin={2} height={"50px"} alignItems={{ xs: 'center' }} justifyContent={{ xs: 'center' }} borderRadius={'15px'} sx={{ cursor: 'pointer', background: 'linear-gradient(45deg, #18181b, #52525a)' }}>
                                    <Typography fontSize={{ xs: "15px", lg: "20px" }} fontWeight={'bold'}>{value.Course}</Typography>
                                </Grid>
                            ))
                        }
                    </Grid>
                </>
            }
            {
                showFeeDetails && 
                <>
                <Box onClick={navigateBack} display={'flex'} alignContent={'center'} justifyContent={'center'} margin={5} color={'black'} sx={{cursor:"pointer"}}><Link><Typography textTransform={'none'} fontWeight={'bold'}>Back</Typography></Link></Box>
                <FeeStructure feesFor={selectedCourse} />
                </>

            }
        </>
    )
}

export default FeeStructureSelectionMenu;