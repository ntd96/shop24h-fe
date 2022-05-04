import { Grid, Stack, Typography } from "@mui/material"
import Logo from '../../header/logo/Logo'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Social = () => {
    return (
        <>
            <Grid item xs={3}>
                <Stack alignItems='center' style={{ color: 'aliceblue' }}>
                    <Logo />
                    <Typography variant="h5">
                        AirTech
                    </Typography>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }} >
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                        <YouTubeIcon />
                    </Grid>
                </Stack>
            </Grid>
        </>
    )
}

export default Social