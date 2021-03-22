import { Spinner } from 'react-bootstrap';

const spinner = () => {

    return (
        <div className='container mt-5 mb-5' >
            <Spinner
                as="span"
                animation="grow"
                size="xg"
                role="status"
                aria-hidden="true"
            />
            <h1>Loading...</h1>
        </div>
    )
}
export default spinner