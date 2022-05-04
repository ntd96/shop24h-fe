import { Container, Grid, Typography, Stack } from "@mui/material"
import Slider from "react-slick/lib/slider"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Lading.css'

const bgPrice = {
    fontSize: '35px',
    fontFamily: 'serif',
    color: 'black',
    fontStyle: 'italic',
    position: 'relative',
    top: '10px'
}
const bgButton = {
    width: '123px',
    height: '45px'
}

const Lading = ({ width }) => {
    const settings = {
        dots: false, // Thanh dấu chấm
        infinite: true, // Vòng lặp vô tận
        speed: 500, // Tốc độ lướt
        slidesToShow: 1, // Hiển thị
        slidesToScroll: 1, // Lướt
        Accessibility: true, // Nút di chuyển
        autoplaySpeed: 1500, // thời gian auto chạy
        autoplay: true,  // Bật auto chạy

    };
    return (
        <>
            {
                width > 800 ?
                    <Container maxWidth='xxl' style={{overflow:'hidden'}} >
                        <Slider {...settings}>
                            {/* 1 */}
                            <Grid className="slider_1">
                                <Grid item xs={12} sm={12} lg={12}>
                                    <img
                                        height={550}
                                        width={900}
                                        src={require('../../../../assets/images/carousel/km3.jpg')}
                                        alt="First slide"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} lg={12}>
                                    <img

                                        height={550}
                                        width={900}
                                        src={'https://photo2.tinhte.vn/data/attachment-files/2021/06/5496018_5490627_53C02C4C-23E1-47D9-A708-E66C152F804C.jpeg'}
                                        alt="First slide"
                                    />
                                </Grid>
                            </Grid>
                            {/* 2 */}
                            <Grid className="slider_1">
                                <Grid item xs={6}>
                                    <img
                                        height={550}
                                        width={900}
                                        src={'https://phukienmaytinh.vn/wp-content/uploads/2021/07/5fd9f5f1b274a_5d6e22a706194gamingsetup.jpg'}
                                        alt="First slide"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <img
                                        height={550}
                                        width={900}
                                        src={'https://hoanghapc.vn/media/news/2010_goc-gaming-dep21.jpg'}
                                        alt="First slide"
                                    />
                                </Grid>
                            </Grid>
                            {/* 3 */}
                            <Grid className="slider_1">

                                <Grid item xs={6}>
                                    <img
                                        height={550}
                                        width={900}
                                        src={'https://tsmall.vn/public/uploads/images/blogs/blog-2.jpg'}
                                        alt="First slide"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <img
                                        height={550}
                                        width={900}
                                        src={'https://1phutcantho.com/wp-content/uploads/2021/01/top-cac-dia-chi-ban-pc-gaming-can-tho-uy-tin-nhat.jpg'}
                                        alt="First slide"
                                    />
                                </Grid>
                            </Grid>
                        </Slider>
                    </Container>
                    :
                    <Container maxWidth='lg' style={{ marginTop: '40px' }}>
                        <Slider {...settings}>
                            <Grid container style={{
                                display: 'flex',
                                alignContent: 'center',
                                flexDirection: 'column'
                            }}>
                                <Grid item xs={12} margin='auto'>
                                    <Typography variant="h6">
                                        <b>Màn hình LCD 27” Cooler Master</b>
                                    </Typography>
                                    <Typography variant="p">
                                        GM27 FQSA-US QHD 2K IPS 165Hz 1ms Freesync/G-Sync Gaming (CMI-GM27-FQSA-US)
                                    </Typography>
                                    <Grid container>
                                        <Grid item xs={12} textAlign='center'>
                                            <button className="btn btn-dark" style={bgButton}> <b>BUY NOW</b></button> &nbsp; <span style={bgPrice}>10,350,000₫</span>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid style={{ marginLeft: '35px' }} >
                                    <img
                                        width={300}
                                        src={require('../../../../assets/images/carousel/carousel_MH_AS_PA247CV.jpg')}
                                        alt="First slide"
                                    />
                                </Grid>

                            </Grid>
                            <Grid container style={{
                                display: 'flex',
                                alignContent: 'center',
                                flexDirection: 'column'
                            }}>
                                <Grid item xs={12} margin='auto'>
                                    <Typography variant="h6">
                                        <b>Màn hình LCD 24” Asus ProArt</b>
                                    </Typography>
                                    <Typography variant="p">
                                        PA247CV FHD IPS 75Hz 100% sRGB Chính Hãng
                                    </Typography>
                                    <Grid container>
                                        <Grid item xs={12} textAlign='center'>
                                            <button className="btn btn-dark" style={bgButton}> <b>BUY NOW</b></button> &nbsp; <span style={bgPrice}>6,650,000₫</span>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid style={{ marginLeft: '35px' }}>
                                    <img
                                        width={300}
                                        src={require('../../../../assets/images/carousel/carousel_MH_CM_GM27.jpg')}
                                        alt="First slide"
                                    />
                                </Grid>
                            </Grid>
                        </Slider>
                    </Container>
            }

        </>
    )
}

export default Lading