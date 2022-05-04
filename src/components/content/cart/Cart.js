import { Button, Container, IconButton, Table, TableBody, TableCell, ButtonGroup, TableHead, TableRow, Grid, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PaymentIcon from '@mui/icons-material/Payment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useDispatch, useSelector } from "react-redux";
import './Cart.css'
import { useState } from "react";
import Alert_ from "../../alert/Alert_";

const Cart = () => {

    let TotalCart = 0;
    let dispatch = useDispatch();
    const { cart } = useSelector((reduxData) => reduxData.taskReducer);


    const [count, setCount] = useState(0)
    // Hàm xử lí sự kiện tăng đơn hàng
    const inCrease = (element) => {
        dispatch({
            type: 'ADD_CART',
            payload: {
                cart: { ...element, quantity: 1 }
            }
        })
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
    // Hàm xử lí sự kiện giảm đơn hàng
    const deCrease = (element) => {
        dispatch({
            type: 'DECREASE_QUANTITY',
            payload: {
                cart: { ...element, quantity: 1 }
            }
        })
        dispatch({
            type: 'ALERT',
            payload: {
                alert_: {
                    status: true,
                    severity: 'info',
                    message: 'Hủy bỏ thành công'
                }
            }
        })
    }
    // Hàm xử lí sự kiện xóa đơn hàng
    const onDelete = (element) => {
        dispatch({
            type: 'DELETE_CART',
            payload: {
                cart: element
            }
        })
        console.log(element);
        dispatch({
            type: 'ALERT',
            payload: {
                alert_: {
                    status: true,
                    severity: 'success',
                    message: 'Hủy bỏ thành công'
                }
            }
        })
    }
    // Tính tổng tiền
    cart.map((element) => {
        return TotalCart = TotalCart + element.promotionPrice * element.quantity
    })
    console.log(TotalCart);
    console.log(cart);

    return (
        <>
            <Container maxWidth='xl'>
                <Table sx={{ minWidth: 360 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> <b>Sản phẩm</b> </TableCell>
                            <TableCell> <b>Giá</b> </TableCell>
                            <TableCell> <b>Số lượng</b> </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            cart.map((element, index) => {
                                return (
                                    <TableRow key={index} >
                                        <TableCell>
                                            <Grid container style={{
                                                display: 'flex',
                                                flexWrap: 'nowrap',
                                                alignItems: 'center'
                                            }}>
                                                <img src={element.imageUrl} width='20%' />
                                                <Grid>
                                                    {element.name}
                                                </Grid>
                                            </Grid>
                                        </TableCell>
                                        <TableCell width='20%'> {element.promotionPrice.toLocaleString()} </TableCell>
                                        <TableCell width='28%'>
                                            <ButtonGroup >
                                                <Button variant="text" style={{ background: 'black' }} onClick={() => deCrease(element)}>
                                                    <RemoveIcon style={{ color: 'white' }} />
                                                </Button>
                                                <input style={{
                                                    width: '60px',
                                                    textAlign: 'center'
                                                }}
                                                    value={element.quantity}
                                                    readOnly
                                                />
                                                <Button variant="text" style={{ background: 'black' }} onClick={() => inCrease(element)} >
                                                    <AddIcon style={{ color: 'white' }} />
                                                </Button>
                                            </ButtonGroup>
                                        </TableCell>
                                        <TableCell width='5%'>
                                            <IconButton onClick={() => onDelete(element)}>
                                                <CloseIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }

                    </TableBody>
                </Table>

                <Grid container style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Grid className='cart__container'>
                        <Grid container className="cart_icon">
                            <Grid item xs={3} style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <AutorenewIcon style={{ fontSize: '50px', color: '#298ec4' }} /> &ensp; <i className="cart_text">Đổi trả dễ dàng</i>
                            </Grid>
                            <Grid item xs={3} style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <PaymentIcon style={{ fontSize: '50px', color: '#298ec4' }} /> &ensp; <i className="cart_text">Thanh toán an toàn</i>
                            </Grid>
                            <Grid item xs={3} style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <SupportAgentIcon style={{ fontSize: '50px', color: '#298ec4' }} /> &ensp; <i className="cart_text">Hỗ trợ 24/7</i>
                            </Grid>
                        </Grid>
                        <hr />
                        <Grid item xs={12}>
                            <Typography variant="h6" >Giao hàng</Typography>
                            <Typography style={{ color: 'grey' }} >Giao hàng tận nơi, nhân viên báo phí vận chuyển</Typography>
                        </Grid>
                        <hr />
                        <Grid container style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Typography style={{ fontSize: 'x-large' }} ><b>Tổng</b></Typography>
                            <Typography style={{ color: 'red', fontSize: 'xx-large' }} ><i>{TotalCart.toLocaleString()}</i></Typography>
                        </Grid>
                        <Grid item xs={12} textAlign='right' marginTop={4} className='cart_button'>
                            <Button variant="contained" style={{ background: '#298abd' }}  >Thanh toán</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Alert_ />
        </>
    )
}

export default Cart