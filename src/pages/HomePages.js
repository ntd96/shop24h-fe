import Alert_ from "../components/alert/Alert_"
import HomePage from "../components/content/homepage/HomePage"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Tool from "../components/tool-web/Tool"
import { Grid, Button } from "@mui/material"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePages = ({ user, setUser, width }) => {

    const [showtop, setShowTop] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            if (window.scrollY >= 100) {
                setShowTop(true)
            } else {
                setShowTop(false)
            }
        })
    }, [])

    return (
        <>
            <Header
                user={user}
                setUser={setUser}
            />
            <Alert_ />
            <HomePage width={width} />
            <Footer />
            {
                showtop && <Tool />
            }
        </>
    )
}

export default HomePages