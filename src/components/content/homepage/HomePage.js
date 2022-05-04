import Lading from "./carousel/Lading"
import LastesProduct from "./lastest-product/LastestProduct"

import { useEffect, useState } from "react"
import ViewAll from "./viewall/ViewAll"
import { Container, Typography, Grid } from "@mui/material"
import Intro from "./introduce/Intro"
import Intro2 from "./introduce/Intro2"


const HomePage = ({ width }) => {

    const [arrLastestProduct, setArrLastestProduct] = useState([]); // Tạo HookState để chứa mảng LastestProduct
    const [showIntro1, setShowIntro1] = useState(false);
    const [showIntro2, setShowIntro2] = useState(false);
    // Call get 8 limit
    const fetchApi = async (url, body) => {
        const response = await fetch(url, body);
        const data = await response.json();
        return data
    };
    useEffect(() => {
        fetchApi('https://data-shop24h.herokuapp.com/products?limit=8')
            .then((data) => {
                setArrLastestProduct(data.data);
            })
            .catch((error) => {
                console.log(error);
            })
        // Show Introduce ra
        setShowIntro1(true)
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 800) {
                setShowIntro2(true)
            }
        })
    }, []);


    return (
        <>
            <Lading width={width} />
            <Container maxWidth='xxl' className='bg_introduce' >
                <Grid container justifyContent='center' padding='20px'>
                    <Typography variant="h3" style={{ fontFamily: 'fantasy' }}>ABOUT US</Typography>
                </Grid>
                {
                    showIntro1 ?
                        <Intro />
                        :
                        null
                }
                {
                    showIntro2 ?
                        <Intro2 />
                        :
                        null
                }

            </Container>
            <Container maxWidth='xxl' className="bg">
                <LastesProduct
                    arrLastestProduct={arrLastestProduct}  // ARR LASTEST
                />
                <ViewAll />
            </Container>

        </>
    )
}

export default HomePage