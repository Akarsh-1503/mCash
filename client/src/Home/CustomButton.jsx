import { Box, Typography, styled } from "@mui/material"


const MenuIcon=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    color: '#6101ac',
    [theme.breakpoints.down('lg')]:{
        display:'flex',
        flexDirection:'column'
    }

}))


const Border=styled(Box)`
    border-bottom: 2px solid #f0f0f0;
`
export const CustomButton=()=>{

    return (
    <>
        <MenuIcon>
            
              <Border>
                <Typography>
                    Redeem
                </Typography>
            </Border>
            <Border>
                <Typography>
                    Transaction
                </Typography>
            </Border>
            <Border>
                <Typography>
                    Invite a Friend
                </Typography>
            </Border>
            <Border>
                <Typography>
                    Rate us
                </Typography>
            </Border>
            <Border>
                <Typography>
                    Help & Support
                </Typography>
            </Border>
            <Border>
                <Typography>
                    Privacy Policy
                </Typography>
            </Border>
        </MenuIcon>
    </>
    )
}