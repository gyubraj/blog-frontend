import { dateTimeConvert } from '../utility/DateTimeConvert';
import PropTypes from 'prop-types';
const comment = (props) => {
    return (
        <div className="media mb40">
            <i className="d-flex mr-3 fa fa-user-circle-o fa-3x"></i>
            <div className="media-body">
                <h5 className="mt-0 font400 clearfix">
                    <div>
                        <i className="float-right">{dateTimeConvert(props.comment.created_date, 'date')}</i>
                    </div>
                    {props.comment.name}</h5>{props.comment.comment}
            </div>
        </div>
    );
}

comment.propTypes = {
    props: PropTypes.any.isRequired

}

export default comment;