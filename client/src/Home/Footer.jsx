import { Box, Typography } from "@mui/material"




export const Footer=()=>{

    return (
        <Box style={{display:'flex', flexDirection:'row', justifyContent:'space-between', color:'white', background:'black'}}>
            <Typography style={{marginLeft:'15px'}}>FAQ</Typography>
            <Typography>Contact Us</Typography>
            <Typography style={{marginRight:'15px'}}>HelpLine</Typography>
        </Box>
    )
}