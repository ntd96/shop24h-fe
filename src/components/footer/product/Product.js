import { Typography, Grid, Link, Stack } from "@mui/material"
import '../../header/iconNavBar/icon.css'

const Product = () => {
    return (
        <>
            <Grid item xs={3} style={{ color: 'azure' }}>
                <Stack spacing={1} style={{ fontSize: 14 }}>
                    <Typography variant="h6">
                        PRODUCTS
                    </Typography>
                    <Grid item>
                        <Link underline="none" color="inherit" href="#">
                            <Typography variant="p" className="icon">
                                Laptop
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link underline="none" color="inherit" href="#">
                            <Typography variant="p" className="icon">
                                Cấu hình PC
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link underline="none" color="inherit" href="#">
                            <Typography variant="p" className="icon">
                                Màng hình
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link underline="none" color="inherit" href="#">
                            <Typography variant="p" className="icon">
                                Thiết bị điện thoại
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link underline="none" color="inherit" href="#">
                            <Typography variant="p" className="icon">
                                Phụ kiện, linh kiện
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link underline="none" color="inherit" href="#">
                            <Typography variant="p" className="icon">
                                Chuột, bàn phím, tai nghe
                            </Typography>
                        </Link>
                    </Grid>
                </Stack>
            </Grid>
        </>
    )
}

export default Product