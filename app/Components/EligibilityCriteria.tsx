import { Box, Grid } from "@mui/material";
import DownloadButton from "./DownloadButton"

type DownloadButtonProps = {
    primaryText: string;
    secondaryText: string;
    showDownloadIcon: boolean;
    showChip: boolean,
    downloadLink: string
};
const EligibilityCriteria = () => {


    return (
        <>
            <Grid container  justifyContent={'center'} spacing={3} marginTop={{xs:'20px',md:'200',lg:'300px'}}>
                <Box>
                    <DownloadButton primaryText={"Eligibility Criteria"} secondaryText={"Updated on: July 19th, 2025"} showDownloadIcon={true} showChip={false} downloadLink={"/files/EligibilityCriteriaSession2024-25.pdf"} showViewIcon={false} />
                </Box>
            </Grid>
        </>
    )

}

export default EligibilityCriteria 