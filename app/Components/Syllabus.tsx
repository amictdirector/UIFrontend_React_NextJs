import { Box, Grid } from "@mui/material";
import DownloadButton from "./DownloadButton"
import SyllabusFiles from "../Data/Syllabus.json"

type SyllabusFiles = {
    course: string, //primary Text
    updateOn: string, // secondary Text
    filePath: string,
    enableView: boolean,
    download: boolean,
    downloadLinK: string,
    showChip: boolean,

}

type SyllabusProp = {
    syllabus: SyllabusFiles[]
}
const Syllabus = ({ syllabus: SyllabusProp }) => {

    const handleView = (location: string) => {
        const pdfUrl = `${window.location.origin}/${location}`;
        window.open(pdfUrl, '_blank');
    }

    return (
        <>
            <Grid
                container
                bgcolor={''}
                justifyContent="center" 
                alignItems="center"    
                spacing={3}
                marginTop={{ xs: '20px', md: '10px'}} 
                flexDirection="column"
                width="100%"
            >
                <Grid width={{xs:'100%', md:'75%',lg:'50%'}} bgcolor={''}>
                    {
                        Object.entries(SyllabusFiles).map(([key, value]) => (
                            <Box key={key}>
                                <DownloadButton primaryText={value.course} secondaryText={value.updateOn} showDownloadIcon={value.download} showChip={value.showChip} downloadLink={value.downloadLinK} showViewIcon={value.enableView} />
                            </Box>
                        ))
                    }
                </Grid>

                {/* <Box onClick={() => handleView("files/Syllabus/BBA.pdf")}>
                    <DownloadButton primaryText={"BBA"} secondaryText={"Updated on: July 19th, 2025"} showDownloadIcon={true} showChip={false} downloadLink={"/files/Syllabus/BBA.pdf"} showViewIcon={false} />
                </Box>
                <Box onClick={() => handleView("files/Syllabus/BCA.pdf")}>
                    <DownloadButton primaryText={"BCA"} secondaryText={"Updated on: July 19th, 2025"} showDownloadIcon={true} showChip={false} downloadLink={"/files/Syllabus/BCA.pdf"} showViewIcon={false} />
                </Box>
                <Box onClick={() => handleView("files/Syllabus/BTECH.pdf")}>
                    <DownloadButton primaryText={"B. Tech"} secondaryText={"Updated on: July 19th, 2025"} showDownloadIcon={true} showChip={false} downloadLink={"/files/Syllabus/BTECH.pdf"} showViewIcon={false} />
                </Box>
                <Box onClick={() => handleView("files/Syllabus/BTECH_CSE.pdf")}>
                    <DownloadButton primaryText={"B. Tech CSE"} secondaryText={"Updated on: July 19th, 2025"} showDownloadIcon={true} showChip={false} downloadLink={"/files/Syllabus/BTECH_CSE.pdf"} showViewIcon={false} />
                </Box> */}
            </Grid>
        </>
    )

}

export default Syllabus 