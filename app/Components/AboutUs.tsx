import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircleIcon from '@mui/icons-material/Circle';
import IconButton from "@mui/material/IconButton";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Download from '@mui/icons-material/Download';
import DownloadButton from './DownloadButton'
import textData from '../Data/textContent.json'
const AboutUs = () => {
    return (
        <>
            <Grid container key={'key_grid_container'} marginBottom={'10px'} bgcolor={''} height={'100%'} size={12} justifyContent={'space-between'} sx={{ padding: { xs: '5px', sm: '5px', md: '10px' } }} >
                <Grid key={'key_grid_about_text'} marginTop={{ md: '10px', lg: '50px' }} fontSize={{
                    xs: '12px',
                    sm: '14px',
                    md: '16px',
                }} sx={{ padding: { xs: '5px', sm: '5px', md: '50px', lg: '50px' } }}
                    size={{ xs: 12, sm: 12, md: 6 }}
                    bgcolor={''}
                    color={'black'}>
                    <Typography sx={{
                        background: 'linear-gradient(228deg, #0087ff, #508db2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent', fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold'
                    }}>
                        {textData.aboutUsOverView}<br />
                    </Typography>

                    <br />
                    <Typography textAlign={'justify'}>{textData.aboutUsOverViewText}</Typography >
                </Grid>
                <Grid key={'key_grid_about_text'} marginTop={{ md: '10px', lg: '50px' }} fontSize={{
                    xs: '12px',
                    sm: '14px',
                    md: '16px',
                }} order={{ xs: 1, md: 2 }} sx={{ padding: { xs: '5px', sm: '5px', md: '50px', lg: '50px' } }}
                    size={{ xs: 12, sm: 12, md: 6 }}
                    bgcolor={''}
                    color={'black'}>
                    <Typography sx={{
                        background: 'linear-gradient(228deg, #0087ff, #508db2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent', fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold'
                    }}>
                        About Us
                        <br />
                    </Typography>

                    <br />
                    <Typography textAlign={'justify'}>
                        "Education embranes not only facts but also values- it inculcates such good practices which may help reveal our qualities and perfections in every sphere of life" A & M Institute of Management and Technology endeavours to impart such value based education to our students. A&MIMT is a prestigious institution of higher learning, with short but distinguished history and a bright future with the promise of continuing accomplishments. This institute was established in 2008 by the elites of the Pathankot and runs under A&M educational society » with this commitment of provide Management and Technical Education to the young people. It is a place where culture, tradition and modernity blend harmoniously to shape and mould the personality of the students in a healthy way. Having successfully crossed the various hurdles encountered on the way of its growth, A&MIMT has grown in status and strength today, and has become one of the finest educational programmers which revolves around equipping our students with such qualities that they confidently plunge in to any field of activity which is socially useful, intellectually elevating and spiritually ennobling. In a world where everything is measured by the yardstick of success, we train our students to think logically, systematically and analytically, so that they can face the emerging economic, social, political and cultural changes arising from globalization, and can cove towards their goals with focused vision.
                    </Typography>

                </Grid>

            </Grid>
            
            <Grid container key={'key_grid_container_History'} marginBottom={'10px'} bgcolor={''} height={'100%'} size={12} justifyContent={'space-between'} sx={{ padding: { xs: '5px', sm: '5px', md: '10px' } }} >
                <Grid key={'key_grid_about_text'} marginTop={{ md: '10px', lg: '50px' }} fontSize={{
                    xs: '12px',
                    sm: '14px',
                    md: '16px',
                }} order={{ xs: 1, md: 2 }} sx={{ padding: { xs: '5px', sm: '5px', md: '50px', lg: '50px' } }}
                    size={{ xs: 12, sm: 12, md: 6 }}
                    bgcolor={''}
                    color={'black'}>
                    <Typography sx={{
                        background: 'linear-gradient(228deg, #0087ff, #508db2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent', fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold'
                    }}>
                        History & Facts
                        <br />
                    </Typography>

                    <br />
                    <Typography textAlign={'justify'}>
                        A&MICT is a prestigious institution of higher learning, with short but distinguished history and a bright future
                        with the promise of continuing accomplishments. This institute was established in 2008 by the elites of the
                        Pathankot with this commitment of provide Computer and Technical Education to the young people. It is a place
                        where culture, tradition and modernity blend harmoniously to shape and mould the personality of the students in
                        a healthy way. Having successfully crossed the various hurdles encountered on the way of its growth, A&MICT has
                        grown in status and strength today, and has become one of the finest educational programmers which revolves around
                        equipping our students with such qualities that they confidently plunge in to any field of activity which is
                        socially useful, intellectually elevating and spiritually ennobling. In a world where everything is measured by the
                        yardstick of success, we train our students to think logically, systematically and analytically, so that they can
                        face the emerging economic, social, political and cultural changes arising from globalization, and can cove towards
                        their goals with focused vision.
                    </Typography>

                </Grid>
                <Grid key={'key_grid_about_Vision'} marginTop={{ md: '10px', lg: '50px' }} fontSize={{
                    xs: '12px',
                    sm: '14px',
                    md: '16px',
                }} order={{ xs: 1, md: 2 }} sx={{ padding: { xs: '5px', sm: '5px', md: '50px', lg: '50px' } }}
                    size={{ xs: 12, sm: 12, md: 6 }}
                    bgcolor={''}
                    color={'black'}>
                    <Typography sx={{
                        background: 'linear-gradient(228deg, #0087ff, #508db2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent', fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold'
                    }}>
                        Vision
                        <br />
                    </Typography>

                    <br />
                    <Typography textAlign={'justify'}>
                        Our vision is to be the community without walls, studying at A & M Group of Institutes will equip you with
                        education that transforms.<br />
                        To be amongst the top management institute in the state of PUNJAB and become the world class center of excellence
                        in learning and innovation drive by social sensitivity and state of art technology.
                    </Typography>
                    <Typography sx={{
                        background: 'linear-gradient(228deg, #0087ff, #508db2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent', fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold'
                    }}>
                        Mission
                        <br />
                    </Typography>

                    <Typography textAlign="justify" component="div">
                        <ul style={{ paddingLeft: '1.2em', margin: 0 }}>
                            <li><CircleIcon sx={{ color: '#4a8db8', fontSize: '10px' }} /> To propagate knowledge to society to the best of your ability.</li>
                            <li><CircleIcon sx={{ color: '#4a8db8', fontSize: '10px' }} /> To standardize institutionalize the academic environment.</li>
                            <li><CircleIcon sx={{ color: '#4a8db8', fontSize: '10px' }} /> To develop promising managers by nurturing their skills.</li>
                            <li><CircleIcon sx={{ color: '#4a8db8', fontSize: '10px' }} /> To facilitate and empower knowledge with practical approach while imbibing human values.</li>
                        </ul>
                    </Typography>

                </Grid>
            </Grid>
            <Grid container key={'key_grid_container_download'} marginBottom={'10px'} bgcolor={''} height={'100%'} size={12} justifyContent={'space-between'} sx={{ padding: { xs: '5px', sm: '5px', md: '5px' } }} >
                <Grid key={'key_grid_about_text'} marginTop={{ md: '10px', lg: '50px' }} fontSize={{
                    xs: '12px',
                    sm: '14px',
                    md: '16px',
                }} order={{ xs: 1, md: 2 }} sx={{ padding: { xs: '5px', sm: '5px', md: '50px', lg: '50px' } }}
                    size={{ xs: 12, sm: 12, md: 6 }}
                    bgcolor={''}
                    color={'black'}>
                    <Typography sx={{
                        marginBottom:'20px',
                        background: 'linear-gradient(228deg, #0087ff, #508db2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent', fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold'
                    }}>
                        Establisment Committee
                    </Typography>
                    
                    <DownloadButton primaryText={"Grievance redressel committee"} secondaryText={"Updated on: July 19th, 2025"} showDownloadIcon={true} showChip={false} downloadLink={""} showViewIcon={false}/>
                    <DownloadButton primaryText={"Internal committee SC/ST"} secondaryText={"Updated on: July 19th, 2025"} showDownloadIcon={true} showChip={false} downloadLink={""} showViewIcon={false}/>
                    <DownloadButton primaryText={"Internal complaint committee"} secondaryText={"Updated on: July 19th, 2025"} showDownloadIcon={true} showChip={false} downloadLink={""} showViewIcon={false}/>
                    <DownloadButton primaryText={"Anti- Ragging Committee"} secondaryText={"Updated on: July 19th, 2025"} showDownloadIcon={true} showChip={false} downloadLink={""} showViewIcon={false}/>

                    
                    
                    
                </Grid>


            </Grid>


        </>
    )

}
export default AboutUs;