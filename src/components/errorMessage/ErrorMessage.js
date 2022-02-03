import img from './error.gif'
import './errorMessage.scss'
const ErrorMessage = () => {
    return(
        <img src={img} className='img-error' alt='error'/>
    )
}
export default ErrorMessage;