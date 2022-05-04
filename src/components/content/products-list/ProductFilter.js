import { Checkbox, Grid, Stack, Typography, FormControl, Label, TextField, Rating, Button, Select, RadioGroup, Radio, FormControlLabel } from "@mui/material"
import { useState, useEffect } from 'react'
import PaginationP from "./Pagination"

const title = {
    fontFamily: 'revert',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStyle: 'italic'
}


const ProductFilter = ({ setArrProduct, limit, page, setNoPage, setPage, name, setName, min, setMin, max, setMax, type, setType, width }) => {

    // Tạo promise xử lí bđb khi call api
    const fetchApi = async (url, body) => {
        const response = await fetch(url, body);
        const data = await response.json();
        return data
    }

    // Lọc Data products kèm Pagination chỉ update filter name,min,max,type
    useEffect(() => {
        fetchApi(`https://data-shop24h.herokuapp.com/products/?limit=&min=${min}&max=${max}&name=${name}&type=${type}`)
            .then((data) => {
                setArrProduct(data.data.slice(limit * (page - 1), limit * page)); // Chia theo limit để hiển thị lên UI
                setNoPage(Math.ceil(data.data.length / limit)); // Chia số Pagination
                setPage(1); // Khi search, giá trị mặc định data page là 1 (trang đầu tiên)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [name, min, max, type])

    // Cách 2
    // Xử lí sự kiện khi nhấn nút search
    // const onSearchClick = () => {
    //     fetchApi(`http://localhost:8000/products/?limit=&min=${min}&max=${max}&name=${name}&type=${type}`)
    //         .then((data) => {
    //             setArrProduct(data.data.slice(limit * (page - 1), limit * page))
    //             // --
    //             setNoPage(Math.ceil(data.data.length / limit));
    //             setPage(1)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }
    // Cách 1

    return (
        <>
            {
                width > 800 ?
                    // Desktop
                    <Grid item xs={2}>
                        <Stack spacing={10} >
                            {/* Price */}
                            <Stack spacing={2} >
                                <Typography variant="h5" style={title} >
                                    Price
                                </Typography>
                                <Stack direction='row' spacing={1}>
                                    <input className='form-control' placeholder="Min" type='text' onChange={(event) => setMin(event.target.value)} value={min} />
                                    <Stack style={{ marginTop: '5px' }} > ⚊ </Stack>
                                    <input className='form-control' placeholder="Max" type='text' onChange={(event) => setMax(event.target.value)} value={max} />
                                </Stack>
                                {/* <Button variant="outlined" onClick={onHandleClick}>Seach</Button> Dùng cho cách 2 */}
                            </Stack>
                            {/* Name */}
                            <Stack spacing={2}>
                                <Typography variant="h5" style={title}>
                                    Name
                                </Typography>
                                <TextField label="Search" type='search' onChange={(event) => setName(event.target.value)} value={name} />
                            </Stack>
                            {/* Type */}
                            <Stack spacing={2}>
                                <Typography variant="h5" style={title} >
                                    Price
                                </Typography>
                                <FormControl>
                                    <RadioGroup>
                                    <Grid container>
                                            <Grid item xs={6} sm={12} style={{ display: 'grid' }} >
                                                <FormControlLabel control={<Radio value="" onClick={(event) => setType(event.target.value)} />} label="Tất cả" />
                                                <FormControlLabel control={<Radio value="626e33adc5b897c0f25f0e29" onClick={(event) => setType(event.target.value)} />} label="AOC" />
                                                <FormControlLabel control={<Radio value="626e3428c5b897c0f25f0e2d" onClick={(event) => setType(event.target.value)} />} label="Asus" />
                                                <FormControlLabel control={<Radio value="626e3435c5b897c0f25f0e2f" onClick={(event) => setType(event.target.value)} />} label="LG" />
                                                <FormControlLabel control={<Radio value="626e343cc5b897c0f25f0e31" onClick={(event) => setType(event.target.value)} />} label="Dell" />
                                            </Grid>
                                            <Grid item xs={6} sm={12} style={{ display: 'grid' }}>
                                                <FormControlLabel control={<Radio value="626e3444c5b897c0f25f0e33" onClick={(event) => setType(event.target.value)} />} label="Samsung" />
                                                <FormControlLabel control={<Radio value="626e344bc5b897c0f25f0e35" onClick={(event) => setType(event.target.value)} />} label="MSI" />
                                                <FormControlLabel control={<Radio value="626e3452c5b897c0f25f0e37" onClick={(event) => setType(event.target.value)} />} label="ThinkView" />
                                                <FormControlLabel control={<Radio value="626e345ac5b897c0f25f0e39" onClick={(event) => setType(event.target.value)} />} label="GIGABYTE" />
                                                <FormControlLabel control={<Radio value="626e3461c5b897c0f25f0e3b" onClick={(event) => setType(event.target.value)} />} label="Philips" />
                                            </Grid>
                                        </Grid>
                                    </RadioGroup>
                                </FormControl>
                            </Stack>
                            <Grid container style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }} >
                            </Grid>
                        </Stack>
                    </Grid>
                    :
                    // Mobile
                    <Grid item xs={12}>
                        <Stack spacing={4} >
                            {/* Price */}
                            <Stack spacing={2} >
                                <Typography variant="h5" style={title} >
                                    Price
                                </Typography>
                                <Stack direction='row' spacing={1}>
                                    <input className='form-control' placeholder="Min" type='text' onChange={(event) => setMin(event.target.value)} value={min} />
                                    <Stack style={{ marginTop: '5px' }} > ⚊ </Stack>
                                    <input className='form-control' placeholder="Max" type='text' onChange={(event) => setMax(event.target.value)} value={max} />
                                </Stack>
                                {/* <Button variant="outlined" onClick={onHandleClick}>Seach</Button> Dùng cho cách 2 */}
                            </Stack>
                            {/* Name */}
                            <Stack spacing={2}>
                                <Typography variant="h5" style={title}>
                                    Name
                                </Typography>
                                <TextField label="Search" type='search' onChange={(event) => setName(event.target.value)} value={name} />
                            </Stack>
                            {/* Type */}
                            <Stack spacing={2}>
                                <Typography variant="h5" style={title} >
                                    Brands
                                </Typography>
                                <FormControl>
                                    <RadioGroup>
                                        <Grid container>
                                            <Grid item xs={6} style={{ display: 'grid', justifyContent: 'center' }} >
                                                <FormControlLabel control={<Radio value="" onClick={(event) => setType(event.target.value)} />} label="Tất cả" />
                                                <FormControlLabel control={<Radio value="624dd91a8ea5e7c5dfd7d69f" onClick={(event) => setType(event.target.value)} />} label="AOC" />
                                                <FormControlLabel control={<Radio value="624dd9ba8ea5e7c5dfd7d6a1" onClick={(event) => setType(event.target.value)} />} label="Asus" />
                                                <FormControlLabel control={<Radio value="624dda5c8ea5e7c5dfd7d6a3" onClick={(event) => setType(event.target.value)} />} label="LG" />
                                                <FormControlLabel control={<Radio value="624dda638ea5e7c5dfd7d6a5" onClick={(event) => setType(event.target.value)} />} label="Dell" />
                                            </Grid>
                                            <Grid item xs={6} style={{ display: 'grid', justifyContent: 'center' }}>
                                                <FormControlLabel control={<Radio value="624dda6a8ea5e7c5dfd7d6a7" onClick={(event) => setType(event.target.value)} />} label="Samsung" />
                                                <FormControlLabel control={<Radio value="624dda728ea5e7c5dfd7d6a9" onClick={(event) => setType(event.target.value)} />} label="MSI" />
                                                <FormControlLabel control={<Radio value="624dda798ea5e7c5dfd7d6ad" onClick={(event) => setType(event.target.value)} />} label="ThinkView" />
                                                <FormControlLabel control={<Radio value="624dda808ea5e7c5dfd7d6af" onClick={(event) => setType(event.target.value)} />} label="GIGABYTE" />
                                                <FormControlLabel control={<Radio value="624dda878ea5e7c5dfd7d6b1" onClick={(event) => setType(event.target.value)} />} label="Philips" />
                                            </Grid>
                                        </Grid>
                                    </RadioGroup>
                                </FormControl>
                            </Stack>
                        </Stack>
                    </Grid>
            }
        </>
    )
}

export default ProductFilter