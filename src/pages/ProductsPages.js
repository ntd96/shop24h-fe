import { Container, Grid, Typography } from "@mui/material"
import BreadCrumbs from "../components/breadcrumb/BreadCrumbs"
import ProductFilter from "../components/content/products-list/ProductFilter"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import ProductCart from "../components/content/products-list/ProductCart"
import { useEffect, useState } from "react"
import PaginationP from "../components/content/products-list/Pagination"
import Alert_ from "../components/alert/Alert_"


const ProductsPages = ({ user, setUser, width }) => {

    const arrBreadCrumb = [
        {
            name: '🏠 Trang chủ',
            url: '/'
        },
        {
            name: 'Danh mục sản phẩm',
            url: '/products'
        },
    ];

    const [arrProduct, setArrProduct] = useState([]) // State chứa mảng dữ liệu để load ra danh mục sản phẩm
    const limit = 8;  // Tạo limit hiển thị lên giao diện
    const [page, setPage] = useState(1); // Hook chứa data theo từng page
    const [noPage, setNoPage] = useState(0); // Hook thay đổi 1234 Pagination
    const [name, setName] = useState('') // State chứa dữ liệu value khi nhập name
    const [min, setMin] = useState(''); // State chứa dữ liệu value khi nhập min
    const [max, setMax] = useState(''); // State chứa dữ liệu value khi nhập max
    const [type, setType] = useState(''); //  State chứa type

    // Tạo promise xử lí bđb
    const fetchApi = async (url, body) => {
        const response = await fetch(url, body);
        const data = await response.json();
        return data
    };

    // Lọc Data products kèm Pagination chỉ update datapage(data thay đổi khi nopage thay đổi) , số nopage(số pagination thay đổi) và hiển thị limit(UI)
    useEffect(() => {
        fetchApi(`https://data-shop24h.herokuapp.com/products/?limit=&min=${min}&max=${max}&name=${name}&type=${type}`)
            .then((data) => {
                setArrProduct(data.data.slice(limit * (page - 1), limit * page));
                setNoPage(Math.ceil(data.data.length / limit));
            })
            .catch((error) => {
                console.log(error)
            })
        // Khi chuyển trang, tự động scroll lên đầu
        window.scrollTo(0, 0)
    }, [page, noPage, limit]);

    return (
        <>
            {/* Header */}
            <Header user={user} setUser={setUser} />
            {/* BreadCrumb */}
            <Container maxWidth='xxl'>
                <BreadCrumbs arrBreadCrumb={arrBreadCrumb} />
                {/* Content Products */}
                <Container maxWidth='xl' style={{ textAlign: '-webkit-center' }}>
                    <Grid item xs={12} marginTop={6} marginBottom={7}>
                        <Typography className="titleLastest">
                            PRODUCTS
                        </Typography>
                    </Grid>
                    <Grid container>
                        <ProductFilter
                            setArrProduct={setArrProduct}
                            limit={limit}
                            page={page}
                            setNoPage={setNoPage}
                            setPage={setPage}
                            name={name}
                            setName={setName}
                            min={min}
                            setMin={setMin}
                            max={max}
                            setMax={setMax}
                            type={type}
                            setType={setType}
                            width={width}
                        />
                        <ProductCart
                            arrProduct={arrProduct}
                            width={width}
                        />
                    </Grid>
                </Container>
                {/* Pagination */}
                <PaginationP
                    page={page}
                    noPage={noPage}
                    setPage={setPage}
                />
            </Container>

            <Alert_ />
            {/* Footer */}
            <Footer />
        </>
    )
}

export default ProductsPages