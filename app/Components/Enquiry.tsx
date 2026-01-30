import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FeesStructure from '../Data/FeeStructureJson.json'

const Enquiry = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" bgcolor={''} color={'black'}>
             <Box bgcolor={''} justifyContent={'center'} display={'flex'}>
                    <Typography textAlign={'justify'} fontSize={{xs:'20px',md:'80px'}} fontWeight={'bold'}> Enquiry Form </Typography>
                </Box>
            <Box width={{ xs: '100%', md: '30%' }} bgcolor={''} display={'flex'} flexDirection={'column'} padding={{ xs: '20px' }} >
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                    <TextField
                        id="outlined-required"
                        label="First Name"
                    />

                </Box>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} mt={2}>
                    <TextField
                        id="outlined-required"
                        label="Last Name"
                    />
                </Box>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} mt={2}>
                    <TextField
                        id="outlined-required"
                        label="Phone"
                    />
                </Box>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} mt={2}>
                    <TextField
                        id="outlined-required"
                        label="Alternate Phone"
                    />
                </Box>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} mt={2}>
                    <TextField
                        id="outlined-required"
                        label="Email"
                    />
                </Box>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} mt={2}>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Category"
                    >
                        <MenuItem value={"GEN"}>General</MenuItem>
                        <MenuItem value={"SC"}>SC</MenuItem>
                        <MenuItem value={"ST"}>ST</MenuItem>
                        <MenuItem value={"OBC"}>OBC</MenuItem>
                    </Select>
                </Box>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} mt={2}>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Category"
                    >
                        <MenuItem value={"M"}>Male</MenuItem>
                        <MenuItem value={"F"}>Female</MenuItem>
                    </Select>
                </Box>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} mt={2}>
                    <InputLabel id="demo-simple-select-label">Program</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Category"
                    >
                        {
                            Object.entries(FeesStructure).map(([key, value]) =>
                                <MenuItem key={key} value={value.Course}>{value.Course}</MenuItem>
                            )
                        }

                    </Select>
                </Box>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} mt={2}>
                    <TextField
                        id="outlined-required"
                        label="Address"
                    />
                </Box>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} mt={2}>
                    <TextField
                        id="outlined-required"
                        label="City"
                    />
                </Box>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} mt={2}>
                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Category"
                    >
                        <MenuItem value="Select State" selected={true}>Select State </MenuItem>
                        <MenuItem value="26909">Andaman and Nicobar</MenuItem>
                        <MenuItem value="26920">Andhra Pradesh</MenuItem>
                        <MenuItem value="27573">Arunachal Pradesh</MenuItem>
                        <MenuItem value="27718">Assam</MenuItem>
                        <MenuItem value="28070">Bihar</MenuItem>
                        <MenuItem value="28449">Chandigarh</MenuItem>
                        <MenuItem value="28455">Chhattisgarh</MenuItem>
                        <MenuItem value="28644">Dadra And Nagar Haveli</MenuItem>
                        <MenuItem value="28650">Daman And Diu</MenuItem>
                        <MenuItem value="28655">Delhi</MenuItem>
                        <MenuItem value="28678">Goa</MenuItem>
                        <MenuItem value="28697">Gujarat</MenuItem>
                        <MenuItem value="28972">Haryana</MenuItem>
                        <MenuItem value="29297">Himachal Pradesh</MenuItem>
                        <MenuItem value="29424">Jammu and Kashmir</MenuItem>
                        <MenuItem value="29647">Jharkhand</MenuItem>
                        <MenuItem value="29881">Karnataka</MenuItem>
                        <MenuItem value="30137">Kerala</MenuItem>
                        <MenuItem value="177104">Ladakh</MenuItem>
                        <MenuItem value="30279">Lakshadweep</MenuItem>
                        <MenuItem value="30284">Madhya Pradesh</MenuItem>
                        <MenuItem value="30624">Maharashtra</MenuItem>
                        <MenuItem value="31026">Manipur</MenuItem>
                        <MenuItem value="31058">Meghalaya</MenuItem>
                        <MenuItem value="31123">Mizoram</MenuItem>
                        <MenuItem value="31172">Nagaland</MenuItem>
                        <MenuItem value="31227">Odisha</MenuItem>
                        <MenuItem value="31606">Puducherry</MenuItem>
                        <MenuItem value="31626">Punjab</MenuItem>
                        <MenuItem value="31766">Rajasthan</MenuItem>
                        <MenuItem value="32032">Sikkim</MenuItem>
                        <MenuItem value="32052">Tamil Nadu</MenuItem>
                        <MenuItem value="32319">Telangana</MenuItem>
                        <MenuItem value="32659">Tripura</MenuItem>
                        <MenuItem value="32784">Uttar Pradesh</MenuItem>
                        <MenuItem value="33411">Uttarakhand</MenuItem>
                        <MenuItem value="33506">West Bengal</MenuItem>

                    </Select>
                </Box>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} mt={2}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Hostel Required ?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Yes" />
                            <FormControlLabel value="male" control={<Radio />} label="No" />

                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} mt={2}>

                    <Button variant="contained">Submit</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Enquiry;
