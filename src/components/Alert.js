import { Alert } from 'react-bootstrap'
const AlertShow = (props) => {
    return (
        <div className='container'>
            <Alert variant={props.variant} >
                <Alert.Heading>{props.heading}</Alert.Heading>
                <p>
                    {props.message}
                </p>
            </Alert>
        </div>
    );
}
export default AlertShow