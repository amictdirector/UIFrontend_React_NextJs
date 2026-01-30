'use client';
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import menus from '../Data/MenuSubMenu.json'
import React, { useRef, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
const MobViewSideMenu = ({selectMenu}) => {
    const [showSubMenu, setShowSubMenu] = useState<string>("none");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef({});
    const handleShowSubMenu = (menuName: string) => {
        setShowSubMenu(showSubMenu === 'block' ? 'none' : 'block');
        const childToShow = menuRef.current[menuName];
        childToShow.style.display = childToShow.style.display === 'none' || childToShow.style.display === '' ? 'block' : 'none';
    }
    return (
        <>
        <Grid
                sx={{
                    zIndex: 99999,
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    top: '0px', left: '0px',
                    borderRadius: '12px',
                    backgroundColor: 'white',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'right',
                    color: '#000',
                }}
            >
                
                <Box height={'100vh'} width={'250px'} bgcolor={''} boxShadow={'0 0 7px 0px #1f8fc6'} sx={{ overflow: 'auto' }}>
                    <Box  paddingLeft={5} paddingRight={4} display={'flex'} justifyContent={'space-between'} alignItems={'center'} height={'60px'} width={'100%'} sx={{ background: 'linear-gradient(275deg, rgb(17 135 182) 0%, rgb(10 99 115) 100%)' }}>
                        <Typography color={'white'} fontSize={'15px'} fontWeight={'bold'}>MENU</Typography>
                        <Typography onClick={()=>selectMenu('Home')} color={'white'} fontSize={'15px'} fontWeight={'bold'} ><CloseIcon /></Typography>
                    </Box>
                    <Box position={'relative'} >

                        <Box sx={{
                            flexGrow: 1,
                            overflowY: 'auto',
                            marginBottom: '25px'
                        }}>
                            <Box margin={'10px'} display={'flex'} justifySelf={'center'} alignItems={'center'} height={'1px'} width={'80%'} bgcolor={'black'} />
                            {/* MENU BAR */}
                            <Box overflow={'auto'} paddingLeft={'30px'}>
                                {Object.entries(menus).map(([menuName, value]) => (
                                    <React.Fragment key={menuName}>
                                        {/* MENU */}
                                        <Box onClick={typeof value === 'object' ? () => handleShowSubMenu(menuName) : ()=>selectMenu(menuName) } padding={'10px'} alignContent={'center'} width={'inherit'} color={'black'} marginBottom={'20px'} sx={{ ":hover": { cursor: 'pointer', background: 'linear-gradient(275deg, rgb(17 135 182) 0%, rgb(10 99 115) 100%)', color: 'white' } }}>
                                            <Typography fontWeight={'bold'} fontSize={'16px'}>{menuName}{typeof value === 'object' && (<ArrowDropDownIcon />)}</Typography>
                                        </Box>
                                        {typeof value === 'object' && (
                                            <Box ref={(childMenuBox) => {menuRef.current[menuName] = childMenuBox}} sx={{ display: 'none' }}>
                                                {Object.entries(value).map(([subMenuName, subMenuValue]) => (
                                                    <React.Fragment >
                                                        {/* MENU - CHILD */}
                                                        <Box onClick={typeof subMenuValue === 'object' ? () => handleShowSubMenu(subMenuName) : ()=>selectMenu(subMenuName)} key={subMenuName} paddingLeft={'20px'} marginTop={'10px'} marginBottom={'10px'} bgcolor={''} color={'black'} className={'subMenu'} sx={{ display: '', ":hover": { cursor: 'pointer', background: 'linear-gradient(275deg, rgb(17 135 182) 0%, rgb(10 99 115) 100%)', color: 'white', '& .childOfChild': { display: 'block', } } }}>
                                                            <Typography fontSize={'14px'}>{subMenuName}{typeof subMenuValue === 'object' && (<ArrowDropDownIcon />)}</Typography>
                                                        </Box>
                                                        {typeof subMenuValue === 'object' && (
                                                            <Box ref={(childOfChildMenuBox) => {menuRef.current[subMenuName] = childOfChildMenuBox}} sx={{ display: 'none', background: '' }}>
                                                                {Object.entries(subMenuValue).map(([childOfChildMenuName]) => (
                                                                    <Box onClick={()=>selectMenu(childOfChildMenuName)} paddingLeft={'30px'} marginTop={'10px'} marginBottom={'10px'} bgcolor={''} color={'black'} className={'childOfChild'} sx={{ display: '', ":hover": { cursor: 'pointer', background: '#434242', color: 'white' } }}>
                                                                        {/* MENU - CHILD OF CHILD */}
                                                                        <Typography fontSize={'12px'}>{childOfChildMenuName}</Typography>
                                                                    </Box>
                                                                ))}
                                                            </Box>
                                                        )
                                                        }
                                                    </React.Fragment>
                                                ))}
                                            </Box>
                                        )}
                                    </React.Fragment>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>


            </Grid>
            
        </>
    )

}

export default MobViewSideMenu;