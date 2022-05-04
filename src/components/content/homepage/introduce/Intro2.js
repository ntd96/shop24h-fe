
import { Container, Grid, Box, Typography } from '@mui/material'
import './Introduce.css'

const Intro2 = () => {
    return (
        <>
            <Grid container className='introduce_' textAlign='center' >
                <Box className='introduce_second-1'>
                    <Typography className='introduce_second-text'>Giao hàng nhanh</Typography>
                    <img
                        width={450}
                        src={require('../../../../assets/images/carousel/giaohang.png')}
                        alt='Giao hàng'
                    />
                </Box>
                <Box className='introduce_second-2'>
                    <Typography className='introduce_second-text'>Support 24/7 </Typography>
                    <img
                        width={350}
                        src={require('../../../../assets/images/carousel/support.png')}
                        alt='Giao hàng'
                    />
                </Box>
                <Box className='introduce_second-3'>
                    <Typography className='introduce_second-text'>Uy tín, chất lượng</Typography>
                    <img
                        width={350}
                        src={require('../../../../assets/images/carousel/trust.png')}
                        alt='Giao hàng'
                    />
                </Box>
            </Grid>
        </>
    )
}

export default Intro2