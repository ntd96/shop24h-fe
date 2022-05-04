import { Typography } from "@mui/material";
import BreadCrumbs from "../components/breadcrumb/BreadCrumbs"
import Cart from "../components/content/cart/Cart";
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

const CartPages = ({ user, setUser }) => {

    const arrBreadCrumb = [
        {
            name: '🏠 Trang chủ',
            url: '/'
        },
        {
            name: 'Cart',
            url: '/cart'
        },
    ];

    return (
        <>
            <Header user={user} setUser={setUser} />
            <BreadCrumbs arrBreadCrumb={arrBreadCrumb} />
            <Cart />
            <Footer />
        </>
    )
}

export default CartPages