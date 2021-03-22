import { Link } from "react-router-dom"

const error = (props) => {

    return (
        <div class="page-wrap d-flex flex-row align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 text-center">
                        <span class="display-1 d-block mt-3 mb-1">Error !!</span>
                        <div class="display-5 mb-2 lead">Couldn't Load Data.</div>
                        <Link to={`/${props.match.params.errorpage}`}><button className="btn btn-danger mb-4">Try Again</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default error