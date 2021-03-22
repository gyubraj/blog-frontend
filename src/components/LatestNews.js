import { Link } from 'react-router-dom';
import { dateTimeConvert } from '../utility/DateTimeConvert';

const latestNews = (props) => {
    return (
        <>
            <li className="media">
                <img className="d-flex mr-3 img-fluid" width="64" src={props.blog.thumbnail} alt="Blog Thumbnail" />
                <div className="media-body">
                    <h5 className="mt-0 mb-1"><Link to={`/blog/${props.blog.slug}`}>{props.blog.title}</Link></h5> {dateTimeConvert(props.blog.date_created, 'date')}
                </div>
            </li ><br />
        </>
    );

}

export default latestNews;