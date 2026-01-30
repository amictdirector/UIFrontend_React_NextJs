import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
const Gallery = () => {
    const doAnimate = () => {


        var element = document.getElementById("1");
        element.style.transition = 'transform  1s ease';
        element.style.transform = 'translateY(-100px)';
        setTimeout(() => {
            var parentWithChildList = document.getElementById('caption');
            const children = Array.from(parentWithChildList.children);
            var firstElement = parentWithChildList.firstElementChild;
            parentWithChildList.appendChild(firstElement);
            var idNumber = 1;
            for(var i=0;i<=children.length - 1;i++){               
                children[i].id = idNumber;
                idNumber++;
            }

        }, 1000)

    }
    return (
        <><Grid container spacing={{ xs: 2, md: 6 }} bgcolor="" height={'600px'} sx={{ padding: { xs: 1, sm: 2, md: 6 } }}>
            <Grid id={"caption"} display={'flex'} size={{ xs: 12, sm: 12, md: 6 }} color={'black'} flexDirection={'column'} maxHeight={'100px'}>
                <Box id={'1'} bgcolor={'green'} height={'100%'} width={'100%'} alignContent={'center'} justifyItems={'center'}>
                    <Typography fontSize={'100px'} fontWeight={'bold'} color="white"> 1 </Typography>
                </Box>
                <Box id={'2'} bgcolor={'blue'} height={'100%'} width={'100%'} alignContent={'center'} justifyItems={'center'}>
                    <Typography fontSize={'100px'} fontWeight={'bold'} color="white"> 2 </Typography>
                </Box>
                <Box id={'3'} bgcolor={'pink'} height={'100%'} width={'100%'} alignContent={'center'} justifyItems={'center'}>
                    <Typography fontSize={'100px'} fontWeight={'bold'} color="white"> 3 </Typography>
                </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6 }} bgcolor={'green'} color={'black'}>

            </Grid>

        </Grid>
            <Button onClick={doAnimate}>CLICK</Button>
        </>
    )
}
export default Gallery