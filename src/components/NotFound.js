import { Link } from "react-router-dom"


const notFound = () => {
    return (
        <div class="page-wrap d-flex flex-row align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 text-center">
                        <span class="display-1 d-block mt-5">404</span>
                        <div class="mb-4 lead">The page you are looking for is not found.</div>
                        <Link to='/' class="btn btn-link mb-5">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default notFound