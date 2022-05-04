import { Card, CardContent, Container, Grid, Typography, CardActions, Button, IconButton, Tooltip } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './LastestProduct.css'
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

// Text Price
const Price = {
    textDecoration: 'line-through',
    fontSize: 'smaller'
}
const promotionPrice = {
    color: 'red',
    fontSize: 'x-large'

}
// Chi tiết
const button = {
    background: 'black',
    color: 'aliceblue',
    fontFamily: 'system-ui',
    width: '100px',
    fontSize: '13px'
}

const LastesProduct = ({ arrLastestProduct }) => {

    const dispatch = useDispatch();
    const { cart, alert_ } = useSelector((reduxData) => reduxData.taskReducer);
    console.log(cart);
    console.log(alert_);
    
    const handleAddCart = (element) => {
        console.log('click');
        dispatch({
            type: 'ADD_CART',
            payload: {
                cart: { ...element, quantity: 1 }
            }
        })
//  const [arr, setArr] = useState()
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
        
    }

    return (
        <>
            <Container maxWidth='xxl'  >
                <Container maxWidth='xl' style={{ textAlign: '-webkit-center' }} >
                    <Grid item xs={12} marginBottom={6}>
                        <Typography className="titleLastest">
                            LASTEST PRODUCT
                        </Typography>
                    </Grid>
                    <Grid container >
                        {
                            arrLastestProduct.map((element, index) => {
                                return (
                                    <Grid item sm={12} md={4} lg={3} key={index} marginBottom={5} >
                                        <Card sx={{ maxWidth: 300, maxHeight:500 }} className='Effect' >
                                            <Grid container className="shadowEffect">
                                                <img src={element.imageUrl} width='100%' alt="1" />
                                            </Grid>
                                            <CardContent className="shadowEffect">
                                                <Typography textAlign='left'>
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
                                                <Link to={`products/${element._id}`}>
                                                    <Button style={button} variant="contained" >
                                                        Chi tiết
                                                    </Button>
                                                </Link>
                                            </CardActions>
                                            <CardActions >
                                                <Grid container style={{
                                                    display: 'flex',
                                                    justifyContent: 'center'
                                                }}>
                                                    <Tooltip placement="right" title='Add to cart' disableFocusListener >
                                                        <IconButton className="buttonAddToCard" onClick={() => handleAddCart(element)} >
                                                            <ShoppingCartIcon className="iconAddToCard" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Grid>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </Container>
        </>
    )
}

export default LastesProduct