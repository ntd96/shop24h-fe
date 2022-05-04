import { Grid, Typography, Link, Stack } from "@mui/material"

const Support = () => {
    return (
        <>
            <Grid item xs={3} sx={{ color: 'azure' }}>
                <Stack spacing={1} sx={{ fontSize: 14 }}>
                    <Typography variant="h6">
                        HỖ TRỢ
                    </Typography>
                    <Grid item>
                        <Link underline="none" color="inherit" href="#">
                            <Typography variant="p" className="icon">
                                Bảo hành
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link underline="none" color="inherit" href="#">
                            <Typography variant="p" className="icon">
                                Kỹ thuật camera
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link underline="none" color="inherit" href="#">
                            <Typography variant="p" className="icon">
                                Giao hàng
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item >
                        <Link underline="none" color="inherit" href="#">
                            <Typography variant="p" className="icon">
                                CSKH
                            </Typography>
                        </Link>
                    </Grid>
                </Stack>
            </Grid>
        </>
    )
}

export default Support