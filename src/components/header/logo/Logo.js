import { Link } from 'react-router-dom'
    import useWindowDimensions from '../../../windowDimension/Window'
const Logo = () => {
    const { height, width } = useWindowDimensions()
    return (
        <>
        {
            width > 800 ?
            <Link to={`/`}>
                <img
                    src={require('../../../assets/images/logo/logo.png')}
                    width={110}
                    style={{ margin: '10px' }}
                    alt='M'
                />
            </Link>
            :
            <Link to={`/`}>
                <img
                    src={require('../../../assets/images/logo/logo.png')}
                    width={50}         
                    alt='M'
                />
            </Link>
        }
            
        </>
    )
}

export default Logo