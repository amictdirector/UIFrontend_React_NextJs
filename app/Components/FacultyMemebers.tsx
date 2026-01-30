import { Box } from "@mui/material";
import DownloadButton from "./DownloadButton"

type DownloadButtonProps = {
    primaryText: string;
    secondaryText: string;
    showDownloadIcon: boolean;
    showChip: boolean,
    downloadLink: string
};
const FacultyMembers = () => {


    return (
        <>
            <Box display={'flex'} width={'100%'} justifyContent={'center'}>
                <Box>
                    <DownloadButton primaryText={"Trustee Members"} secondaryText={"Updated on: July 19th, 2025"} showDownloadIcon={true} showChip={false} downloadLink={"/files/TrusteeMembers.pdf"} showViewIcon={false} />
                    <DownloadButton primaryText={"Faculty Members"} secondaryText={"Updated on: July 19th, 2025"} showDownloadIcon={true} showChip={false} downloadLink={"/files/FacultyList.pdf"} showViewIcon={false}/>
                </Box>
                
            </Box>


        </>
    )

}

export default FacultyMembers 