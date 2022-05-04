import BreadCrumbs from "../components/breadcrumb/BreadCrumbs"
import ProductsInfo from "../components/content/products-info/ProductsInfo"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductInfoPages = ({ user, setUser }) => {

    const { productId } = useParams(); // Dùng useParam để lấy Id từ router về

    // Tạo Hook để chưa mảng getbyId sau khi call về
    // Lưu ý: buyPrice mà promotionPrice có sử dụng hàm toLocaleString() bên ProductsInfo
    const [arrDetail, setArrDetail] = useState({
        buyPrice: 0,
        description: '',
        imageUrl: '',
        name: '',
        promotionPrice: 0,
        type: ''
    });

    // Mảng dành cho breadCrumb
    const arrBreadCrumb = [
        {
            name: '🏠 Trang chủ',
            url: '/'
        },
        {
            name: 'Danh mục sản phẩm',
            url: '/products'
        },
        {
            name: arrDetail.name, // ArrDetai.name là hiển thị trường name trên breadcrumb
            url: '#'
        },
    ];

    // Tạo promise xử lí bất đồng bộ
    const fetchApi = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data
    };

    // Lấy product Id đó
    useEffect(() => {
        fetchApi('https://data-shop24h.herokuapp.com/products/' + productId)
            .then((data) => {
                setArrDetail(data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <>
            <Header
                user={user}
                setUser={setUser}
            />
            <BreadCrumbs
                arrBreadCrumb={arrBreadCrumb}
            />
            <ProductsInfo
                arrDetail={arrDetail}
            />
            <Footer />
        </>
    )
}

export default ProductInfoPages