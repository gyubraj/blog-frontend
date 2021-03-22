
const formAlert = (props) => {

    return (
        <div className={`alert alert-dismissible fade show ${props.alertClass}`} role="alert">
            {props.message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={props.handleClose}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>)
}
export default formAlert