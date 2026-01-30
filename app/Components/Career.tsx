import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Career = () =>{
    return(
        <>
            <Grid container bgcolor={'gray'} alignContent={'center'} justifyContent={'center'}>
                    <Box>
                        <Typography fontWeight={'bold'} fontSize={{xs:'50px',md:'100px',lg:'200px'}}> Career </Typography>
                    </Box>
            </Grid>
        </>
    )
}

export default Career;