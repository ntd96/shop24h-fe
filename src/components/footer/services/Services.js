import { Grid, Typography, Link, Stack } from "@mui/material"

const Services = () => {
    return (
        <>
            <Grid item xs={3} style={{ color: 'azure' }}>
                <Stack spacing={1} style={{ fontSize: 14 }}>
                    <Typography variant="h6">
                        DỊCH VỤ
                    </Typography>
                    <Grid item>
                        <Link underline="none" color="inherit" href="#">
                            <Typography variant="p" className="icon">
                                Chính sách trả góp
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link underline="none" color="inherit" href="#">
                            <Typography variant="p" className="icon">
                                Build cấu hình máy tính, laptop
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link underline="none" color="inherit" href="#">
                            <Typography variant="p" className="icon">
                                Vệ sinh thiết bị
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link underline="none" color="inherit" href="#">
                            <Typography variant="p" className="icon">
                                Lắp đặt phòng NET
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link underline="none" color="inherit" href="#">
                            <Typography variant="p" className="icon">
                                Thu mua đồ cũ
                            </Typography>
                        </Link>
                    </Grid>
                </Stack>
            </Grid>
        </>
    )
}

export default Services