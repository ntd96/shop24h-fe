import { Breadcrumbs, Container, Link } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';

const BreadCrumbs = ({ arrBreadCrumb }) => {
    return (
        <Container maxWidth='xl'  >
            <Breadcrumbs style={{ marginTop: 20 }}  >
                {
                    arrBreadCrumb.map((element, index) => {
                        return (
                            <Link underline="none" color="inherit" href={element.url} sx={{ display: 'flex', alignItems: 'center' }} key={index} >
                                {element.name}
                            </Link>
                        )
                    })
                }
            </Breadcrumbs>
        </Container>
    )
}
export default BreadCrumbs