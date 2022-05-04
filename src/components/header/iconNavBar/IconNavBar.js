import { Grid, Box, Menu, MenuItem, Stack, Toolbar, Typography, IconButton, Badge, Popover, Button } from "@mui/material"
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import './icon.css'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase";
import { useSelector } from "react-redux";

const stackLayout = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
const itemLayout = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '5px'
}

const IconNavBar = ({ user, setUser }) => {



    // Tạo 2 State dùng cho menu Tool bar
    const [logOut, setLogOut] = useState(null);
    const [logIn, setLogIn] = useState(null);
    const [cartTrue, setCartTrue] = useState(null);
    const [cartFalse, setCartFalse] = useState(null);

    // Hiển thị MenuItem LogOut
    const onMenuLogOutClick = (event) => {
        setLogOut(event.currentTarget);
    };
    // Hiển thị MenuItem Login
    const onMenuLogInClick = (event) => {
        setLogIn(event.currentTarget);
    }

    // Hiển thị MenuItem cartTrue
    const onMenuCartClick = (event) => {
        setCartTrue(event.currentTarget)
        setCartFalse(event.currentTarget)
    }
    const openTrue = Boolean(cartTrue);
    const openFalse = Boolean(cartFalse);

    //Trỏ chuột ra ngoài
    const handleClose = () => {
        setLogOut(null);
        setLogIn(null);
        setCartTrue(null);
        setCartFalse(null);
    };

    let navigate = useNavigate();

    // Xử lí sự kiện Log Out ra
    const onLogoutClick = () => {
        console.log('click');
        auth.signOut()
            .then(() => {
                setUser(null)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    // Xử lí sự kiện quay về Sign In
    const onSignInClick = () => {
        navigate('/login');
    }
    const { numbercart, cart } = useSelector((reduxData) => reduxData.taskReducer);
    return (
        <>

            {
                user ?
                    <Box>
                        <Grid container>
                            <Grid item xs={12} style={itemLayout} >
                                <Stack direction='row' style={stackLayout}>
                                    <Typography variant="p" style={{
                                        fontSize: 'small',
                                        fontFamily: 'system-ui',
                                        marginInline: '-20px'
                                    }}
                                        className='nav_displayname'
                                    >
                                        {user.displayName}
                                    </Typography>
                                    <Toolbar>
                                        <IconButton
                                            onClick={onMenuLogOutClick}
                                            color="inherit"
                                        >
                                            <img src={user.photoURL} style={{
                                                width: '30px',
                                                borderRadius: '20px'
                                            }} alt='1'
                                                className="nav_image"
                                            />
                                        </IconButton>
                                        <Menu
                                            anchorEl={logOut}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                            open={Boolean(logOut)}
                                            onClose={handleClose} // Trỏ chuột close Menuitem
                                        >
                                            <MenuItem onClick={onLogoutClick}>
                                                <LogoutIcon />
                                                &ensp;
                                                Đăng xuất
                                            </MenuItem>
                                        </Menu>
                                    </Toolbar>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                    :  // Trường hợp Không thì hiện Login
                    <Box style={{ marginRight: '-30px' }}>
                        <Toolbar style={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }} >
                            <IconButton
                                onClick={onMenuLogInClick}
                                color="inherit"

                            >
                                <AccountCircleRoundedIcon />
                            </IconButton>
                            <Menu
                                anchorEl={logIn}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}

                                open={Boolean(logIn)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={onSignInClick} >
                                    <LoginIcon />
                                    &ensp;
                                    Đăng nhập
                                </MenuItem>
                            </Menu>
                        </Toolbar>
                    </Box>
            }
            <Box>
                <Toolbar>
                    <IconButton onClick={onMenuCartClick}>
                        <Badge color="success" badgeContent={numbercart} >
                            <ShoppingCartIcon className='icon' style={{ color: 'antiquewhite' }} />
                        </Badge>
                    </IconButton>
                    {
                        cart.length != 0 ?
                            <Popover
                                anchorEl={cartTrue}
                                open={openTrue}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <Box padding={1}  >
                                    <Grid item xs={12} style={{
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Link to={`/cart`}  >
                                            <Button variant="outlined" >
                                                Xem giỏ hàng
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Box>
                            </Popover>
                            :
                            <Popover
                                anchorEl={cartFalse}
                                open={openFalse}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <Box>
                                    <Typography style={{ padding: '10px' }} >Không có sản phẩm nào.</Typography>
                                </Box>
                            </Popover>
                    }

                </Toolbar>
            </Box>
        </>
    )
}

export default IconNavBar