import { AppBar, Container, Grid, Button } from "@mui/material"
import IconNavBar from "./iconNavBar/IconNavBar"
import Logo from "./logo/Logo"
import useWindowDimensions from "../../windowDimension/Window"
import { Link } from "react-router-dom"

const icon = {
    margin: 'auto',
    textAlign: 'right',
    marginInline: '-55px',
    display: 'flex',
    justifyContent: 'flex-end'
}

const Header = ({ user, setUser }) => {
    const { height, width } = useWindowDimensions()
    return (
        <>
            {
                width > 800 ?
                    <AppBar position="static">
                        <Container maxWidth='xxl' className="bg">
                            <Container maxWidth='xxl'>
                                <Grid container>
                                    <Grid item xs={6} style={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <Logo />
                                        <Link to={'/products'}>
                                            <Button variant='text' style={{
                                                color: 'black',
                                                borderRadius: '40px',
                                                fontSize: 'large',
                                                fontFamily: 'sans-serif',
                                                marginLeft: '20px',
                                                color: 'aliceblue',
                                                fontStyle: 'italic'
                                            }}
                                            >
                                                Products
                                            </Button>
                                        </Link>

                                        <Button variant='text' style={{
                                            color: 'black',
                                            borderRadius: '40px',
                                            fontSize: 'large',
                                            fontFamily: 'sans-serif',
                                            marginLeft: '20px',
                                            color: 'aliceblue',
                                            fontStyle: 'italic'
                                        }} >
                                            About Us
                                        </Button>
                                    </Grid>
                                    

                                    <Grid item xs={6} sx={icon} alignItems='center'>
                                    <marquee> <b style={{color:'black'}}>Khung giờ vàng, cùng nhau tham gia, đón săn quà giá trị, thời gian diễn ra từ 30/4 đến 1/05 </b> </marquee>
                                        <IconNavBar user={user} setUser={setUser} />
                                    </Grid>
                                </Grid>
                            </Container>
                        </Container>
                    </AppBar>
                    :
                    <AppBar position="static">
                        <Container maxWidth='xxl' className="bg">
                            <Container maxWidth='xxl'>
                                <Grid container>
                                    <Grid item xs={6} style={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <Logo />
                                        <Button variant='text' style={{
                                            color: 'black',
                                            borderRadius: '40px',
                                            fontFamily: 'sans-serif',
                                            color: 'aliceblue',
                                            fontStyle: 'italic'
                                        }}
                                            href='/products'
                                        >
                                            Products
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }} >
                                        <IconNavBar user={user} setUser={setUser} width={width} />
                                    </Grid>
                                </Grid>
                            </Container>
                        </Container>
                    </AppBar>
            }
        </>
    )
}

export default Header