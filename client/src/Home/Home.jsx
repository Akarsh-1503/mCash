
import {Box,Typography,styled, IconButton, Drawer, List,ListItem} from '@mui/material';
import Banner from './Banner';
import {Menu} from '@mui/icons-material';
import { useState } from 'react';
import { CustomButton } from './CustomButton';
import Content from './BodyContent';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Footer } from './Footer';


const MenuButton=styled(IconButton)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    color: 'inherit',
    [theme.breakpoints.down('lg')]:{
        display:'flex',
        flexDirection:'column'
    }

}))

const Notifier= styled(Box)`
    cursor:pointer;
    color:grey;
    padding:5px;
    margin-right: 5px;
`;
export const Home=()=>{

    const [open,setopen]= useState(false);
    
    const handleOpen=()=>{
        setopen(true);
    }
    const handleClose =()=>{
        setopen(false);
    }

    const list=()=>(
        
        <List>
            <ListItem button>
                <CustomButton/>
            </ListItem>
        </List>
        
    )


    return (
        <Box style={{backgroundColor:'#F2F2F2'}}>
            
            <Box style={{display:'flex',backgroundColor:'white',boxShadow: "0 -3px 20px 0 rgb(0 0 0 / 30%)"}}>  
                <MenuButton onClick={handleOpen}>
                    <Menu/>
                </MenuButton>
                
                
                <Drawer open={open} onClick={handleClose}>
                            {list()}
                </Drawer>

                <Typography style={{color:'#6101ac', marginTop: '7px', marginRight:'auto', fontWeight:600}}>
                    HOME
                </Typography>
                <Notifier>
                    <NotificationsActiveIcon />
                </Notifier>

            </Box>
            <Banner/>
            <img src="https://khabar4u.in/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-27-at-10.16.48-PM-768x820.jpeg" style={{cursor:'pointer', width:'100%'}} />
            <Content/>

            <Footer/>
        </Box>    
    )
}