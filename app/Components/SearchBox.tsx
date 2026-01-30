import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
const SearchBox = ({ handleSearchWindo }) => {
    const [value, setValue] = useState('Search');
    const disableSearch = () => {
        console.log("dis")

    }

    const initiateSearch = () => {
        setValue('');
    }
    return (
        <>
            <Box
                sx={{
                    zIndex: 99999,
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    top: '0px', left: '0px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000',
                }}
            >
                <TextField


                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onClick={() => setValue('')} // 👈 Clears value on click
                    id="outlined-required"
                    defaultValue="Search Courses"
                    sx={{
                        marginBottom: '10px',
                        width: '1200px',        // Wider
                        fontSize: '150px',      // Input text size (works for label too)
                        '& .MuiInputBase-root': {
                            height: 100,          // Taller input
                            fontSize: '50px',    // Input text size
                            backgroundColor: '#8c938dff', // 👈 Set your desired background
                        },
                        '& .MuiInputLabel-root': {
                            fontSize: '25px',    // Label text size
                        }
                    }}
                />
                <Button variant="contained" color="success">
                    Search
                </Button>
                <Box position={'absolute'} top={'20px'} right={'20px'}> <Button ><CloseIcon fontSize={'large'} sx={{ color: 'black' }} onClick={() => handleSearchWindo(false)} /></Button></Box>
            </Box>
        </>
    )
}
export default SearchBox;