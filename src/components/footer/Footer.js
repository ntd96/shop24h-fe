import { Container, Grid } from "@mui/material"
import Product from "./product/Product"
import Services from "./services/Services"
import Social from "./social/Social"
import Support from "./support/Support"
import useWindowDimensions from "../../windowDimension/Window"

const padding = {
    paddingTop: '35px',
    paddingBottom: '35px'
}

const Footer = () => {
    const { width } = useWindowDimensions()
    return (
        <>
            {
                width > 800 ?
                    <Container maxWidth='xxl' className="bg" style={{ backgroundPosition: 'center' }} >
                        <Container sx={padding} maxWidth='lg' >
                            <Grid container>
                                <Product />
                                <Services />
                                <Support />
                                <Social />
                            </Grid>
                        </Container>
                    </Container>
                    :
                    <Container maxWidth='xxl' className="bg" style={{ backgroundPosition: 'center' }} >
                        <Container sx={padding} maxWidth='lg' >
                            <Grid container style={{display: 'flex',justifyContent: 'center'}}>
                                <Social />
                            </Grid>
                        </Container>
                    </Container>
            }

        </>
    )
}

export default Footer