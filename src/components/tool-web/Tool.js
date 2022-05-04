import { Button, Grid, IconButton } from "@mui/material"
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import './Tool.css'
import { useEffect } from "react";
const Tool = () => {
    const toTheTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return (
        <>
            <Grid style={{
                position: 'fixed',
                right: 20,
                bottom: 20
            }}>
                    <IconButton onClick={toTheTop} >
                        <ArrowCircleUpRoundedIcon className="tool_icon" />
                    </IconButton>
            </Grid>
        </>
    )
}

export default Tool