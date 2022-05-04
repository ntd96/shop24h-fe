import { Container, Grid, Box, Typography } from '@mui/material'
import './Introduce.css'

const Intro = () => {
    return (
        <>
            <Grid container className='introduce_' >
                <Grid item xs={12} sx={12} md={6}  >
                    <Box className='introduce_first-1' >
                        <Typography variant='h4' className='introduce_text'>About Us ?</Typography>
                        <span className='introduce_text'>
                            Nhân lực là nền tảng cho sự phát triển của Công ty ,
                            vì vậy chúng tôi không ngừng thay đổi,
                            cải tạo trong việc xây dựng đội ngũ nhân sự,
                            đề cao giá trị đạo đức nghề nghiệp và chuyên môn.
                            AirTech luôn được chọn lọc và đào tạo kỹ càng, không ngừng tìm tòi và sáng tạo, phát triển kỹ năng và nghiệp vụ ngày một hoàn thiện hơn để có thể phục vụ và làm hài lòng khách hàng nhất.
                            Hiện tại AirTech đã có hơn <span style={{ color: 'red' }}>150 nhân viên</span> và
                            chúng tôi mong muốn sẽ phát triển và nhân rộng con số này nhiều hơn nữa, đồng thời xây dựng một môi trường làm việc năng động, chuyên nghiệp, nơi mà mọi nhân viên đều có thể phát huy tối đa năng lực, sự sáng tạo và ý thức,tinh thần trách nhiệm cao.
                        </span>
                    </Box>
                </Grid>
                <Grid xs={12} sx={12} md={6} className='introduce_first-2' >
                    <img
                        width={500}
                        src={require('../../../../assets/images/carousel/building2.png')}
                        alt='building'
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default Intro