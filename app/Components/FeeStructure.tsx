import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import FeeHeaders from '../Data/FeesHeaders.json'
// import FeesStructure from '../Data/FeesStructure.json'
import FeesStructure from '../Data/FeeStructureJson.json'
import { Typography } from "@mui/material";
const FeeStructure = ({ feesFor }) => {

    return (
        <>
            <Box borderRadius={'20px'} bgcolor={'#ffffff'} overflow={'hidden'} color={'black'}>
                <Box display={'flex'} width={'100%'} height={'auto'} bgcolor={''} maxHeight={'70px'} minHeight={'50px'} paddingLeft={"20px"} alignItems={'center'}>
                    <Typography fontWeight={'bold'} fontSize={{xs:'1rem',md:'2rem'}}>
                        Fee Structure: {feesFor}
                    </Typography>
                </Box>
                <hr></hr>
                {
                    FeesStructure.filter(fee => fee.Course===feesFor).map(array => Object.entries(array).map(([key,value]) => (
                        <Box display={'flex'} width={'100%'} height={'auto'} bgcolor={''}>
                            <Box bgcolor={''} width={'50%'} height={"auto"} alignContent={'center'} paddingLeft={"10px"} borderRight="1px solid black" borderBottom="1px solid black">
                                <Typography textOverflow={'ellipsis'}>{key}</Typography>
                            </Box>
                            <Box bgcolor={''} width={'50%'} height={"50px"} alignContent={'center'} paddingLeft={"50px"} borderBottom="1px solid black">{value}</Box>
                        </Box>
                    )))
                }

            </Box>
        </>
    )
}

export default FeeStructure;