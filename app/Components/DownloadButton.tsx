import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Download from '@mui/icons-material/Download';
import Chip from "@mui/material/Chip";
import { useEffect, useState } from "react";

type DownloadButtonProps = {
    primaryText: string;
    secondaryText: string;
    showDownloadIcon: boolean;
    showChip: boolean,
    downloadLink: string,
    showViewIcon: boolean
};
const handleDownload = (downloadLink: string) => {
    console.log("download clicked" + downloadLink)
    const link = document.createElement('a');
    link.href = downloadLink;
    link.download = downloadLink.replace("/files/", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const handleView = (fileLocation: string) =>{
    console.log(fileLocation)
    const pdfUrl = `${window.location.origin}${fileLocation}`;
    window.open(pdfUrl, '_blank');
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ primaryText, secondaryText, showDownloadIcon, showChip, downloadLink,showViewIcon }) => {
    const [changeColor, setChangeColor] = useState<string>('primary')

    useEffect(() => {
        const colorList = ['warning', 'error'];
        let idx = 0;
        const interval = setInterval(() => {
            idx = (idx + 1) % colorList.length;
            setChangeColor(colorList[idx]);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <Box sx={{ cursor:'pointer', marginBottom: '20px', borderRadius: '5px', padding: { xs: '5px', md: '10px', lg: '12px' }, display: 'flex', width: '100%', background: 'linear-gradient(270deg, #4266a0, #63a496)', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Box alignContent={'center'} bgcolor={''}>

                    <PictureAsPdfIcon sx={{ fontSize: { xs: '30px', md: '30px', lg: '50px' }, color: 'whitesmoke' }} />

                </Box>
                <Box flex={'true'} bgcolor={''} color={'white'} sx={{ marginLeft: { xs: '20px', md: '20px', lg: '50px' } }} alignContent={'center'} >
                    <Typography sx={{ fontSize: { xs: '12px', md: '12px', lg: '20px' } }}>{primaryText}</Typography>
                    <Typography sx={{ fontSize: { xs: '10px', md: '10px', lg: '15px' } }}>{secondaryText}</Typography>

                </Box>

            </Box>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
            {showChip && <Chip label="New" color={changeColor as any} sx={{ height: '20px' }} />}
            {showViewIcon &&
                <Box marginLeft={1} marginRight={1}>
                    <IconButton edge="end" aria-label="download" onClick={() => handleView(downloadLink)}>
                        <VisibilityIcon sx={{ fontSize: { xs: '20px', md: '15px', lg: '25px' }, color: 'whitesmoke' }} />
                    </IconButton>
                </Box>}
            {showDownloadIcon &&
                <Box marginLeft={1} marginRight={1}>
                    <IconButton edge="end" aria-label="download" onClick={() => handleDownload(downloadLink)}>
                        <Download sx={{ fontSize: { xs: '20px', md: '15px', lg: '25px' }, color: 'whitesmoke' }} />
                    </IconButton>
                </Box>}

            </Box>
           



        </Box>
    )
}

export default DownloadButton;