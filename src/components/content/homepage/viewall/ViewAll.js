import { Button, Container, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import './ViewAll.css'


const ViewAll = () => {
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={12} textAlign='center' marginBottom={4} marginTop={3} >
                        <Link to={`/products`}>
                            <Button variant="contained" style={{ background: 'black' }}  className="hover" >
                                View All
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ViewAll