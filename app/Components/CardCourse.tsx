import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
interface ICourseDetails {
    courseName: string,
    courseField: string,
    details: string,
    duration: string,
    durationUnit: string,
    stars: number,
    seats: number,
    imageURL: string
}
interface ICardCourseProps {
    course: ICourseDetails;
}
const CardCourse = ({ course }: ICardCourseProps) => {
    return (
        <>
            <Box height={{ xs: "450px", lg: "500px" }} width={{ xs: "350px", sm: '200px', lg: "450px" }} bgcolor="" boxShadow={'0px 0px 20px 0px #3e7e9254'} borderRadius="5px" color={'black'} position={'relative'}>
                {/* <Box position={'absolute'} top={'10px'} right={'10px'}>Icon</Box> */}
                <Box
                    borderRadius="5px"
                    height={'60%'}
                    width={'inherit'}
                    sx={{
                        backgroundImage: `url(${course.imageURL})`,
                        backgroundSize: { xs: '100% 100%, cover', md: 'contain' },
                        backgroundRepeat: 'no-repeat'
                    }}

                />
                <Box padding={{ xs: '5px', lg: '15px' }}>
                    <Box>
                        <Typography fontWeight={'400'} fontSize={{ xs: 20, lg: 30 }}>{course.courseName}</Typography>
                        <br />
                    </Box>
                    <Box borderBottom={'2px solid green'} paddingBottom={'15px'} marginBottom={'10px'} height="70px"
                        overflow="hidden">
                        <Typography lineHeight={'25px'} fontSize={15}>{course.details}</Typography>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'} >
                        <Box><CalendarMonthOutlinedIcon />{course.duration}{course.durationUnit}</Box>
                        <Box>
                            {
                                Array.from({ length: course.stars }).map((_, idx) => (
                                    <StarBorderPurple500OutlinedIcon />
                                ))
                            }
                        </Box>
                        <Box display={'flex'} justifyContent={'center'} alignContent={'center'}>
                            <Box ><PeopleAltOutlinedIcon /></Box>
                            <Box alignContent={'end'} >{" "}{course.seats}</Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default CardCourse;