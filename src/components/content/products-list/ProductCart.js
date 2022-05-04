import { Card, CardContent, Container, Grid, Typography, CardActions, Button, Tooltip, IconButton } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react"
import data from '../../../data.json'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Price = {
    textDecoration: 'line-through',
    fontSize: 'smaller'
}
const promotionPrice = {
    color: 'red',
    fontSize: 'x-large'

}
const button = {
    background: 'black',
    color: 'aliceblue',
    fontFamily: 'system-ui',
    width: '100px',
    fontSize: '13px'
}

const ProductCart = ({ arrProduct, width }) => {

    let dispatch = useDispatch();
    const { cart, alert_ } = useSelector((reduxData) => reduxData.taskReducer);
    // Xử lí sự kiện add cart
    const handleCart = (element) => {

        dispatch({
            type: 'ADD_CART',
            payload: {
                cart: {...element, quantity: 1}
            }
        });
        dispatch({
            type: 'ALERT',
            payload: {
                alert_: {
                    status: true,
                    severity: 'success',
                    message: 'Thêm giỏ hàng thành công'
                }
            }
        })
    };

    return (
        <>
            {
                width > 800 ?
                    // Desktop
                    <Grid item xs={10} >
                        <Grid container >
                            {
                                arrProduct.map((element, index) => {
                                    return (
                                        <Grid item sm={12} md={6} lg={4} key={index} marginBottom={5}>
                                            <Card sx={{ maxWidth: 300 }} className='Effect' >
                                                <Grid item xs={12} style={{ textAlign: 'center' }} className="shadowEffect">
                                                    <img src={element.imageUrl} width='300' alt="1" />
                                                </Grid>
                                                <CardContent className="shadowEffect">
                                                    <Typography textAlign='left' style={{
                                                        wordBreak: 'break-all'
                                                    }}>
                                                        {element.name}
                                                    </Typography>
                                                    <Typography textAlign='center' style={Price}>
                                                        <b>{element.buyPrice.toLocaleString()}</b>
                                                    </Typography>
                                                    <Typography textAlign='center' style={promotionPrice}>
                                                        <b>{element.promotionPrice.toLocaleString()}<sup>₫</sup> </b>
                                                    </Typography>
                                                </CardContent>
                                                <CardActions className="middle">
                                                    <Link to={element._id}>
                                                        <Button style={button} variant="contained"  >
                                                            Chi tiết
                                                        </Button>
                                                    </Link>
                                                </CardActions>
                                                <CardActions >
                                                    <Grid container>
                                                        <Grid item xs={12}>
                                                            <Tooltip placement="right" title='Add to cart' disableFocusListener >
                                                                <IconButton className="buttonAddToCard" onClick={() => handleCart(element)}>
                                                                    <ShoppingCartIcon className="iconAddToCard" />
                                                                </IconButton>
                                                            </Tooltip>
                                                        </Grid>
                                                    </Grid>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                    :
                    // Mobile
                    <Grid item xs={12} >
                        <Grid container >
                            {
                                arrProduct.map((element, index) => {
                                    return (
                                        <Grid item xs={12} key={index} marginBottom={5}>
                                            <Card sx={{ maxWidth: 300 }} className='Effect' >
                                                <Grid item xs={12} style={{ textAlign: 'center' }} className="shadowEffect">
                                                    <img src={element.imageUrl} width='300' alt="1" />
                                                </Grid>
                                                <CardContent className="shadowEffect">
                                                    <Typography textAlign='left' style={{
                                                        wordBreak: 'break-all'
                                                    }}>
                                                        {element.name}
                                                    </Typography>
                                                    <Typography textAlign='center' style={Price}>
                                                        <b>{element.buyPrice.toLocaleString()}</b>
                                                    </Typography>
                                                    <Typography textAlign='center' style={promotionPrice}>
                                                        <b>{element.promotionPrice.toLocaleString()}<sup>₫</sup> </b>
                                                    </Typography>
                                                </CardContent>
                                                <CardActions className="middle">
                                                    <Button style={button} variant="contained" href={`products/${element._id}`} >
                                                        Chi tiết
                                                    </Button>
                                                </CardActions>
                                                <CardActions >
                                                    <Grid container>
                                                        <Grid item xs={12}>
                                                            <Tooltip placement="right" title='Add to cart' disableFocusListener >
                                                                <IconButton className="buttonAddToCard">
                                                                    <ShoppingCartIcon className="iconAddToCard" />
                                                                </IconButton>
                                                            </Tooltip>
                                                        </Grid>
                                                    </Grid>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
            }

        </>
    )
}

export default ProductCart