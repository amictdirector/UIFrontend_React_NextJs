import Box from "@mui/material/Box";
import menuSubMenu from '../Data/MenuSubMenu.json'
import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Grid from "@mui/material/Grid";
import { Button, Link, Typography } from "@mui/material";

const HorizontalMenu = ({ handleMenuClick, expandFirstLevel, selectedMenu }) => {

    return (
        <Grid container
            justifyItems={'center'}
            sx={{
                height: 70,
                background: '#18181b',
                boxShadow: '',
                color: 'black',
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }
            }}
        >

            <Grid
                container

                alignItems="center"
                justifyContent="space-around"

                sx={{
                    height: '100%', px: 2, background: '#18181b',
                    overflowX: 'visible', flexWrap: 'nowrap', width: 'max-content', position: 'relative', zIndex: 1
                }}
            >
                {
                    Object.entries(menuSubMenu).map(([menu, value]) => (
                        <Box
                            key={menu}

                            onClick={() => {
                                if (typeof value !== 'object') {
                                    handleMenuClick(menu);
                                }
                            }}
                            sx={{
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                                margin: '10px',
                                borderRadius: '5px',
                                width: '150px',
                                color: 'white',
                                alignItems: 'center',
                                height: '100%',
                                background: selectedMenu === menu ? '#4f46e5' : '',
                                ":active": { background: selectedMenu === menu ? '' : '#434242' },
                                "&:hover": {
                                    cursor: 'pointer',
                                    background: selectedMenu === menu ? '' : '#434242',
                                    '& .submenu': {
                                        display: 'block',
                                    }
                                }
                            }}
                        >
                            {menu}

                            {typeof value === 'object' && value !== null ? (
                                <>
                                    <ArrowDropDownIcon />
                                    <Box
                                        className="submenu"
                                        sx={{
                                            zIndex: '99999',
                                            display: 'none',
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            bgcolor: 'grey.800',
                                            color: 'white',
                                            minWidth: '150px',
                                            boxShadow: 3,
                                        }}
                                    >
                                        {Object.entries(value).map(([subKey, subValue]) => (
                                            typeof subValue === 'object' && subValue !== null ? (
                                                <Box

                                                    key={subKey}
                                                    sx={{
                                                        position: 'relative',
                                                        p: 1,
                                                        '&:hover .subsubmenu': {
                                                            display: 'block',
                                                        },
                                                        '&:hover': { bgcolor: 'grey.700', cursor: 'pointer' },
                                                    }}
                                                >
                                                    {subKey} <ArrowRightIcon />
                                                    <Box
                                                        className="subsubmenu"
                                                        sx={{
                                                            display: 'none',
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: '100%',
                                                            bgcolor: 'grey.700',
                                                            minWidth: '150px',
                                                            zIndex: 20,
                                                            p: 1,
                                                            boxShadow: 3,
                                                        }}
                                                    >
                                                        {Object.entries(subValue).map(([key3, value]) => (
                                                            <Box onClick={() => expandFirstLevel(key3)} key={key3} sx={{ p: 1, '&:hover': { bgcolor: 'grey.600' } }}>
                                                                {String(value).startsWith('http') ? <Button> <Typography color="white"><Link href={value} underline="none" color="none">{key3}</Link></Typography> </Button> : key3}
                                                            </Box>
                                                        ))}
                                                    </Box>
                                                </Box>
                                            ) : (
                                                <Box onClick={() => expandFirstLevel(subKey)} key={subKey} sx={{ p: 1, '&:hover': { bgcolor: 'grey.700' } }}>
                                                    {subKey}
                                                </Box>
                                            )
                                        ))}
                                    </Box>
                                </>) : null}
                        </Box>
                    ))
                }

            </Grid>

        </Grid>


    )
}
export default HorizontalMenu;