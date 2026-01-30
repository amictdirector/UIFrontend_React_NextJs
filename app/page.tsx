'use client'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect, useRef } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import SchoolIcon from '@mui/icons-material/School';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import CollectionsIcon from '@mui/icons-material/Collections';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ReportIcon from '@mui/icons-material/Report';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import GradingIcon from '@mui/icons-material/Grading';
import Home from './Components/Home'
import Header from './Components/Header'
import AboutUs from './Components/AboutUs'
import Chairman from './Components/Messages/Chairman'
import ViceChairman from './Components/Messages/ViceChairman'
import Director from './Components/Messages/Director'
import GeneralSecretary from './Components/Messages/GeneralSecretary'
import Courses from './Components/Courses'
import MobViewSideMenu from './Components/MobViewSideMenu';
import FeeStructureSelectionMenu from './Components/FeeStructureSelectionMenu'
import EligibilityCriteria from './Components/EligibilityCriteria';
import FacultyMembers from './Components/FacultyMemebers';
import Fab from '@mui/material/Fab';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import { SvgIconComponent } from '@mui/icons-material'
import DraftsIcon from '@mui/icons-material/Drafts';
import HorizontalMenu from './Components/HorizontalMenu';
import Footer from './Components/Footer';
import Slider from './Components/Slider';
import sliderImageData from "./Data/SliderImages.json"
import SocialLinks from "./Data/SocialLinks.json"
import Syllabus from './Components/Syllabus';
import Results from './Components/Results';
import Gallery from './Components/Gallery'
import ContactUs from './Components/ContactUs'
import Enquiry from './Components/Enquiry';

export default function Page() {
  const scrollRef = useRef(null);
  const [selectedMenu, setSelectedMenu] = useState('Home');
  const [menuBarHovered, setMenuBarHovered] = useState(false);
  const [MenuIconToShow, setMenuIconToShow] = useState<SvgIconComponent | null>(HomeIcon);
  const [drawerState, setDrawerState] = useState<boolean>(false);
  const [ComponentToShow, setComponentToShow] = useState<React.ComponentType | null>(null);


  const menuIconMap: Record<string, SvgIconComponent> = {
    'Home': HomeIcon,
    'About Us': AnnouncementIcon,
    'Chairman': DraftsIcon,
    "Vice Chairman": DraftsIcon,
    "Director": DraftsIcon,
    "General Secretary": DraftsIcon,
    'Academices': SchoolIcon,
    'Admission': FileOpenIcon,
    'Courses': LocalLibraryIcon,
    "Syllabus":LocalLibraryIcon,
    "Results":EmojiEventsIcon,
    'Facilities': RoomPreferencesIcon,
    'Gallery': CollectionsIcon,
    'Naac': WorkspacePremiumIcon,
    'Naac Login': VpnKeyIcon,
    'RTI 2005 (SEC - 4)': ContactMailIcon,
    'Scholarship Scheme': HistoryEduIcon,
    'Grievance Form': ReportIcon,
    'SSR Report': GradingIcon,
    'Contact Us': ContactPhoneIcon
  }
  const componentMap: Record<string, React.ComponentType> = {
    Home: Home,
    "About Us": AboutUs,
    "Chairman": Chairman,
    "Vice Chairman": ViceChairman,
    "Director": Director,
    "General Secretary": GeneralSecretary,
    "Courses": Courses,
    "Fees":FeeStructureSelectionMenu,
    "Eligibility":EligibilityCriteria,
    "Faculty":FacultyMembers,
    "Syllabus":Syllabus,
    "Results":Results,
    "Gallery":Gallery,
    'Contact Us': ContactUs,
    'Enquiry':Enquiry
  }
  const SelectedComponent = selectedMenu ? componentMap[selectedMenu] : null;
  const expandFirstLevel = (menu: any) => {
    console.log("First child menu clicked:" + menu)
    setSelectedMenu(menu);
  }
  const handleMenuClick = (menu: any) => {
    console.log('Menu clickssss:', menu)
    setSelectedMenu(menu);
    setMenuIconToShow(menuIconMap[menu] || null)
    setDrawerState(!drawerState);


  };

  // this is not needed anymore, MUI drawer is discarded so is this.
  const toggleDrawer = (drawerState: boolean) => {
    setDrawerState(!drawerState);
  }

  return (

    <>
      <Header />
      <HorizontalMenu handleMenuClick={handleMenuClick} expandFirstLevel={expandFirstLevel} selectedMenu={selectedMenu}/>
      
      <Box sx={{
        height: 70,
        background: '',
        boxShadow: '',
        color: 'black',
        alignContent: 'center',
        position: 'fixed',
        top: { xs: '5px', sm: '5px' },
        right: { xs: '5px', sm: '5px' },
        display: { xs: 'block', lg: 'none' },
        zIndex: 999
      }}>
        <Grid container justifyContent={'right'} sx={{ pr: '10px' }} >

          <Fab color="primary" aria-label="add" onClick={() => toggleDrawer(drawerState)}>
            {MenuIconToShow && <MenuIconToShow sx={{ color: 'white', fontSize: '30px' }} />}
          </Fab>
          {drawerState && <MobViewSideMenu selectMenu={handleMenuClick} />}
        </Grid>
      </Box>
      <Box sx={{ background: '', margin: { xs: '40px 5px 50px 5px', md: '40px 5px 100px 5px' }, height: '', borderRadius: '5px', position: 'relative' }}>
        {SelectedComponent && <SelectedComponent  />}
      </Box>
      <Box height={"20px"}>
        {/*EMPTY SPACE FOR XS, OTHERWISE IT WILL HIDE THE CONTENT FOR CURRENTLY VIEWING COMPONENT*/}
      </Box>
      <Footer socialLinks={SocialLinks}/>
      
    </>
  );
}
