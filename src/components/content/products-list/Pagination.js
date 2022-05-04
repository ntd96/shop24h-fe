import { Stack, Pagination, Grid, Container } from "@mui/material"

const PaginationP = ({page, noPage, setPage}) => {

    // Xử lí sự kiện khi change số pagination
    const changePage = (event ,value) => {
        setPage(value) // Ta lấy value số
    }

    return (
        <Container maxWidth='xl' style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '15px'
        }} >
            <Stack spacing={2} >
                <Pagination count={noPage} defaultPage={page} defaultValue={1}  onChange={changePage} color="primary" />
            </Stack >
        </Container>
    )
}

export default PaginationP