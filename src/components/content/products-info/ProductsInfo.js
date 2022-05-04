import { Container, Grid, Typography, Stack, ButtonGroup, Button, CardContent, Collapse, Card, CardActions, Tooltip, IconButton } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";



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

const ProductsInfo = ({ arrDetail, relateProduct }) => {

    // Hook State dùng cho collapse
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    const [count, setCount] = useState(1)

    // Sự kiện remove
    const onRemoveClick = () => {
        console.log('Remove');
        if (count > 1) {
            setCount(count - 1)
        }
    }
    // Sự kiện add
    const onAddClick = () => {
        console.log('Add');
        setCount(count + 1)
    }


    // Tạo promise xử lí bất đồng bộ
    const fetchApi = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data
    }

    // Sản phẩm chi tiết - arr Type
    const [arrType, setArrType] = useState([])
    useEffect(() => {
        fetchApi('https://data-sop24h.herokuapp.com/producttype')
            .then((data) => {
                setArrType(data.data)
            })
            .catch((error) => {
                console.log(error)
            })
            window.scroll(0,0)
    }, [])
    //Filter Name Type
    const fillterTypeName = arrType.filter((element) => {
        return element._id === arrDetail.type // arrDetail.type chính là ObjectId
    })

    // Tạo Hook State chứa All data Product
    const [arrProducts, setArrProducts] = useState([])
    useEffect(() => {
        fetchApi('https://data-sop24h.herokuapp.com/products')
            .then((data) => {
                setArrProducts(data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    // Lấy tất cả products lọc vs type sau khi đã lấy đc
    const fillterRelateType = arrProducts.filter((element) => {
        return element.type === arrDetail.type // arrDetail.type chính là ObjectId
    })

    // Tạo dispatch
    const dispatch = useDispatch();
    // Lấy global state cart
    const { cart } = useSelector((reduxData) => reduxData.taskReducer);
    // Xử lí sự kiện add to cart , sản phẩm chi tiết
    const handlcart = () => {
        console.log(arrDetail);
        dispatch({
            type: 'ADD_CART',
            payload: {
                cart:{...arrDetail, quantity: count }
            }
        })
    }
    // Xử lí sự kiện add cart , sẩn phẩm liên quan
    const handleAddCart = (element) => {
        dispatch({
            type: 'ADD_CART',
            payload: {
                cart:{...element, quantity: 1 }
            }
        })
    }

    return (
        <>
            <Container maxWidth='xl'>
                {/* Thông tin chi tiết */}
                <Grid container >
                    <Grid item xs={12} sm={5}>
                        <img src={arrDetail.imageUrl} width='100%' />
                    </Grid>
                    <Grid item xs={12} sm={7} marginTop='70px'>
                        <Grid container>
                            <Typography style={{
                                fontSize: 'xx-large'
                            }}>
                                <b> {arrDetail.name} </b>
                            </Typography>
                        </Grid>
                        <Grid container>
                            {
                                fillterTypeName.map((element, index) => {
                                    return (
                                        <Typography style={{
                                            marginTop: 20
                                        }}
                                            key={index}
                                        >
                                            Brand: {element.name}
                                        </Typography>
                                    )
                                })
                            }
                        </Grid>
                        <Grid container style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: 20
                        }}>
                            <del>{arrDetail.buyPrice.toLocaleString('en')}</del>   <sup>đ</sup>
                            &ensp;
                            <Typography style={{
                                fontSize: 'xx-large',
                                fontStyle: 'italic',
                                fontWeight: '800',
                                color: 'red'
                            }}>
                                {arrDetail.promotionPrice.toLocaleString('en')}<sup>đ</sup>
                            </Typography>
                        </Grid>
                        <hr />
                        <Grid container style={{ marginTop: 30 }}>
                            <ButtonGroup >
                                <Button variant="text" style={{ background: 'black' }} onClick={onRemoveClick}>
                                    <RemoveIcon style={{ color: 'white' }} />
                                </Button>
                                <input style={{
                                    width: '60px',
                                    textAlign: 'center'
                                }}
                                    value={count}
                                    readOnly
                                />
                                <Button variant="text" style={{ background: 'black' }} onClick={onAddClick}>
                                    <AddIcon style={{ color: 'white' }} />
                                </Button>
                                <Typography style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginLeft: '10px'
                                }}>
                                    (Số lượng)
                                </Typography>

                            </ButtonGroup>
                        </Grid>

                        <Grid container marginTop={5}>
                            <Button variant="contained" style={{
                                background: '#115f8f',
                                width: '225px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onClick={handlcart}
                            >
                                Add to Cart &ensp;
                                <ShoppingCartIcon style={{ fontSize: 'large' }} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <hr />
                {/* Nút xem thêm */}
                <Grid container style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Button onClick={handleChange} variant='outlined' style={{
                        borderColor: '#002d4c',
                        background: '#2c81ad',
                        color: 'white'
                    }}>
                        Xem thêm
                    </Button>
                </Grid>
                {/* collapse thông tin xem thêm */}
                <Grid container>
                    <Collapse in={checked} collapsedSize={120}>
                        <Grid item xs={12} style={{ display: 'flex' }}>
                            <Grid item xs={12}>
                                <img src={arrDetail.imageUrl} width='100%' alt="images" />
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: '50px' }} >
                                <Typography>
                                    {arrDetail.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Collapse>
                </Grid>
                {/* Sản phẩm liên quan */}
                <Grid container style={{
                    marginTop: '80px',
                    marginBottom: '80px',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Typography style={{
                        fontSize: 'xx-large',
                        fontWeight: 'bold'
                    }}>
                        Sản phẩm liên quan
                    </Typography>
                </Grid>
                {/* Card sản phẩm liên quan */}
                <Grid container style={{ textAlign: '-webkit-center' }} >
                    {
                        fillterRelateType.map((element, index) => {
                            return (
                                <Grid item xs={12} sm={3} key={index} marginBottom={5}>
                                    <Card sx={{ maxWidth: 300 }} className='Effect' >
                                        <Grid item xs={12} style={{ textAlign: 'center' }} className="shadowEffect">
                                            <img src={element.imageUrl} width='300' alt="1" />
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
                                            <Button style={button} variant="contained" href={`${element._id}`} >
                                                Chi tiết
                                            </Button>
                                        </CardActions>
                                        <CardActions >
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Tooltip placement="right" title='Add to cart' disableFocusListener >
                                                        <IconButton className="buttonAddToCard" onClick={() => handleAddCart(element)} >
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
            </Container>
        </>
    )
}

export default ProductsInfo

