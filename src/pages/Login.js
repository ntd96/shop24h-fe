import { Button, Container, Grid, Paper, Stack, TextField, Typography } from "@mui/material"
import { Box, width } from "@mui/system"
import { auth, googleProvider } from "../Firebase"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import useWindowDimensions from "../windowDimension/Window"

const gg = {
    background: 'coral',
    borderRadius: '50px',
    textAlign: 'center',
    height: 40,
    color: 'black'
}
const layout = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10
}

const Login = () => {
    const { width } = useWindowDimensions()
    let navigate = useNavigate(); // Tạo biến navigate

    // Xử lí sự kiện Login
    const handleLogin = () => {
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                navigate('/') // Khi thành công tự nhảy qua trang chủ Home Page
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <Header />
                <Container maxWidth='sm' style={{ marginTop: '100px' }}>
                    <Box>
                        <Paper style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: 500,
                            borderRadius: 40
                        }}
                            elevation={8} // tăng độ shadow viền
                        >
                            <Grid container  >
                                <Grid item xs={12} style={{ ...layout, marginTop: '50px' }} >
                                    <Grid item xs={8}  >
                                        <Button variant="contained" style={{ ...gg, width: '100%' }} onClick={handleLogin}>
                                            <Typography marginBottom='0px'>
                                                Sign in with google
                                            </Typography>
                                        </Button>

                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{ ...layout, marginTop: '13px' }} >
                                    <Grid item xs={8} >
                                        <Stack spacing={2} >
                                            <TextField fullWidth type='text' variant="outlined" label="Username" />
                                            <TextField fullWidth type='password' variant="outlined" label="Password" />
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{ ...layout, marginBottom: '50px' }} >
                                    <Grid item xs={8}  >
                                        <Button variant="contained" style={{ ...gg, backgroundColor: 'lawngreen', width: '100%' }} onClick={handleLogin}>
                                            <Typography marginBottom='0px' variant="p">
                                                Sign in with google
                                            </Typography>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Grid container>
                            <Grid item xs={12} marginTop={2} marginBottom={10} textAlign='center'>
                                Dont have an account? <span style={{ color: 'blue' }} >Sign up here</span>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>

            <Footer />
        </>
    )
}
export default Login
